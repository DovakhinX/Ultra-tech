import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export default function Model() {

    const gltf = useLoader(GLTFLoader, '/model.gltf')






    return (
        <primitive object={gltf.scene} scale={1.4} />




    )

}


