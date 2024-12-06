import React from "react";
import { Gamepad2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 flex flex-col items-center justify-center h-screen w-screen bg-gray-900 text-white z-50">
      <div className="relative w-32 h-32 mb-8">
        <Gamepad2 className="w-full h-full text-color-purple  animate-pulse" />
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-1 bg-color-purple rounded-full overflow-hidden">
            <div className="w-full h-full bg-color-purple animate-wave"></div>
          </div>
        </div> */}
      </div>
      <h1 className="text-4xl font-bold text-color-purple mb-4">Epic Games</h1>
      <p className="text-xl text-gray-400 animate-pulse">
        Loading your adventure...
      </p>
    </div>
  );
}
