let globalVariabel = 'Ini global';

function panggilGlobal() {
    console.log(globalVariabel);
}

panggilGlobal();

function panggilLocal() {
    globalVariabel = 'Ini global yang diubah';
    let localVariabel = 'Ini local';
    console.log(localVariabel);
}

function panggilLocalLagi() {
    let localVariabel = 'Ini local beda';
    console.log(localVariabel);
}

panggilLocal();
panggilLocalLagi();
console.log(localVariabel);
panggilLocal();
