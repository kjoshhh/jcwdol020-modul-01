// Conditional statement : code yang ditujukan untuk meberikan pilihan eksekusi program sesuai kondisi yang diberikan.
/**
 *  IF : untuk satu kondisi
 *  if...else : untuk dua kondisi
 *  if...else if...else : untuk tiga kondisi atau lebih
 * switch...case : pengkondisian dalam bentuk validasi kecocokan nilai
 */

// Contoh data
nama = "edo";
let usia: number = 20;
let email: string = "edo@tensei.com";

// IF STATEMENT
/**
 * Aturan penulisan :
 * if(Condition){
 *      - taskCode
 * }
 * note :
 * condition : kondisi yang diinginkan berdasarkan nilai boolean yang didapat dari COMPARISON/LOGICAL/TRUTHLY/FALSY
 * taskcode : kumpulan baris program yang ingin dijalankan
 */

//Example case : memvalidasi batas usia tertentu
message = "";
if (usia > 17) {
    message = `Verifikasi usia ${email} berhasil`
}

console.log(message);

// IF...ELSE STATEMENT
/**
 * Aturan penulisan :
 * if(condition){
 *         - taskCode
 * }else{
 *         - taskCode
 * }
 */

usia = 18
if (usia > 17) {
    message = `Verifikasi usia ${email} berhasil`;
} else {
    message = `Verifikasi usia ${email} GAGAL`
}

console.log(message);

//IF...ELSE IF...ELSE
/**
 * Aturan penulisan :
 * if(condition){
 *      - taskCode
 * }else{
 *      - taskCode
 * }
 * Jika kondisi terpenuhi maka coding dalam scope akan terpenuhi
 */


let examGrade: number = 75;
let result: string = "";
if (examGrade >= 90) {
    result = "Grade A"
} else if (examGrade < 90 && examGrade >= 80) {
    result = "Grade B"
} else if (examGrade < 80 && examGrade >= 70) {
    result = "Grade C"
} else {
    result = "Grade D"
}

console.log(result); 

// Ternary operator -> bentuk lain dari if...else
/**
 * Aturan penulisan :
 * let value: string = condition ? mainValue : optionValue;
 * ketika kita punya 2 opsi nilai dan kaitannya dengan pengkondisian
 */

// Cara 1
usia = 20;
let verified: string = usia > 17 ? `Berhasil` : `GAGAL`;
message = `Verifikasi usia ${email} ${verified}`;
console.log(message);


// Cara 2
usia = 20;
message = `Verifikasi usia ${email} ${usia > 17 ? `Berhasil` : `GAGAL`}`;
console.log(message);

// SWITCH CASE
/**
 * switch (variableOfValue){
 *          Case "A":
 *              - taskCode
 *          Case "B":
 *              - taskCode
 *          default:
 *              - taskCode
 * }
 */
// job = "Coder";

// switch(job){
//     case "Coder":
//         console.log("Build a software");
//         break;
//     case "Driver":
//         console.log("Driving car");
//     default:
//         console.log("I don't know");
// }



// Exercise :
// Soal 1 : - Buat program untuk menentukan harga tiket berdasarkan usia
//          - Usia di bawah 5 tahun maka gratis
//          - Usia 5 s/d 17 tahun 20.000, 
//          - Usia 17 s/d 60 tahun 50.000
//          - Usia di atas 60 gratis


age = 61;
let hargaTiket: string = "";
if (age > 5 && age <= 17) {
     hargaTiket = "20.000"
} else if (age > 17 && age <= 60) {
    hargaTiket = "50.000"
} else {
    hargaTiket = "Free"
}

console.log(hargaTiket);

// Soal 2 : Buat pengkondisian untuk memastikan suatu data merupakan email atau bukan

let email_user: string = "testing@gmail.com"
let formatEmail: string = ""
if (email_user.includes("@") && email_user.includes(".")) {
    formatEmail = `Verifikasi "${email_user}"" benar`
} else {
    formatEmail = `Verifikasi "${email_user}"" GAGAL`
}

console.log(formatEmail);


