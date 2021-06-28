function SeleksiNilai (nilaiAwal, nilaiAkhir, lists) {

    if (arguments.length < 3) {
        return 'Input semua parameter nilai awal, nilai akhir dan lists'
    }
    else {
        if (nilaiAwal < nilaiAkhir && lists.length > 5) {

            const hasil = lists.filter(item => item > nilaiAwal && item < nilaiAkhir)
            return hasil.sort((a, b) => a - b)
        }
        else if (nilaiAwal >= nilaiAkhir) {
            return 'Nilai akhir harus lebih besar dari nilai awal'
        }
        else if (lists.length <= 5) {
            return 'Jumlah angka dalam dataArray harus lebih dari 5'
        }
    }
}

console.log(SeleksiNilai(5, 20, [2, 25, 4]))