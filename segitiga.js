let printSegitiga = 5;
 
if (typeof printSegitiga !== 'number') {
    console.log('Data harus number');
    return;
}
else {
    let hasil = '';
    for (let i = printSegitiga; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            hasil += j; 
        }
        hasil += '\n';
    }
    console.log(hasil);
}