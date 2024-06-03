'use client'

import { RefObject, createRef, useCallback, useEffect } from "react"

export function Loadpdf({ ref }: { ref: RefObject<HTMLDivElement> }) {
    useEffect(() => {
        async function loadModule() {
            const global = { cur: 1, numpages: 0 }

            const pdfjs = await import('./pdfjs-4.0.379-dist/build/pdf.mjs')

            pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs'

            const loadingTask = pdfjs.getDocument('/katalogumkm.pdf')

            loadingTask.promise.then(function (pdf) {
                console.log('PDF loaded')

                function handlePages(page) {
                    console.log('Page loaded')

                    const scale = 1.5;
                    const viewport = page.getViewport({ scale: scale })

                    // Prepare canvas using PDF page dimensions
                    const canvas = document.createElement('canvas')
                    canvas.style.display = 'block'
                    const context = canvas.getContext('2d')
                    canvas.height = viewport.height;
                    canvas.width = viewport.width - 10;

                    // Render PDF page into canvas context
                    const renderContext = {
                        canvasContext: context,
                        viewport: viewport
                    }
                    const renderTask = page.render(renderContext)
                    renderTask.promise.then(function () {
                        console.log('Page rendered')
                    })

                    const doc = ref.current as HTMLDivElement

                    doc.appendChild(canvas)

                    global.cur++
                    if (pdf !== null && global.cur <= pdf.numPages) {
                        pdf.getPage(global.cur).then(handlePages)
                    }
                }

                // Fetch the first page
                const pageNumber = 1;
                pdf.getPage(pageNumber).then(handlePages)
            }, function (reason) {
                // PDF loading error
                console.error(reason);
            })
        }

        loadModule()
    }, [ref])
}

export default function PdfViewer() {
    const ref = createRef<HTMLDivElement>()

    Loadpdf({ ref })

    return (
        <>
            <div ref={ref}></div>
        </>
    )
}