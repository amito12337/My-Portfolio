import { Canvas } from "@react-three/fiber";
import { Suspense,useEffect,useRef,useState } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";
import sakura from "../assets/sakura.mp3"
import { soundoff, soundon } from "../assets/icons";
function Home() {
  const audioRef = useRef(new Audio(sakura))
  audioRef.current.volume = 0.4
  audioRef.current.loop = true
  const [isRotating,setIsRotating] = useState(false)
  const [ currentStage,setCurrentStage] = useState(1)
  const [isPlayingMusic,setIsPlayingMusic] = useState(flase)

  useEffect(()=>{
    if(isPlayingMusic) audioRef.current.play()

    return () => {
      audioRef.current.pause()
    }
  },[isPlayingMusic])
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
        {currentStage && <HomeInfo currentStage={currentStage}/>}
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
            position={planePosition}
            scale={planeScale}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img className="w-10 cursor-pointer object-contain" src={isPlayingMusic ? soundon : soundoff} alt="sound_icon" onClick={()=>{setIsPlayingMusic(prev=>!prev)}}/>
      </div>
    </section>
  );
}

export default Home;
