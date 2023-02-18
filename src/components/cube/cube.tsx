import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

export default function Cube() {

    const meshRef = useRef<Mesh>(null);


    useFrame(() => {
        if (!meshRef.current) {
            return;
        }

        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;



    });


    return (
        <mesh ref={meshRef}>
        <boxGeometry args={[3, 3, 3]} />
        <meshPhongMaterial />
      </mesh>


    )




}

