"use client"

import styles from "./styles.module.css"
import Image from "next/image"
import logoImage from "@/../../public/logo-spartan.png"
import { FaceSmile } from "styled-icons/fa-solid"


export default function Header() {

    const h3Style = {
        margin: 0,
        marginLeft: "0.5em",
    }

    return (
        <section className={styles.container}>
            <Image
                className={styles.imgSpartan}
                src={logoImage}
                alt="Logo Spartan"
                width={500}
                height={271}
            ></Image>
            <p className={styles.textHeader}>
                Informasi Seputar Pertanahan Digital
            </p>
            {/* <div className={styles.containerRelative}>
                <FaceSmile size="48" />
                <p className={styles.textheader} style={h3Style}>Selamat Pagi</p>
            </div> */}
        </section>
    )
}