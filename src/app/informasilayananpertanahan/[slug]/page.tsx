import detail from './layanan-detail'
import styles from './page.module.css'
import CetakBtn from './cetakbtn'

export default function DetailPage({ params }: { params: { slug: string } }) {
    const detailSlug = detail.find(({ link }) => link === params.slug)

    return (
        <div className={styles.detail}>
            <h3>{detailSlug?.title}</h3>
            <h4>Persyaratan</h4>
            <ol>
                {detailSlug?.term.map((val, id) => <li key={id}>{val}</li>)}
            </ol>
            <h4>Penyelesaian</h4>
            <p>{detailSlug?.complete}</p>
            <h4>Keterangan</h4>
            <ol>
                {detailSlug?.more.map((val, id) => <li key={id}>{val}</li>)}
            </ol>
            <h4>Tarif</h4>
            <p>{detailSlug?.cost}</p>
            <CetakBtn/>
        </div>
    )
}