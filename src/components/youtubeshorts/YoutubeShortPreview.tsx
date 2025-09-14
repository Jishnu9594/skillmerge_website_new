"use client";

import React, { useState } from "react";

type Props = {
  videoUrl: string;
  title: string;
};

const YoutubeShortPreview = ({ videoUrl, title }: Props) => {
  const [play, setPlay] = useState(false);

  // Extract the YouTube video ID from the embed URL
  const videoId = videoUrl.split("/embed/")[1];

  return (
    <div
      className="relative aspect-[9/16] rounded-xl overflow-hidden border-2 border-green-500 shadow-[0_0_30px_rgba(0,255,0,0.3)] cursor-pointer"
      onClick={() => setPlay(true)}
    >
      {play ? (
        <iframe
          className="w-full h-full"
          src={`${videoUrl}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-black text-2xl shadow-lg">
              ▶
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default YoutubeShortPreview;
