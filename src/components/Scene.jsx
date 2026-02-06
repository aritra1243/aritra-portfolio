import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { useMemo, useRef } from "react";

const FloatingParticles = () => {
  const points = useRef();
  const positions = useMemo(() => {
    const count = 2000;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 25;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 15;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }

    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!points.current) return;

    points.current.rotation.y += delta * 0.05;
    points.current.rotation.x += delta * 0.01;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#bae6fd"
        size={0.06}
        sizeAttenuation
        depthWrite={false}
        transparent
        opacity={0.8}
      />
    </points>
  );
};

const FloatingTorus = () => {
  const mesh = useRef();

  useFrame((_, delta) => {
    if (!mesh.current) return;

    mesh.current.rotation.x += delta * 0.2;
    mesh.current.rotation.y += delta * 0.3;
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <torusKnotGeometry args={[1.2, 0.35, 128, 32]} />
      <meshStandardMaterial
        color="#38bdf8"
        metalness={0.4}
        roughness={0.25}
        emissive="#082f49"
        emissiveIntensity={0.8}
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      dpr={[1, 2]}
      frameloop="always"
      style={{ pointerEvents: "none" }}
    >
      <color attach="background" args={["#020617"]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight
        position={[-5, 5, -5]}
        intensity={0.5}
        angle={0.6}
        penumbra={1}
      />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.6}>
        <FloatingTorus />
      </Float>

      <FloatingParticles />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
      />
    </Canvas>
  );
};

export default Scene;
