import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="p-2 shadow ">
      <div className="flex items-center">
        <img
          className="w-10 h-10"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="usericon"
        />
        <div className="ml-2">
          <span className="font-semibold text-lg mr-2">{name}</span>
          <span className="">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
