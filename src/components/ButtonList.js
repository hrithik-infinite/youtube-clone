import React from "react";
import Button from "./Button";

const btnList = ["All", "Gaming", "Songs", "Sports", "Live", "News", "Cooking", "Travel"];
const ButtonList = () => {
  return (
    <div className="flex py-2">
      {btnList.map((val) => (
        <Button key={val} name={val} />
      ))}
    </div>
  );
};

export default ButtonList;
