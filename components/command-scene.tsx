"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { Component, type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

class SceneErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

function SceneFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute right-[2%] top-[15%] h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-cyan-500/15 via-blue-600/15 to-emerald-500/10 blur-[140px]" />
    </div>
  );
}

function useWebGLAvailable() {
  const [available, setAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const context =
        canvas.getContext("webgl2") ??
        canvas.getContext("webgl") ??
        canvas.getContext("experimental-webgl");

      setAvailable(Boolean(context));
    } catch {
      setAvailable(false);
    }
  }, []);

  return available;
}

// Cybernetic Neural Gyro Core (Confined to far right edge away from headline text)
function CyberneticNeuralCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);
  const ring3Ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.18;
      meshRef.current.rotation.y = t * 0.22;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.14;
      ring1Ref.current.rotation.z = t * 0.09;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.16;
      ring2Ref.current.rotation.x = t * 0.11;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = t * 0.12;
      ring3Ref.current.rotation.y = t * 0.07;
    }
  });

  return (
    <group position={[5.8, 0.4, -2.5]}>
      {/* Central Cyber Icosahedron */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[0.75, 1]} />
        <meshStandardMaterial
          color="#00F2FE"
          emissive="#1E60FF"
          emissiveIntensity={0.6}
          wireframe
          transparent
          opacity={0.65}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Radiant Inner Cyber Core */}
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshBasicMaterial color="#00F5A0" transparent opacity={0.4} />
      </mesh>

      {/* Ring 1 - Laser Cyan */}
      <group ref={ring1Ref}>
        <mesh>
          <torusGeometry args={[1.0, 0.012, 16, 64]} />
          <meshBasicMaterial color="#00F2FE" transparent opacity={0.7} />
        </mesh>
      </group>

      {/* Ring 2 - Laser Blue */}
      <group ref={ring2Ref}>
        <mesh>
          <torusGeometry args={[1.25, 0.012, 16, 64]} />
          <meshBasicMaterial color="#1E60FF" transparent opacity={0.65} />
        </mesh>
      </group>

      {/* Ring 3 - Matrix Emerald */}
      <group ref={ring3Ref}>
        <mesh>
          <torusGeometry args={[1.45, 0.01, 16, 64]} />
          <meshBasicMaterial color="#00F5A0" transparent opacity={0.5} />
        </mesh>
      </group>
    </group>
  );
}

// Ambient Starfield Particles
function CyberParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2
      };
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const count = 90;
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const palette = [
      new THREE.Color("#00F2FE"),
      new THREE.Color("#1E60FF"),
      new THREE.Color("#00F5A0"),
      new THREE.Color("#FFFFFF")
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1;

      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const t = clock.getElapsedTime();
    pointsRef.current.rotation.y = mousePos.current.x * 0.04 + t * 0.01;
    pointsRef.current.rotation.x = mousePos.current.y * 0.03;
  });

  return (
    <Points ref={pointsRef} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  );
}

function CommandSceneCanvas() {
  return (
    <div className="absolute inset-0 opacity-80 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 48 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[6, 6, 6]} intensity={1.2} color="#00F2FE" />
        <pointLight position={[-6, -4, 4]} intensity={0.7} color="#1E60FF" />
        <CyberParticles />
        <CyberneticNeuralCore />
      </Canvas>
    </div>
  );
}

export function CommandScene() {
  const webglAvailable = useWebGLAvailable();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <SceneErrorBoundary fallback={<SceneFallback />}>
        {webglAvailable ? <CommandSceneCanvas /> : <SceneFallback />}
      </SceneErrorBoundary>
    </div>
  );
}
