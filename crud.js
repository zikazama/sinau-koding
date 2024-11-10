const angka = [1,2,4,5,6,7];

tambah()
temukan()
perbarui()
hapus()

function temukan(index){
    if(angka[index]) return angka[index];
}

function perbarui(indeks, nilaiBaru) {
    if (indeks >= 0 && indeks < angka.length) {
        angka[indeks] = nilaiBaru;
        return `Angka pada indeks ${indeks} telah diperbarui menjadi ${nilaiBaru}`;
    } else {
        return 'Indeks tidak valid';
    }
}

function hapus(indeks) {
    if (indeks >= 0 && indeks < angka.length) {
        delete angka[indeks];
        return `Angka pada indeks ${indeks} telah diperbarui menjadi ${nilaiBaru}`;
    } else {
        return 'Indeks tidak valid';
    }
}

function tambah(nilaiBaru) {
    angka.push(nilaiBaru);
    return `Angka ${nilaiBaru} telah ditambahkan`;
}

console.log(temukan(4));    // Output: "Angka 4 ditemukan"
console.log(perbarui(2, 10)); // Output: "Angka pada indeks 2 telah 
console.log(hapus(5));       // Output: "Angka 5 telah dihapus"
console.log(angka);          // Array setelah penghapusan

console.log(tambah(8)); // Output: "Angka 8 telah ditambahkan"
console.log(angka);