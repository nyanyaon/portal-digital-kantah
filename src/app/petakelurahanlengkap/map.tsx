'use client'

import { Map, Popup } from 'maplibre-gl'
import { MutableRefObject, RefObject, createRef, useEffect, useId, useRef } from 'react'
import './maplibre.css'

export function useMap({ map, mapContainer }: { map: MutableRefObject<HTMLDivElement | Map | null>, mapContainer: RefObject<HTMLDivElement> }) {
    useEffect(() => {
        if (map.current) return

        map.current = new Map({
            container: mapContainer.current as HTMLDivElement,
            style: 'https://api.maptiler.com/maps/satellite/style.json?key=3lhWGM90NAu96IQGc3wW',
            center: [116.10779, -8.59045],
            zoom: 13.3,
            maxZoom: 21,
            minZoom: 13.5,
        })

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }


        const _map = map.current as Map

        _map.on('load', async () => {
            const dataRaw = await fetch('/petakelurahanlengkap/api')
            const sources = await dataRaw.json()
            for (const source of sources) {

                _map.addSource(source.name, {
                    type: 'geojson',
                    data: source
                })

                _map.addLayer({
                    id: source.name+'-pol',
                    source: source.name,
                    type: 'fill',
                    paint: {
                        'fill-color': getRandomColor(),
                        'fill-outline-color': 'rgb(0,0,0)',
                        'fill-opacity': 0.7
                    }
                })

                _map.on('click', source.name+'-pol', (e) => {
                    new Popup()
                        .setLngLat(e.lngLat)
                        .setHTML('NIB:'+e.features![0].properties.NIB+'<br/>'
                        +'Wilayah:'+e.features![0].properties.KECAMATAN+','+e.features![0].properties.KELURAHAN+'<br/>'
                        +'LUAS:'+e.features![0].properties.LUASPETA+'m2')
                        .addTo(_map);
                });
            }
        })

    }, [map, mapContainer])
}

export default function MapElem() {
    const map = useRef<HTMLDivElement | Map | null>(null)
    const mapContainer = createRef<HTMLDivElement>()

    useMap({ map, mapContainer })

    return (
        <>
            <div ref={mapContainer}></div>
        </>
    )
}