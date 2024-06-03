"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import styles from './screensaver.module.css'
import './ss.css'

import logoImage from "@/../../public/logo_atrbpn_2017.png"
import ahyImage from "@/../../public/AHY.png"

export default function ScreenSaver() {
    const [isShow, setIsShow] = useState(true)

    const onMouseEnter = () => {
        setIsShow(false)
    }

    const onMouseLeave = () => {
        setIsShow(true)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("wait")
            setIsShow(true)
        },  3 * 60 * 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            {isShow &&
                <div onClick={onMouseEnter} onMouseEnter={onMouseEnter} className={styles.fullpage}>
                    <div className="div">
                        <div className="div-2">
                            SELAMAT DATANG <br />
                            BAPAK AGUS HARIMURTI YUDHOYONO
                        </div>
                        <Image
                            className="img"
                            src={ahyImage}
                            alt="Potrait AHY"
                            width={958}
                            height={1094}
                        ></Image>
                        <div className="div-3">
                            MENTERI AGRARIA DAN TATA RUANG/KEPALA BADAN PERTANAHAN NASIONAL
                        </div>
                        <div className="div-4">
                            <div className="div-5">
                                <div className="column">
                                    <Image
                                        className="img-2"
                                        src={logoImage}
                                        alt="Logo BPN"
                                        width={500}
                                        height={271}
                                    ></Image>
                                </div>
                                <div className="column-2">
                                    <div className="div-6">
                                        PORTAL DIGITAL
                                        KANTOR PERTANAHAN
                                        KOTA MATARAM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}


