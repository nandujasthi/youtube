import React from "react";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex items-center mt-4">
      <img
        className="w-10 h-10 "
        alt="user icon"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      />
      <div className="pl-4">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
