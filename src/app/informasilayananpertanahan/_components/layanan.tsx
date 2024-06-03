const layanan = [
    {
        name: "Perubahan Kreditur",
        desc: "Pendaftaran peralihan suatu hak tanggungan karena subrograsi",
        label: "Hak Tanggungan"
    },
    {
        name: "Peralihan Hak Tanggungan",
        desc: "Pendaftaran peralihan suatu hak tanggungan karena cessie",
        label: "Hak Tanggungan"
    },
    {
        name: "Roya",
        desc: "Pendaftaran berakhirnya hak tanggungan yang diberikan kepada suatu bidang tanah sebagai jaminan hutang",
        label: "Hak Tanggungan"
    },
    {
        name: "Pendaftaran Hak Tanggungan",
        desc: "Pendaftaran hak tanggungan yang diberikan pada suatu bidang tanah untuk jaminan hutang piutang",
        label: "Hak Tanggungan"
    },
    {
        name: "Pengecekan Sertifikat",
        desc: "Memperoleh informasi tentang kesesuaian suatu sertifikat dengan data yang tercatat di Kantor Pertanahan",
        label: "Informasi",
    },
    {
        name: "Konversi",
        desc: "Pendaftaran hak atas tanah untuk pertama kalinya terhadap suatu bidang tanah yang didukung oleh bukti kepemilikan yang lengkap",
        label: "Konversi",
    },
    {
        name: "Wakaf",
        desc: "Pendaftaran tanah wakaf untuk pertama kalinya terhadap suatu bidang tanah yang didukung oleh bukti kepemilikan yang lengkap",
        label: "Konversi",
    },
    {
        name: "Penggabungan",
        desc: "Perubahan bidang tanah dan haknya akibat dilakukan penggabungan beberapa bidang tanah",
        label: "Mutasi",
    },
    {
        name: "Pemisahan",
        desc: "Perubahan bidang tanah dan haknya akibat dilakukan pembagian suatu bidang tanah namun menyisakan sebagian induknya",
        label: "Mutasi",
    },
    {
        name: "Pemecahan",
        desc: "Perubahan bidang tanah dan haknya akibat dilakukan pembagian habis suatu bidang tanah",
        label: "Mutasi",
    },
    {
        name: "Pembaruan Hak Guna Usaha Perorangan",
        desc: "Pendaftaran suatu Hak Guna Usaha milik perseorangan yang sudah berakhir atau Hak Guna Usaha milik perseorangan yang perpanjangan haknya akan berakhir",
        label: "Pembaruan",
    },
    {
        name: "Pembaruan Hak Guna Usaha Badan Hukum",
        desc: "Pendaftaran suatu Hak Guna Usaha milik badan hukum yang sudah berakhir atau Hak Guna Usaha milik badan hukum yang perpanjangan haknya berakhir",
        label: "Pembaruan",
    },
    {
        name: "Pembaruan Hak Guna Bangunan Perorangan",
        desc: "Pendaftaran suatu Hak Guna Bangunan milik perseorangan yang sudah berakhir atau Hak Guna Bangunan milik perorangan yang perpanjangan haknya akan berakhir",
        label: "Pembaruan",
    },
    {
        name: "Pembaruan Hak Guna Bangunan Badan Hukum",
        desc: "Pendaftaran suatu Hak Guna Bangunan milik badan hukum yang sudah berakhir atau Hak Guna Bangunan milik badan hukum yang perpanjangan haknya akan berakhir",
        label: "Pembaruan",
    },
    {
        name: "Pembaruan Hak Pakai Perorangan WNI",
        desc: "Pendaftaran suatu Hak Pakai milik Warga Negara Indonesia yang sudah berakhir atau Hak Pakai milik Warga Negara Indonesia yang perpanjangan haknya akan berakhir",
        label: "Pembaruan",
    },
    {
        name: "Pembaruan Hak Pakai Perorangan WNA",
        desc: "Pendaftaran suatu Hak Pakai milik Warga Negara Asing yang sudah berakhir atau Hak Pakai milik Warga Negara Asing yang perpanjangan haknya akan berakhir",
        label: "Pembaruan",
    },
    {
        name: "Pembaruan Hak Pakai Badan Hukum Indonesia",
        desc: "Pendaftaran suatu Hak Pakai milik Badan Hukum Indonesia yang sudah berakhir atau Hak Pakai milik Badan Hukum Indonesia yang perpanjangan haknya akan berakhir",
        label: "Pembaruan",
    },
    {
        name: "Pembaruan Hak Pakai Badan Hukum Asing",
        desc: "Pendaftaran suatu Hak Pakai milik Badan Hukum Asing yang sudah berakhir atau Hak Pakai milik Badan Hukum Asing yang perpanjangan haknya akan berakhir",
        label: "Pembaruan",
    },
    {
        name: "Pembaruan Hak Pakai Instansi Pemerintah",
        desc: "Pendaftaran suatu Hak Pakai milik Instansi Pemerintah yang sudah berakhir atau Hak Pakai milik Instansi Pemerintah  yang perpanjangan haknya akan berakhir",
        label: "Pembaruan",
    },
    {
        name: "Pembaruan Hak Pakai Pemerintah Asing",
        desc: "Pendaftaran suatu Hak Pakai milik Pemerintah Asing yang sudah berakhir atau Hak Pakai milik Pemerintah Asing yang perpanjangan haknya akan berakhir",
        label: "Pembaruan",
    },
    {
        name: "Pemberian Hak Guna Usaha Perorangan",
        desc: "Pendaftaran Hak Guna Usaha atas suatu bidang tanah untuk Perorangan",
        label: "Pemberian Hak",
    },
    {
        name: "Pemberian Hak Guna Usaha untuk Badan Hukum",
        desc: "Pendaftaran Hak Guna Usaha atas suatu bidang tanah untuk Badan Hukum",
        label: "Pemberian Hak"
    },
    {
        name: "Pemberian Hak Guna Bangunan Perorangan",
        desc: "Pendaftaran Hak Guna Bangunan atas suatu bidang tanah untuk Perorangan",
        label: "Pemberian Hak",
    },
    {
        name: "Pemberian Hak Guna Bangunan Badan Hukum",
        desc: "Pendaftaran Hak Guna Bangunan atas suatu bidang tanah untuk Badan Hukum",
        label: "Pemberian Hak",
    },
    {
        name: "Pemberian Hak Pakai Perorangan WNI",
        desc: "Pendaftaran Hak Pakai atas suatu bidang tanah untuk Warga Negara Indonesia",
        label: "Pemberian Hak",
    },
    {
        name: "Pemberian Hak Pakai Badan Hukum Indonesia",
        desc: "Pendaftaran Hak Pakai atas suatu bidang tanah untuk Badan Hukum Indonesia",
        label: "Pemberian Hak",
    },
    {
        name: "Pemberian Hak Pakai Perorangan WNA",
        desc: "Pendaftaran Hak Pakai atas suatu bidang tanah untuk Warga Negara Asing",
        label: "Pemberian Hak",
    },
    {
        name: "Pemberian Hak Pakai Badan Hukum Asing",
        desc: "Pendaftaran Hak Pakai atas suatu bidang tanah untuk Badan Hukum Asing",
        label: "Pemberian Hak",
    },
    {
        name: "Pemberian Hak Pakai Instansi Pemerintah",
        desc: "Pendaftaran Hak Pakai atas suatu bidang tanah untuk Instansi Pemerintah",
        label: "Pemberian Hak",
    },
    {
        name: "Pemberian Hak Pakai Instansi Pemerintah Asing",
        desc: "Pendaftaran Hak Pakai atas suatu bidang tanah untuk Instansi Pemerintah Asing",
        label: "Pemberian Hak",
    },
    {
        name: "Pemberian Hak Pengelolaan",
        desc: "Pendaftaran Hak Pengelolaan atas suatu bidang tanah untuk Instansi Pemerintah/BUMN/BUMD",
        label: "Pemberian Hak",
    },
    {
        name: "Pemberian Hak Tanah Wakaf",
        desc: "Pendaftaran Wakaf atas suatu bidang tanah yang bukan berasal dari hak adat untuk Perseorangan",
        label: "Pemberian Hak",
    },
    {
        name: "Pemberian Hak Milik Perorangan",
        desc: "Pemberian Hak Milik atas suatu bidang tanah yang bukan berasal dari hak adat untuk Perseorangan",
        label: "Pemberian Hak",
    },
    {
        name: "Pemberian Hak Milik badan Hukum",
        desc: "Pemberian Hak Milik atas suatu bidang tanah yang bukan berasal dari hak adat untuk Badan Hukum",
        label: "Pemberian Hak",
    },
    {
        name: "Penggantian Sertipikat Karena Hilang",
        desc: "Memperoleh Sertipikat Hak Atas Tanah yang baru atas suatu bidang tanah yang telah terdaftar karena sertipikat sebelumnya telah hilang",
        label: "Penggantian sertipikat",
    },
    {
        name: "Penggantian Sertipikat Karena Rusak",
        desc: "Memperoleh Sertipikat Hak Atas Tanah yang baru atas suatu bidang tanah yang telah terdaftar karena sertipikat sebelumnya telah rusak",
        label: "Penggantian sertipikat",
    },
    {
        name: "Penggantian Sertipikat Karena Blanko Lama",
        desc: "Memperoleh Sertipikat Hak Atas Tanah yang baru atas suatu bidang tanah yang telah terdaftar karena sertipikat sebelumnya merupakan blanko lama",
        label: "Penggantian sertipikat",
    },
    {
        name: "Pengukuran Pengembalian Batas",
        desc: "Pengukuran suatu bidang tanah dengan persetujuan batas antara tetangga bidang tanah yang berbatasan",
        label: "Pengukuran",
    },
    {
        name: "Pengukuran untuk mengetahui luas",
        desc: "Pengukuran untuk mendapatkan luas suatu bidang tanah",
        label: "Pengukuran",
    },
    {
        name: "Jual Beli",
        desc: "Peralihan hak yang terjadi karena pemilik tanah menjual tanahnya dan pihak lainnya membeli",
        label: "Peralihan Hak",
    },
    {
        name: "Pemasukan Kedalam Perusahaan",
        desc: "Peralihan hak yang terjadi karena pemilik memberikan modal",
        label: "Peralihan Hak",
    },
    {
        name: "Pembagian Hak Bersama",
        desc: "Peralihan hak yang terjadi karena seseorang mendapat atau melepaskan hak bersama",
        label: "Peralihan Hak",
    },
    {
        name: "Hibah",
        desc: "Peralihan hak yang terjadi karena pemilik tanah memberikan tanahnya kepada pihak lainnya",
        label: "Peralihan Hak",
    },
    {
        name: "Lelang",
        desc: "Peralihan hak yang terjadi karena hak seseorang telah dilelang. Biasanya karena wanprestasi",
        label: "Peralihan Hak",
    },
    {
        name: "Tukar Menukar",
        desc: "Peralihan hak yang terjadi karena pemiliknya menukarkan tanahnya dengan satu atau beberapa bidang tanah milik orang lain",
        label: "Peralihan Hak",
    },
    {
        name: "Pewarisan",
        desc: "Peralihan hak yang terjadi karena pemilik tanah telah meninggal dunia kepada ahli warisnya",
        label: "Peralihan Hak",
    },
    {
        name: "Perpanjangan Hak Guna Bangunan dan Hak Pakai",
        desc: "Pendaftaran perpanjangan suatu Hak Guna Bangunan atau Hak Pakai sebelum haknya tersebut berakhir",
        label: "Perpanjangan Hak",
    },
    {
        name: "Perpanjangan Hak Guna Usaha",
        desc: "Pendaftaran perpanjangan suatu Hak Guna Usaha sebelum haknya tersebut berakhir",
        label: "Perpanjangan Hak",
    },
    {
        name: "Perubahan Hak",
        desc: "Perubahan Hak Guna Bangunan menjadi hak milik atas sebidang tanah yang merupakan rumah tinggal",
        label: "Perubahan Hak",
    },
    {
        name: "Wakaf Dari Tanah Terdaftar",
        desc: "Perubahan Hak menjadi wakaf atas sebidang tanah yang digunakan untuk kepentingan sosial/keagamaan",
        label: "Perubahan Hak",
    },
]

export default layanan