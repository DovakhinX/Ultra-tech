import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export default function Model2() {

    const fbx = useLoader(FBXLoader, '/sfv_032.fbx')






    return (
        <primitive object={fbx} scale={0.014} />




    )

}



