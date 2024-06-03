'use client'

import PdfViewer from "./pdfviewer"
import { useState } from "react"
import styles from './page.module.css'

export default function EKalatogUMKM() {
    const [pagenum, setPagenum] = useState(1)

    return (
        <div className={styles.catalog}>
            <PdfViewer />
        </div>
    )
}