import MenuItem from './ui/menuitem'
import styles from './page.module.css'

export default function Home() {

  const items = [
    {name:'Informasi Layanan Pertanahan', isEnable: true},
    {name:'Layanan Pengaduan', isEnable: true},
    {name:'Peta Kelurahan Lengkap', isEnable: true},
    {name:'Peta 3D Kota Mataram', isEnable: true},
    {name:'eBook', isEnable: false},
    {name:'eKatalog UMKM', isEnable: true},
    {name:'Live CCTV Kota Mataram', isEnable: false},
    {name:'Dashboard', isEnable: true},
    {name:'Nilai Kami', isEnable: true},
  ]
  
  return (
    <div>
      {items.map((item) => <MenuItem key={item.name} isEnable={item.isEnable} source={item.name.replaceAll(' ', '').toLowerCase()}>{item.name}</MenuItem>)}
    </div> 
  )
}
