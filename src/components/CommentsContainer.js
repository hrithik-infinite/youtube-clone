import React from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import CommentData from "../utils/comments";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex items-start py-2 px-2 gap-4 ">
      <div>
        <AccountCircleRoundedIcon style={{ fontSize: "3em" }} />
      </div>
      <div>
        <h1 className="text-md font-bold">{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div>
            <Comment key={index} data={comment} />
            <div className="pl-5 border border-l-gray-400">
              <CommentList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentList comments={CommentData} />
    </div>
  );
};

export default CommentsContainer;
