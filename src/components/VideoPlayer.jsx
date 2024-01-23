/* eslint-disable react/prop-types */
import ReactPlayer from "react-player/youtube";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="flex rounded-lg overflow-hidden bg-white">
      <ReactPlayer url={videoUrl} controls={true} width={"100%"} />
    </div>
  );
};

export default VideoPlayer;
