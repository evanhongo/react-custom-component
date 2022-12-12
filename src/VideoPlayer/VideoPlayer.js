import React, { useState, useEffect, useMemo, useRef } from "react";

function useVideoEvent(videoRef) {
  const [status, setStatus] = useState({
    isPlaying: false,
    isEnded: false,
    isLarge: false,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setStatus((s) => ({ ...s, isPlaying: false, isLarge: false }));
        videoRef.current?.pause();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (status.isEnded)
      setTimeout(() => {
        setStatus((s) => ({ ...s, isLarge: false }));
      }, 2000);
  }, [status.isEnded]);

  return { status, setStatus };
}

const VideoPlayer = (props) => {
  const videoRef = useRef();
  const { status, setStatus } = useVideoEvent(videoRef);
  const width = useMemo(()=> status.isLarge? props.width : "400px", [status.isLarge]);
  const height = useMemo(()=> status.isLarge? props.height : "300px", [status.isLarge]);

  const onPlay = () => {
    setStatus({ isPlaying: true, isEnded: false, isLarge: true });
  };

  const onPause = () => {
    setStatus((s) => ({ ...s, isPlaying: false, isLarge: false }));
  };

  const onEnded = () => {
    setStatus((s) => ({ ...s, isEnded: true }));
  };

  return (
    <video
      ref={videoRef}
      controls
      width={width}
      height={height}
      onPlay={onPlay}
      onPause={onPause}
      onEnded={onEnded}
      src={props.src}
    />
  );
};

export default VideoPlayer;
