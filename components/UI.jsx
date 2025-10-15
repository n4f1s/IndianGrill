"use client";

import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

const pictures = [
  "11", "12", "21", "22", "31", "32", "41", "42",
  "51", "52", "61", "62", "71", "72",
];

export const pageAtom = atom(0);

export const pages = [{ front: "book-cover", back: pictures[0] }];

export const usePageFlipSound = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/audios/page-flip-01a.mp3");
    audioRef.current.load();
  }, []);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
    }
  };

  return playSound;
};

// Generate book pages dynamically
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({ front: pictures[pictures.length - 1], back: "book-back" });

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
  const audioRef = useRef(null);

  // Prepare audio
  useEffect(() => {
    audioRef.current = new Audio("/audios/page-flip-01a.mp3");
    audioRef.current.load();
  }, []);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  // Auto-return to cover after 3.5s if last page
  useEffect(() => {
    if (page === pages.length) {
      const timer = setTimeout(() => {
        setPage(0);
        playSound();
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [page, setPage]);

  return (
    <div
      className="flex justify-center items-center gap-6 absolute -bottom-10 left-1/2 
      transform -translate-x-1/2 z-[1]"
    >
      {/* Navigation buttons or UI controls */}
    </div>
  );
};
