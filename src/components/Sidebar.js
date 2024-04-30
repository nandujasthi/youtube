import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-3 shadow-lg bg-white h-vh">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Youtube Music</li>
      </ul>
      <h1 className="text-2xl font-bold mt-5 mb-2">Subscriptions</h1>
      <ul>
        <li>Sub 1 </li>
        <li>Sub 2 </li>
        <li>Sub 3</li>
        <li>Sun Music</li>
      </ul>
    </div>
  );
};

export default Sidebar;
