import React from "react";

const VideoCard = ({ info }) => {
  return (
    <div className="m-2 shadow-lg w-80 rounded-lg">
      <img
        src={info?.snippet?.thumbnails.medium.url}
        alt="Thumbnail"
        className="rounded-lg"
      />
      <ul className="p-2">
        <li className="font-bold py-2">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
