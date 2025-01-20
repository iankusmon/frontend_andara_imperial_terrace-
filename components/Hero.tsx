'use client'
import React from "react";
import DesktopSlider from "./slider/DesktopSlider";
import MobileSlider from "./slider/MobileSlider";
import { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? <MobileSlider /> : <DesktopSlider />}</>;
};


export default Hero