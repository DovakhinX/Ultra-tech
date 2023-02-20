import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useRef } from 'react';
import { Mesh } from 'three';
import { useState } from 'react';

export default function Cube() {

    const meshRef = useRef<Mesh>(null);
    const [active, setActive] = useState(false);
    const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, ['PavingStones092_2K_Color.jpg',
        'PavingStones092_2K_Displacement.jpg',
        'PavingStones092_2K_NormalGL.jpg',
        'PavingStones092_2K_Roughness.jpg',
        'PavingStones092_2K_AmbientOcclusion.jpg']);


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
            <meshStandardMaterial
                displacementScale={0.01}
                map={colorMap}
                displacementMap={displacementMap}
                normalMap={normalMap}
                roughnessMap={roughnessMap}
                aoMap={aoMap}
            />
        </mesh>
    )

}

