import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { useState } from 'react';

export default function Cube() {

    const meshRef = useRef<Mesh>(null);
    const [active, setActive] = useState(false);

    useFrame(() => {
        if (!meshRef.current) {
            return;
        }
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
    });

    return (
        <mesh scale={active ? 1.1 : 1} ref={meshRef} onClick={() => setActive(!active)}>
            <coneGeometry args={[2, 2, 6]} />
            <meshStandardMaterial color={active ? 'blue' : 'red'} />
        </mesh>
    )

}

