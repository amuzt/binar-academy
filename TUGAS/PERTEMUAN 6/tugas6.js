// Data diri yang akan dicek //
var name = 'Bambang';
var age = 60;
var hobby = 'memancing';
// Fungsi //
function myProfile(name, age, hobby) {
    if (age <= 56) {
      console.log(`nama saya ${name} saya masih aktif bekerja , umur saya ${age} tahun saya hobi ${hobby}`) 
    } else { 
      console.log(`nama saya ${name} saya sudah pensiun , umur saya ${age} tahun saya hobi ${hobby}`) 
    }
}

var kalimat = myProfile(name, age, hobby);
console.log(kalimat);


function myProfile(name, age, hobby) {
    if (age <= 56) {
      console.log(`nama saya ${name} saya masih aktif bekerja , umur saya ${age} tahun saya hobi ${hobby}`) 
    } else { 
      console.log(`nama saya ${name} saya sudah pensiun , umur saya ${age} tahun saya hobi ${hobby}`) 
    }
}

myProfile('Bambang', 60 , 'Membaca')



function calculateMultiply(angka1, angka2) {
    return angka1 + angka2 ;

}
let angka1 = 1;
let angka2 = 4;

hasilPertambahan = 'Hasil pertambahan ' + angka1 + ' dan ' + angka2 + ' adalah ' + angka(angka1, angka2);
console.log(hasilPertambahan); 


