import React from "react";

const VideoSection = () => {
  return (
    <section>
      <h1 className="text-3xl font-bold text-center my-5">See Our Tools</h1>
      <div className="relative w-full h-96">
        <iframe
          src="https://www.youtube-nocookie.com/embed/HBgINrwbMkU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
