import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="rounded-lg bg-gray-200 py-1 px-3 m-2">{name}</button>
    </div>
  );
};

export default Button;
