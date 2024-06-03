import MapElem from './map';
import { Suspense } from 'react';
import './page.css'

export default function PetaInteraktif() {
    return (
        <Suspense fallback={<p>Tunggu Sebentar yaa...</p>}>
            <MapElem />
        </Suspense>
    )
}