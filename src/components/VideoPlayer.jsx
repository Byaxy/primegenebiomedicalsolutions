/* eslint-disable react/prop-types */
import ReactPlayer from "react-player/youtube";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="flex rounded-lg overflow-hidden bg-white min-h-[40vh] lg:min-h-[65vh]">
      <ReactPlayer
        url={videoUrl}
        controls={true}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default VideoPlayer;
