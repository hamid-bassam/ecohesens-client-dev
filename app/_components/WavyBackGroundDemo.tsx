"use client";

import { WavyBackground } from "@/components/ui/wavy-background";


export function WavyBackgroundDemo({ children, height, minusHeight }: { children?: React.ReactNode, height?: number, minusHeight?: number }) {
  return (
    <WavyBackground
      speed="fast"
      backgroundFill="rgb(235,216,196)"
      colors={["rgb(235,216,196)", "rgb(255,248,225)", "rgb(255,255,255)", "rgb(199,112,54)", "rgb(180,230,100)"]}
      className="max-w-6xl mx-auto "
      height={height}
      minusHeight={minusHeight}>
      {children}
    </WavyBackground>
  );
}
