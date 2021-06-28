const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            }
            else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    }) 
}
/* then catch 
.then() adalah aksi yang dilakukan setelah Promise diselesaikan (resolved). Kemudian kita dapat memutuskan apa yang harus dilakukan dengan Promise yang telah diselesaikan.
.catch() adalah aksi yang dilakukan setelah Promise mendapatkan penolakan (rejected).
*/

cekHariKerja('Rabu')
.then(resp => console.log(resp))
.catch(resp => console.log(resp))

/* try catch
blok try memungkinkan Anda untuk menentukan blok kode yang akan diuji untuk kesalahan ketika sedang dijalankan. Jika terjadi kesalahan, itu akan diteruskan ke blok catch untuk mengambil tindakan yang sesuai dan menangani kesalahan. Jika tidak, itu mengeksekusi kode yang tertulis di dalamnya.
*/
async function cobaCekHariKerja(day) {
    try {
        const coba = await cekHariKerja(day)
        console.log(coba)
    }
    catch(err) {
        console.log(err)
    }
}
cobaCekHariKerja('Minggu')