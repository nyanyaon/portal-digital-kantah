'use client'

import Image from "next/image"
import qrImg from '../../../public/qr-wa-pengaduan.jpg'
import styles from './page.module.css'
import { Whatsapp } from "@styled-icons/simple-icons"

export default function LayananPengaduan() {
    return (
        <div className={styles.pengaduan}>
            <h1 className={styles.h1}>Layanan Pengaduan <Whatsapp size={71} /></h1>
            <p className={styles.p}>Jika anda menghadapi masalah layanan pertanahan dan tata ruang hubungi layanan hotline</p>
            <Image className={styles.img} src={qrImg} alt="WA ME" />
            <p className={styles.h1}>SCAN ME</p>
        </div>
    )
}