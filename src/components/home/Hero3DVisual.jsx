"use client";

import Spline from '@splinetool/react-spline';
import { useState } from 'react';

export default function Hero3DVisual() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full h-full relative bg-background/5">
      {/* Loading state / Fallback image */}
      <div 
        className={`absolute inset-0 z-10 transition-opacity duration-1000 ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
         <img 
           src="https://res.cloudinary.com/ybzctfb3/image/upload/v1784795282/sharda_academy_official/pxsdcgzn0c8kcmwtj8ir.jpg" 
           alt="Loading 3D Visual" 
           
          
           className="w-full h-full object-cover blur-sm scale-105"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
         </div>
      </div>
      
      <Spline
        // NOTE: This is a placeholder Spline scene url.
        // Replace with actual URL corresponding to the Sharda Academy theme
        // (Floating graduation cap, open books, academic globe, etc.)
        scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" 
        onLoad={() => setIsLoading(false)}
        className="w-full h-full object-cover"
      />
      
      {/* Overlay gradient to blend scene edges into the rounded container */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
