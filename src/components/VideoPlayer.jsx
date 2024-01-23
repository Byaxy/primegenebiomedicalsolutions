const VideoPlayer = () => {
  return (
    <div className="flex rounded-lg overflow-hidden bg-white">
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/watch?v=pwIpK1_Gkn0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
