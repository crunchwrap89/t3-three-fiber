import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Box from "../components/Box";

function Lab2() {
  return (
    <div className="flex h-[600px] min-h-screen w-full flex-col items-center justify-center bg-teal-600">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.6, 0, 0]} />
        <Box position={[1.4, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default Lab2;
