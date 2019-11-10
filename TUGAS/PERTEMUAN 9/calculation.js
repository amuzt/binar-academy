//pertambahan
let pertambahan = (num1, num2) => {
    return `Hasil pertambahan ${num1 + num2}`;
}
//pengurangan
let pengurangan = (num1, num2) => {
    return `Hasil pengurangan ${num1 - num2}`;
}
// perkalian
let perkalian = (num1, num2) => {
    return `Hasil pertambahan ${num1 * num2}`;
}

// pembagian
let pembagian = (num1, num2) => {
    return `Hasil pertambahan ${num1 / num2}`;
}

module.exports = {
    tambah: pertambahan,
    kurang: pengurangan,
    kali: perkalian,
    bagi: pembagian
}