import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { cachedResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestions(searchCache[searchQuery]);
      } else {
        searchResults();
      }
    }, 200);
    return () => clearTimeout(interval);
  }, [searchQuery]);

  const searchResults = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cachedResults({
        [searchQuery]: json[1],
      })
    );
  };
  return (
    <div className="flex shadow-lg p-3 justify-between items-center">
      <div className="flex">
        <img
          className="w-6 mr-2 cursor-pointer"
          alt="Menu"
          onClick={toggleMenuHandler}
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <img
          className="w-28"
          alt="Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/YouTube_Premium_logo.svg/1280px-YouTube_Premium_logo.svg.png"
        />
      </div>
      <div className="relative">
        <form>
          <input
            type="search"
            placeholder="Search for Videos"
            className="border-2 rounded-l-full p-2 w-96 border-r-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="bg-red-600 rounded-r-full py-2 px-4 border-2 border-l-0 border-red-500 text-white font-semibold">
            Search
          </button>
        </form>
        {showSuggestions && (
          <div className="absolute bg-white shadow-lg rounded-b-xl w-full">
            <ul className="">
              {suggestions.map((s, i) => (
                <li className="px-3 p-1 hover:bg-gray-100 rounded-lg" key={i}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="">
        <img
          className="w-10"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="User Icon"
        />
      </div>
    </div>
  );
};

export default Header;
