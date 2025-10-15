"use client"

import { Environment, Float } from "@react-three/drei";
import { Book } from "./Book";

export const Experience = () => {
  return (
    <>
      <Float
        floatIntensity={0.1}
        speed={2}
        rotationIntensity={2}
      >
        <Book />
      </Float>

      <Environment preset="city" />
      <ambientLight intensity={6} />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
