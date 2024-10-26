"use client";

import React, { useState } from "react";
import TrainItem from "./TrainItem";
import { TrainData } from "@/utils/TrainsData";

function TrainListOptions() {
  const [activeIndex, setActiveIndex] = useState<number>();
  return (
    <div className="mt-5 p-5 overflow-auto h-[250px]">
      <h2 className="text-[22px] font-bold">Available Trains</h2>
      {TrainData.map((item, index) => (
        <div
          key={index}
          className={`cursor-pointer p-2 px-3 rounded-md border-black hover:bg-gray-200 ${
            activeIndex == index ? "border-[3px]" : null
          }`}
          onClick={() => setActiveIndex(index)}
        >
          <TrainItem train={item} />
        </div>
      ))}
    </div>
  );
}

export default TrainListOptions;
