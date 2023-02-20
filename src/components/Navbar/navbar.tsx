import Image from 'next/image';
import styles from '@/styles/Home.module.css'



export default function Navbar() {


    return (

        <nav className={styles.navcontain}>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <Image src='/next.svg' alt="Logo" width={60} height={50} />
                </div>
                <div className={styles.linked}>
                    <ul className={styles.list}>
                        <li className={styles.item}>Intro</li>
                        <li className={styles.item}>Zero OS</li>
                        <li className={styles.item}>Integrations</li>
                        <li className={styles.item}>Zero ID</li>
                    </ul>
                </div>
                <div className={styles.buttongroup}>
                    <button className={styles.button}>Launch Ultra</button>
                    <button className={styles.button}> Ultra Hub</button>

                </div>

            </div>

        </nav>











    )



}