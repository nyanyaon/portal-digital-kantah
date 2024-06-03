'use client'
import styles from "./styles.module.css"
import { CircleChevronLeft } from "styled-icons/fa-solid"
import { useRouter } from 'next/navigation'
import Image from "next/image"
import logoImage from "@/../../public/logo_atrbpn_2017.png"
import { usePathname } from 'next/navigation'

export default function Footer() {
    const router = useRouter()
    const pathname = usePathname()

    function back() {
        const pathParent = pathname.split("/")
        pathParent.pop()
        const backPath = pathParent.length === 1 ? "/" : pathParent.join("/")
        router.push(backPath)
    }

    return (
        <section>
            <div className={styles.containerFooter}>
                <button onClick={back} className={pathname === '/' ? styles.hidden : styles.btn}><CircleChevronLeft size={102} /></button>
                <Image
                    className={styles.img}
                    src={logoImage}
                    alt="Logo BPN"
                    width={500}
                    height={271}
                ></Image>
                <h1 className={styles.text}>Kantor Pertanahan <br /> Kota Mataram</h1>
            </div>
        </section>
    )
}