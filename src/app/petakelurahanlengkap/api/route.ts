'use server'

import * as fs from 'fs'
import { NextResponse } from 'next/server'

export async function GET() {
    const path = './src/app/petakelurahanlengkap/geojson/'
    const files = fs.readdirSync(path)

    const dataArr = files.map(val => {
        const data = fs.readFileSync(path+val).toString()

        return JSON.parse(data)
    })

    return NextResponse.json(dataArr)
}