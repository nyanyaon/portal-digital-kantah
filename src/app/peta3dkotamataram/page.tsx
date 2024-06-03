'use client'

import { Map } from 'maplibre-gl'
import { MutableRefObject, RefObject, createRef, useEffect, useId, useRef } from 'react'
import matarambase from './mataram.json'

export function useMap({ map, mapContainer }: { map: MutableRefObject<HTMLDivElement | Map | null>, mapContainer: RefObject<HTMLDivElement> }) {
    useEffect(() => {
        if (map.current) return

        map.current = new Map({
            container: mapContainer.current as HTMLDivElement,
            style: 'https://api.maptiler.com/maps/satellite/style.json?key=3lhWGM90NAu96IQGc3wW',
            center: [116.10779, -8.59045],
            zoom: 17,
            minZoom: 16,
            pitch: 45,
            bearing: 20,
            antialias: true
        })


        const _map = map.current as Map

        function rotateCamera(timestamp: number) {
            // clamp the rotation between 0 -360 degrees
            // Divide timestamp by 100 to slow rotation to ~10 degrees / sec
            _map.rotateTo((timestamp / 100) % 360, {duration: 0});
            // Request the next frame of the animation.
            requestAnimationFrame(rotateCamera);
        }

        _map.on('load', () => {
            rotateCamera(0)

            _map.addSource('mataram-base', {
                type: 'geojson',
                data: {
                    ...matarambase
                }
            })

            _map.addLayer({
                id: 'mataram3d',
                source: 'mataram-base',
                type: 'fill-extrusion',
                paint: {
                    'fill-extrusion-color': [
                        'interpolate',
                        ['linear'],
                        ['get', 'tinggi'], 0, 'lightgray', 7, 'royalblue', 8, 'lightblue'
                    ],
                    'fill-extrusion-height': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        16,
                        0,
                        17,
                        ['get', 'tinggi']
                    ],
                    'fill-extrusion-base': ['case',
                        ['>=', ['get', 'zoom'], 16],
                        7, 0
                    ],
                    'fill-extrusion-opacity': 0.8
                }
            })
        })

    }, [map, mapContainer])
}

export default function Peta3D() {
    const map = useRef<HTMLDivElement | Map | null>(null)
    const mapContainer = createRef<HTMLDivElement>()

    useMap({ map, mapContainer })

    return (
        <>
            <div ref={mapContainer}></div>
        </>
    )
}