import { Canvas } from "@react-three/fiber";
import { Suspense,useState } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
function Home() {
  const [isRotating,setIsRotating] = useState(false)
  const [ currentStage,setCurrentStage] = useState(0)
  const adjustIslandForScreenSize = () =>{
    let screenScale = null
    let screenPosition =  [0, -6.5, -43];
    let rotation = [0.1,4.8,0]
    if(window.innerWidth < 768) {
      screenScale = [0.5,0.9,0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale,screenPosition,rotation];
  }
    const adjustPlaneForScreenSize = () => {
      let screenScale, screenPosition;

      // If screen width is less than 768px, adjust the scale and position
      if (window.innerWidth < 768) {
        screenScale = [1.5, 1.5, 1.5];
        screenPosition = [0, -1.5, 0];
      } else {
        screenScale = [3, 3, 3];
        screenPosition = [0, -4, -4];
      }

      return [screenScale, screenPosition];
    };
  const [islandScale,islandPosition,islandRotation] = adjustIslandForScreenSize()
  const [planeScale,planePosition] = adjustPlaneForScreenSize()
  return (
    <section
      className={"w-full h-screen relative"}>
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        PouPUP
      </div>
      <Canvas
        className={`bg-transparent w-full h-screen relative ${
        isRotating ? "cursor-grapping" : "cursor-grap"}
      `}
        camera={{ near: 0.1, far: 900 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skycolor="#b1e1ff"
            groundColor={"#000000"}
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            planePosition={planePosition}
            planeScale={planeScale}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
