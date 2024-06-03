'use client'

import { MutableRefObject, createRef, useEffect } from 'react'
import { Chart, registerables} from 'chart.js';

export default function ChartElem() {
    Chart.register(...registerables);
    const containerRef = createRef<HTMLCanvasElement>()
    const chartRef = createRef<HTMLCanvasElement | Chart>() as MutableRefObject<HTMLCanvasElement | Chart>

    useEffect(() => {
        async function onLoad() {
            if (chartRef.current) return

            chartRef.current = new Chart(containerRef.current as HTMLCanvasElement, {
                type: 'bar',
                data: {
                    labels: ['Validasi Buku Tanah', 'Validasi Persil', 'Validasi Surat Ukur', 'Data Siap Elektronik', 'Buku Tanah Digital', 'Kelurahan Lengkap'],
                    datasets: [{
                        label: '# of Votes',
                        data: [97.36, 81.11, 84.05, 77.57, 93.78, 42],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            })
        }

        onLoad()
    }, [chartRef])

    return (
        <canvas ref={containerRef}></canvas>
    )
}