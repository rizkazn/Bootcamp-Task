/*
    1.  splice() menambahkan/menghapus item ke/dari array, dan mengembalikan item yang dihapus.
        Sintaksis = array.splice(index, howmany, item1, ....., itemX)
        Contoh :
        var fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.splice(2, 0, "Lemon", "Kiwi");
        Output : [Banana, Orange, Lemon, Kiwi, Apple, Mango]

    2.  slice() mengembalikan elemen yang dipilih dalam array, sebagai objek array baru.
        slice() memilih elemen yang dimulai dari argumen awal yang diberikan, tetapi tidak menyertakan argumen akhir yang diberikan 
        Sintaksis = array.slice(start, end)
        Contoh :
        var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
        var citrus = fruits.slice(1, 3);
        Output : [Orange, Lemon]
    
    3.  join() mengembalikan array sebagai string.
        Elemen-elemen akan dipisahkan oleh pemisah yang ditentukan. Pemisah default adalah koma (,).
        Sintaksis = array.join(separator)
        Contoh :
        var fruits = ["Banana", "Orange", "Apple", "Mango"];
        var energy = fruits.join();
        Output : Banana,Orange,Apple,Mango
    
    4.  includes() menentukan apakah sebuah array berisi elemen tertentu.
        Method ini mengembalikan nilai true jika array berisi elemen tertentu, dan false jika tidak.
        includes() case sensitive.
        Sintaksis = array.includes(element, start). start bersifat opsional
        Contoh :
        var fruits = ["Banana", "Orange", "Apple", "Mango"];
        var n = fruits.includes("Mango");
        Output : true

    5.  charAt() mengembalikan karakter pada indeks yang ditentukan dalam sebuah string.
        Indeks karakter pertama adalah 0, karakter kedua adalah 1, dan seterusnya.
        Sintaksis = string.charAt(index)
        Contoh :
        var str = "HELLO WORLD";
        var res = str.charAt(0);
        Output : H
*/

const names = [
   'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope']

function callback (filtName) {
    const data = names.filter(item => {
        const word = item.toLowerCase().search(filtName.toLowerCase())
        return word >= 0 
    })
    return data
}

function searchName (filtName, limit, callback) {
    const data = callback(filtName)

    const hasil = data.filter((item, index) => index < limit)
    return hasil
}
console.log(searchName('an', 3, callback))

