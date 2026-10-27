const sewaStudio = [
    { id: 1, item: "Studio VIP", qty: 3, harga: 150_000, kategori: "ruangan" },
    { id: 2, item: "Gitar Fender", qty: 1, harga: 50_000, kategori: "alat" },
    { id: 3, item: "Stik Drum", qty: 2, harga: 15_000, kategori: "aksesoris" },
    { id: 4, item: "Studio Reguler", qty: 5, harga: 90_000, kategori: "ruangan" },
    { id: 5, item: "Bass Ibanez", qty: 1, harga: 45_000, kategori: "alat" },
    { id: 6, item: "Senar Gitar", qty: 3, harga: 25_000, kategori: "aksesoris" },
    { id: 7, item: "Keyboard Roland", qty: 2, harga: 60_000, kategori: "alat" },
    { id: 8, item: "Kabel Jack", qty: 4, harga: 10_000, kategori: "aksesoris" },
];

// Filter: ambil yang kategorinya "alat"
const hasilFilter = sewaStudio.filter(item => item.kategori === "alat");

// Map: hitung subtotal sewa (qty * harga) per item
const totalMap = sewaStudio.map(({ id, item, qty, harga, kategori }) => ({
    id,
    item,
    qty,
    harga,
    kategori,
    subtotal: qty * harga
}));

// Reduce: totalin semua biaya dari properti subtotal
const totalRental = totalMap.reduce((x, { subtotal }) => x + subtotal, 0);

// Cetak hasil ke konsol
console.log(`Jumlah kategori alat ada: ${hasilFilter.length} item`);
console.log("Data Hasil Filter Alat:", hasilFilter);
console.log("Data dengan Subtotal (Map):", totalMap);
console.log(`Total Keseluruhan Rental: Rp ${totalRental.toLocaleString('id-ID')}`);
