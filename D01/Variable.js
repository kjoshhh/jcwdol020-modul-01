// Variable : Penampung data
/**
 * Susunan penulisan varialbe --> keywordVariable nama Variable = dataVariable;
 * keywordVariable : var, let, const
 * namaVariable : - harus diawali dengan huruf atau diawali dengan symbol "_" atau symbol "$"
 *                - jika nama variable terdiri dari dua suku kata, maka disusun dengan mode camelCase, snake_case.
 *                      -camelCase -> penulisan dengan huruf pertama lower case dan huruf kata selanjutnya uppercase dan tanpa spasi.
 * dataVariable : nilai yang ingin kita simpan berdasarkan tipe data yang tersedia, di antaranya string, number, boolean, null, undefined, array dan objek.
 */

// Variable declaration -> menentukan keyword variable apa dan namanya apa.
var message;

// Variable initialitation
var nama = "Abdi";

/**
 * Kapan memakai variable tersebut --> kita lihat step by step proses yang mau kita jalankan ke mana condongnya.
 */

console.log(nama); // fungsi JS, yang bertugas untuk menampilkan data dari suatu variable/function/data secara langsung.
console.log(nama);

// Keyword var : Redeclare -> melakukan deklarasi variabel ulang, Reassign -> memanggil nama variable dan langsung deklarasi keyword baru.
var city = "Malang";
console.log(city);
var city = "Bandung";
console.log(city);
city = "Surabaya";
console.log(city);
// Disarankan untuk memakai reassign karena langsung bisa tanpa deklarasi ulang.


// Keyword let : Non-redeclare, Reassign
let age = 40;
//let age = 25;
age = 50;
console.log(age);

// akan lebih sering digunakan daripada 'far'. Karena adanya proteksi variable yang tidak bisa didouble.

// Keyword const : Non-redeclare, Non-reassign
const PI = 3.14;
//const PI = 22 / 7
//PI = 3.15;
//Menjadi data acuan dalam suatu proses.
console.log(PI);

// Data Type : Kumpulan model tipe data pada javascript.
// Primitive
let region = "East Java"; // string
let weight = 30.5 // number
let isActive = true; // boolean
const NoData = null; // null
const undefinedData = undefined; // undefined

// Non-primitive
const product = ["Apel", "Jeruk", "Semangka"]; // Array
const job = {
    position: "Coder",
    salaryRate: 4000000,
}; // Object

/**
 * Typescript lebih merapihkan lagi penulisan JS yang kita buat.
 * Dengan kita memberikan informasi ke setiap variable dia bolehnya nyimpen apa (tidak boleh simpan selain apa yang ditentukan)
 */

