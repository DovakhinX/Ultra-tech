import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Canvas } from '@react-three/fiber';
import Cube from '../components/cube/cube';


export default function Home() {


  return (

    <>
      <Head>
        <title>Ultra Tech</title>
      </Head>
      <main id="canvasContainer" className={styles.canvasContainer}>
        <Canvas>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} />
          <Cube />
        </Canvas>
      </main>
    </>

  )
}
