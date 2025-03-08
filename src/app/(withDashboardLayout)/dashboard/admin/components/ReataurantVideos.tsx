"use client";
import { useState } from "react";

const RestaurantVideos = () => {
  const videos = [
    {
      url: "https://media.istockphoto.com/id/2172473922/video/f16-flying-sunset.mp4?s=mp4-640x640-is&k=20&c=QutUKSHDqCqINfFRW0Sjhdbfjsm9chayY77XbXcBfL4=",
      title: "F16 Flying at Sunset",
    },
    {
      url: "https://media.istockphoto.com/id/2159411847/video/vintage-white-film-background-with-vignette-copy-space-on-centre.mp4?s=mp4-640x640-is&k=20&c=h0dXBLWlAYheXs9XiTfb5GQQhhEmFoZtklgIcMOHlH8=",
      title: "Vintage White Film Background",
    },
    {
      url: "https://media.istockphoto.com/id/2172473922/video/f16-flying-sunset.mp4?s=mp4-640x640-is&k=20&c=QutUKSHDqCqINfFRW0Sjhdbfjsm9chayY77XbXcBfL4=",
      title: "F16 Flying at Sunset",
    },
    {
      url: "https://media.istockphoto.com/id/2159411847/video/vintage-white-film-background-with-vignette-copy-space-on-centre.mp4?s=mp4-640x640-is&k=20&c=h0dXBLWlAYheXs9XiTfb5GQQhhEmFoZtklgIcMOHlH8=",
      title: "Vintage White Film Background",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="border p-4">      
      <div className="w-full">
        <video
          key={videos[currentIndex].url}
          className="rounded-md"
          width="950"
          height="415"
          controls
        >
          <source src={videos[currentIndex].url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>     
      <div className="flex mt-4 gap-4 justify-center">
        {videos.map((video, index) => (
          <h1
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full text-white h-[5px] w-[5px] font-medium ${
              currentIndex === index
                ? "bg-red-500 w-[20px]"
                : "bg-gray-500 hover:bg-gray-600"
            }`}
          >
           
          </h1>
        ))}
      </div>
    </div>
  );
};

export default RestaurantVideos;
