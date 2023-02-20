import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Canvas } from '@react-three/fiber';
import Cube from '../components/cube/cube';
import Navbar from '@/components/Navbar/navbar';
import { Suspense } from 'react';

export default function Home() {

  return (
    <>
      <Head>
        <title>Ultra Tech</title>
      </Head>
      <Navbar/>
      <main className={styles.canvas}>
        <Canvas >
          <ambientLight intensity={0.4} />
          <pointLight position={[14, 12, 11]} />
          <Suspense fallback={null}>
          <Cube />
          </Suspense>
        </Canvas>
      </main>
    </>
  )
}
