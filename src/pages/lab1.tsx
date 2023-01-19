import { Canvas } from "@react-three/fiber";
import Sphere from "../components/Sphere";

function Lab1() {
  return (
    <div className="flex h-[600px] min-h-screen w-full flex-col items-center justify-center bg-emerald-200">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Sphere position={[-1.2, 0, 0]} />
        <Sphere position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default Lab1;
