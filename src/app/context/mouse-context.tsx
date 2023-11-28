"use client";
import React, { useRef, useState, useEffect } from "react";

interface MouseContextType {
  mouseEnterEvent: () => void;
  mouseExitEvent: () => void;
  mouseClickEvent: () => void;
  mouseMoveEvent: (event: MouseEvent) => void;
  setStartTime: React.Dispatch<React.SetStateAction<number>>;
  setFullScreenVideo: React.Dispatch<React.SetStateAction<boolean>>;
  startTime: number;
  fullScreenVideo: boolean;
  cursorRef: React.RefObject<HTMLDivElement> | null;
  cursor2Ref: React.RefObject<HTMLDivElement> | null;
  videoPlayerRef: React.RefObject<HTMLVideoElement> | null;
}

const MouseContext = React.createContext<MouseContextType>({
  mouseClickEvent: (): void => {},
  mouseEnterEvent: () => {},
  mouseExitEvent: () => {},
  mouseMoveEvent: () => {},
  setStartTime: () => {},
  setFullScreenVideo: () => {},
  startTime: 0,
  fullScreenVideo: false,
  cursorRef: null,
  cursor2Ref: null,
  videoPlayerRef: null,
});

export function MouseProvider(props: { children: React.ReactNode }) {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursor2Ref = useRef<HTMLDivElement>(null);
  const videoPlayerRef = useRef<HTMLVideoElement | null>(null);
  const customCursorVisible = useRef<boolean>(false);

  const [startTime, setStartTime] = useState(0);
  const [fullScreenVideo, setFullScreenVideo] = useState(false);

  function mouseMoveEvent(event: MouseEvent) {
    if (cursorRef === null || cursorRef.current === null) return;
    cursorRef.current.style.top = `${event.pageY}px`;
    cursorRef.current.style.left = `${event.pageX}px`;

    if (cursor2Ref === null || cursor2Ref.current === null) return;
    cursor2Ref.current.style.top = `${event.pageY}px`;
    cursor2Ref.current.style.left = `${event.pageX}px`;
  }

  function mouseClickEvent() {
    setFullScreenVideo((prevState) => {
      if (prevState && videoPlayerRef.current) {
        setStartTime(videoPlayerRef.current.currentTime);
        return false;
      }
      if (!prevState && !videoPlayerRef.current) {
        return true;
      }
      return false;
    });
  }

  function mouseEnterEvent() {
    if (cursor2Ref === null || cursor2Ref.current === null) {
      return;
    }
    cursor2Ref.current.classList.add("-translate-x-16", "translate-y-10");
    customCursorVisible.current = false;
    hideCustomCusor(cursorRef);
  }

  function mouseExitEvent() {
    if (cursor2Ref === null || cursor2Ref.current === null) {
      return;
    }
    cursor2Ref.current.classList.remove("-translate-x-16", "translate-y-10");
    customCursorVisible.current = true;
    showCustomCusor(cursorRef);
  }

  function hideCustomCusor(
    cursor: React.MutableRefObject<HTMLDivElement | null>,
  ) {
    if (cursor && cursor.current) {
      cursor.current.style.opacity = "0";
    }
  }
  function showCustomCusor(
    cursor: React.MutableRefObject<HTMLDivElement | null>,
  ) {
    if (cursor && cursor.current) {
      cursor.current.style.opacity = "1";
    }
  }

  function toggleOriginalCursor() {
    if (document.documentElement.style.getPropertyValue("--cusor") === "none") {
      document.documentElement.style.setProperty("--cursor", "auto");
      return;
    }
    if (document.documentElement.style.getPropertyValue("--cusor") === "auto") {
      document.documentElement.style.setProperty("--cursor", "none");
      return;
    }
  }

  useEffect(() => {
    customCursorVisible.current = true;
    document.addEventListener("mousemove", mouseMoveEvent);
    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent);
    };
  }, []);

  const mouseProvider = {
    mouseClickEvent,
    mouseEnterEvent,
    mouseExitEvent,
    mouseMoveEvent,
    setStartTime,
    setFullScreenVideo,
    startTime,
    fullScreenVideo,
    cursorRef,
    cursor2Ref,
    videoPlayerRef,
  };
  return (
    <MouseContext.Provider value={mouseProvider}>
      {props.children}
    </MouseContext.Provider>
  );
}

export default MouseContext;
