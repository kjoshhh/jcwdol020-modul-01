// Proses bisa dalam membuat chart dan pseudo code.
// Pseudo code menulis input, bagian yang diharapkan dan output.
// Contoh soal: Hitung total belanja
// INPUT : hargaBarang, jumlahBarang
let hargaBarang: number = 5000;
let jumlahBarang: number = 6;

// PROSES : hargaBarang * jumlah Barang
const totalBelanja: number = hargaBarang * jumlahBarang
// rumus atau proses yang dikunci supaya pada proses berikutnya tidak bisa diganti

// OUTPUT : totalBelanja
console.log(totalBelanja.toLocaleString('id-ID', {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
}));

// PRACTICE 1
// INPUT : panjangRectangle, lebarRectangle
let panjangRectangle: number = 5;
let lebarRectangle: number = 3;

//PROSES: panjangRectangle * lebarRectangle
const areaRectangle: number = panjangRectangle * lebarRectangle;

//OUTPUT : areaRectangle
console.log(areaRectangle);



//PRACTICE 2
// INPUT : panjangRectangle, lebarRectangle
// PROSES : (panjangRectangle * 2) + (lebarRectangle * 2)
const perimeterRectangle: number = (panjangRectangle * 2) + (lebarRectangle * 2);
// OUTPUT : perimeterRectangle
console.log(perimeterRectangle);



//PRACTICE 3
// INPUT : circleRadius, PI
let circleRadius: number = 5;
const pi: number = Math.PI;

// PROSES d: 2 * circleRadius
const circleDiameter: number = 2 * circleRadius;
// OUTPUT: circleDiameter
console.log(circleDiameter);

// PROSES circumference: 2 * PI * circleRadius
const circleCircumference: number = 2 * pi * circleRadius;
// OUTPUT: circleCircumference
console.log(circleCircumference);

// PROSES circleArea: PI * (circleRadius * circleRadius)
const circleArea: number = pi * (circleRadius * circleRadius);
// OUTPUT: circleArea
console.log(circleArea);



//PRACTICE 4
// INPUT: angleA, angleB
let angleA: number = 80;
let angleB: number = 65;

// PROSES : 180 - angleA - angleB
const angleC: number = 180 - angleA - angleB;

//OUTPUT: angleC
console.log(angleC);






// EXCERSICE 23 APR
// Soal 1
// Even number bilangan yang habis dibagi 2

let test_number: number = 2
let numbers: string = test_number % 2 === 0 ? `Even` : `Odd`;
console.log(numbers);


// Soal 2
/**
 * Syarat Prime Nuumber:
 * - HANYA BISA HABIS dibagi ANGKA ITU SENDIRI dan 1
 * - LEBIH BESAR DARI 1
 * - Bilangan bulat positif
 */

// Jadi katanya ga perlu buktiin angka tersebut habis dibagi angka itu sendiri atau 1 karena sudah pasti semua angka akan bisa
// tidak akan bisa membantu mengidentifikasi.

// Perlu cek apakah angka tersebut bisa habis dibagi angka 2 sampai dengan angka sebelum angka itu sendiri
//i >= 2 dan i < test_number

// let i: number = 10;
// if (i <= 1) {
//   console.log(`tidak_primer`);
// } else if (i == 2) {
//   console.log(`tidak_primer`);
// } else if (i == 0) {g
//   console.log ('tidak primer' )
// } else if (i % i === 0) {
//   console.log(`primer`);
// } else if (i % 1 === 0) {
//   console.log(`primer`);
// }  

// return `false`







// Soal 3

let n: number = 20;
let total: number = 0;

for (let i = 1; i <= n; i++) {
  total += i; // total = total + 1
}

console.log(`Akumulasi 1 sampai ${n} adalah: ${total}`);




// Soal 4

n = 12;
let hasil: number = 1;

for (let i = n; i > 0; i--) {
  hasil *= i;
}

console.log(`Faktorial dari ${n} adalah ${hasil}`);



// EXERCISE

// Soal 5

// INPUT: search word
// Process:
/**
 * identify penggalan kata pada kata asal.
 * replace kata tersebut dengan " "
 */

let kata_asal: string = "naik-naik ke puncak gunung";
let penggalan_kata: string = "puncak";

let kata_setelahpemenggalan: string = kata_asal.replace(penggalan_kata, "")
console.log(kata_setelahpemenggalan); 

// OUTPUT: Potongan kata yang masuk ke dalam input akan hilang pada kata asal.




// Soal 6
// INPUT: string/kata-kata
/**
 * PROCESS:
 * Identify huruf awalan kalimat
 * Huruf awal selalu menjadi huruf pertama dan huruf setelah " "
 * transform huruf menjadi kapital
 */

// OUTPUT: Huruf pada awalan kata dapat dibuat menjadi capital



// Soal 7
// Cara 1
console.log(Math.max(41,27)); 

// Cara 2
let number_1: number = 27000
let number_2: number = 3000

let max_number: number = Math.max(number_1, number_2)

console.log(max_number);


// Soal 8



// Soal 9
// INPUT: string, number, or other
/**
 * PROCESS:
 * String = sentence = menggunakan ""
 * Number = hanya angka
 * Boolean = TRUE or FALSE
 * bigint = kombinasi angka + 'n'
 * Undefined = Undefined
 * Null = null
 * 
 */


// let subject: any = "main-main"
// let string: string = "^[A-Za-z0-9'\"']+$";
// let detect_subject: string = ""
// for (let x: number = 0; x < subject.length; x++){
//  if (subject[x] === string){
//   detect_subject = "String"
// } else if (subject === "0123456789"){
//   detect_subject = "Number"
// } else {
// }
// console.log(detect_subject);

// OUTPUT: Jika string maka akan result = 1, jika number = 2, kalau others result = 3




// Soal 10
// INPUT: string
/**
 * PROCESS:
 * Identify setiap a -> brarti input harus huruf a. Karena berulang berarti harus ada looping cek setiap ketemu "a"
 * Replace huruf menjadi "*"
 */

let sentence: string = "Semua main bareng-bareng";
let chosen_letter: string = "a";
let word_toreplace: string = "*";
let new_sentence: string = "";

for (let i: number = 0; i < sentence.length; i++)
  if (sentence[i] === chosen_letter){
    new_sentence += word_toreplace
  } else {
    new_sentence += sentence[i]
  }

console.log(new_sentence);

// OUTPUT: Huruf 'a' yang diinput akan dirubah menjadi '*'
