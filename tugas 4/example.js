const namaKonser = 'Soundfest'

let hargaTiket = 500000
hargaTiket = 450000 // Nilai let bisa diubah

const lunas = true
const diskon = null

// Objek single
const event = {
    id: 99,
    nama: 'Java Jazz',
    tipe: 'Festival',
    'tahun pelaksanaan': 2026,
}

// Array biasa
const kategori = ['VIP', 'CAT 1', 'CAT 2']

// Objek bersarang (nested)
const panitia = {
    organizer: 'MusikKita',
    divisi: ['Logistik', 'Ticketing', { jenis: 'Keamanan', detail: ['Internal', 'Polisi'] }],
    lokasi: {
        kota: 'Malang',
        kecamatan: 'Lowokwaru'
    }
}

// Array berisi objek (array of objects)
const pesanan = [
    { tiket: 'VIP', qty: 2, harga: 750_000 },
    { tiket: 'CAT 1', qty: 1, harga: 450_000 },
    { tiket: 'Festival', qty: 4, harga: 250_000 },
    { tiket: 'Merchandise', qty: 2, harga: 150_000 },
];

// Filter: ambil yang harganya di atas 300rb
const tiketMahal = pesanan.filter(i => i.harga > 300000)

// Map: tambah properti total (qty * harga) di setiap data
const hasilMap = pesanan.map(({tiket, qty, harga}) => ({tiket, qty, harga, total: qty * harga}))
console.log(hasilMap);

// Reduce: totalin semua nilai dari properti total
const totalBayar = hasilMap.reduce((x, { total }) => x + total, 0)
console.log(totalBayar);

// Arrow function untuk cek tiket murah
const cekEkonomis = i => i.harga < 300000

const tiketBaru = { tiket: 'VVIP', qty: 1, harga: 1_500_000 }
tiketBaru.harga = 200_000 // Mengubah isi properti objek
const hasil = cekEkonomis(tiketBaru)
console.log(hasil)
