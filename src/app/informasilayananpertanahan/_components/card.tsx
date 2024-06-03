import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CircleChevronRight } from "styled-icons/fa-solid"
import styles from './card.module.css'

export default function Card({ name, desc }: { name: string, desc: string }) {
  const pathname = usePathname()

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.name}>{name}</p>
        <p className={styles.desc}>{desc}</p>
      </div>
      <Link href={pathname+'/'+name.toLowerCase().replaceAll(" ", "-")} className={styles.btnContainer}><CircleChevronRight size={61} /></Link>
    </div>
  )
}