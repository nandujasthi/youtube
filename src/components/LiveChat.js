import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { randomNameGenerate } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessages({
          name: randomNameGenerate(),
          message: "Dummy Chat Message added here to display in Live Chat",
        })
      );
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-1/3">
      <div className=" border rounded-lg shadow-lg p-4 border-blue-300 h-[600px] overflow-y-auto flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="border p-1"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessages({
              name: "Nandu Jasthi",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          placeholder="Chat Message.."
          className="w-[90%] rounded p-2"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="p-2 bg-green-400 rounded">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
