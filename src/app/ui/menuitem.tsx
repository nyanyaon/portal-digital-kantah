import react from 'react'
import Link from 'next/link'
import styles from './menuitem.module.css'

export default function MenuItem({ source, isEnable, children }: { source: string, isEnable: boolean, children: react.ReactNode }) {
    return (
        <>
            <Link className={styles.link} href={'/'+source}>
                <div className={isEnable ? styles.item : styles.itemD}>
                    <span className={styles.text}>{children}</span>
                </div>
            </Link>
        </>
    )
}