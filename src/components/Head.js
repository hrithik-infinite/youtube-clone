import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import logo from "../Assets/YTLOGO.png";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_AUTOCOMPLETE } from "../utils/contants";
import { cacheResult } from "../utils/searchSlice";
const Head = () => {
  const [searchQuery, setSeachQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_AUTOCOMPLETE + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      })
    );
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex items-center justify-between p-5 shadow-lg">
      <div className="flex items-center">
        <MenuIcon style={{ fontSize: "2em" }} className="cursor-pointer" onClick={() => toggleMenuHandler()} />
        <a href="/">
          <img className="h-8 mx-3" alt="youtube-logo" src={logo} />
        </a>
      </div>
      <div className="relative w-1/2">
        <div className="relative">
          <input
            className="w-1/2 h-full px-4 py-2 rounded-l-full border border-gray-400"
            type="text"
            value={searchQuery}
            onChange={(e) => setSeachQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="px-4 py-2 h-full bg-gray-200 rounded-r-full">
            <SearchIcon />
          </button>
        </div>
        {showSuggestions && (
          <div id="suggestions" className="absolute w-1/2 bg-white mt-1 border border-gray-300 rounded-b-lg">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li key={index} className="px-2 py-1 hover:bg-gray-100 cursor-pointer">
                  {" "}
                  <SearchIcon /> {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        <AccountCircleRoundedIcon style={{ fontSize: "2em" }} />
      </div>
    </div>
  );
};

export default Head;
