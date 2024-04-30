import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";
import SelectCountry from "./SelectCountry";

const MainContainer = () => {
  return (
    <div className="p-2">
      <ButtonsList />
      <VideoContainer />
      <SelectCountry />
    </div>
  );
};

export default MainContainer;
