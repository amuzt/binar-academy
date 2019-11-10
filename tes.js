var name = 'Bambang';
var age = 60;
var hobby = 'memancing';

function myProfile(name, age, hobby) {
    if (age >= 56) {
        return 'nama saya ' + name + ' saya sudah pensiun' + ' umur saya ' + age + ' tahun ' + ' saya hobi ' + hobby;
    } else(age <= 56); {
        return 'nama saya ' + name + ' saya masih aktif bekerja' + ' umur saya ' + age + ' saya hobi ' + hobby;
    }
}

var kalimat = myProfile(name, age, hobby);
console.log(kalimat);


function calculateMultiply(angka1, angka2, angka3) {
    return angka1 + angka2 + angka3;

}
let angka1 = 4;
let angka2 = 5;
let angka3 = 6;

let hasilPertambahan = 'Hasil pertambahan ' + calculateMultiply(angka1, angka2, angka3);
console.log(hasilPertambahan); 


