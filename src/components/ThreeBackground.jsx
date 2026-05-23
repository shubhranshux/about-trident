import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function inSphere(buffer, radius = 1.5) {
  for (let i = 0; i < buffer.length; i += 3) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = Math.cbrt(Math.random()) * radius;
    buffer[i] = r * Math.sin(phi) * Math.cos(theta);
    buffer[i + 1] = r * Math.sin(phi) * Math.sin(theta);
    buffer[i + 2] = r * Math.cos(phi);
  }
  return buffer;
}

function Stars(props) {
  const ref = useRef();
  
  const sphere = useMemo(() => {
    return inSphere(new Float32Array(5000), 1.5);
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#E8BD63"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-[#0f1433]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
}
