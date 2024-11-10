function jumlahkanAngka(angka1, angka2) {
    const hasil = angka1 + angka2;
    console.log(hasil);
}

const jumlahLagi = function (angka1, angka2) {
    const hasil = angka1 + angka2;
    console.log(hasil);
}

const jumlahLagiLagi = (angka1, angka2) => {
    const hasil = angka1 + angka2;
    console.log(hasil);
}

const angka = [1,2,3,4,5];

const peserta = [
    {
        nama: "A",
        nilai: 80,
    },
    {
        nama: "B",
        nilai: 90,
    },
    {
        nama: "C",
        nilai: 100,
    },
    {
        nama: "D",
        nilai: 70,
    },
    {
        nama: "E",
        nilai: 60,
    },
];

const hasil = peserta.map((item) => {
    const newObject = item;
    newObject.nilai = item.nilai - 10;
    return newObject;
});

const panggil = (angka) => {
    console.log("Hello "+angka);
}

function coba(callback, angka) {
    callback(angka);
}

coba(panggil, 2);