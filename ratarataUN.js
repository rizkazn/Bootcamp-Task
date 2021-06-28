let mtk = 80;
let bahasaIndonesia = 90;
let bahasaInggris;
let ipa = 69;

if (mtk === undefined || bahasaIndonesia === undefined || bahasaInggris === undefined || ipa === undefined) {
    console.log('Masukkan semua nilai untuk proses perhitungan Rata - Rata Nilai dan Penentuan Grade');
    return;
}
else {
        const average = (mtk +  bahasaIndonesia + bahasaInggris + ipa) / 4; 
        let grade = '';
        if (average >= 90 && average <= 100) {
            grade = 'A'
        }
        else if (average >= 80) {
            grade = 'B'
        }
        else if (average >= 70) {
            grade = 'C'
        }
        else if (average >= 60) {
            grade = 'D'
        }
        else {
            grade = 'E'
        }

    console.log(`Rata-rata = ${average}`);
    console.log(`Grade = ${grade}`);       
}       
