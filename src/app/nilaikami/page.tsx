import Rate from './rate'
import styles from './page.module.css'

export default function NilaiKami() {
    return (
        <div>
            <h1 className={styles.h1}>Nilai Kami</h1>
            <Rate />
            <p>Beri kami nilai</p>
        </div>
    )
}