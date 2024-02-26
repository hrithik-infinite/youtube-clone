import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import logo from "../Assets/YTLOGO.png";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Head = () => {
  const dispatch = useDispatch();
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
      <div className="flex items-center w-1/2">
        <input className="w-full h-full px-4 py-2 rounded-l-full border border-gray-400" type="text" />
        <button className="px-4 py-2 h-full bg-gray-200  rounded-r-full">
          <SearchIcon />
        </button>
      </div>
      <div>
        <AccountCircleRoundedIcon style={{ fontSize: "2em" }} />
      </div>
    </div>
  );
};

export default Head;
