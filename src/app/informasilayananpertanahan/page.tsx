"use client"

import react from 'react'
import styles from './page.module.css'
import Card from './_components/card'
import layanan from './_components/layanan'

export function layananGroupByLabel() {
  const layananGroup = Object.groupBy(layanan, ({ label }) => label)
  return layananGroup
}

export default function InformasiLayananPertanahan(): react.ReactNode {
  const layananGroup = layananGroupByLabel()
  return (
    <div>
      <h2 className={styles.title}>Informasi Layanan Pertanahan</h2>
      {Object.entries(layananGroup).map((data, id) => <div key={id}><h3 className={styles.label}>{data[0]}</h3>{data[1]?.map(({ name, desc }, id) => <Card key={id} name={name} desc={desc} /> )}</div>)}
    </div>
  )
}