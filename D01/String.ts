/**
 * String : data yang terdiri dari huruf atau karakter text.
 * Pakai single quote bisa tapi dasaran umum double quote
 * 
 */

let namaToko : string = "RUNNER SPORT"; // Double quotes
let alamatToko: string = `Jl. Pemuda No. 90-100`; // Template literal atau backthick

//Menggabungkan data string
// Cara 1 : Menggunakan operator penjumlahan +
let tokoKu: string = namaToko + " " + alamatToko;
console.log(tokoKu);
// Ketik sendiri tanpa ambil variable lain.

// Cara 2 : menggunakan template literal with backthick
tokoKu = `${namaToko} ${alamatToko}`;
console.log(tokoKu);
// Ingin menghasilkan kumpulan teks berasal dari sumber variable lain gunakan backthick
// Spasinya udah included karena kita sudah spasikan sendiri di backthick.

// typeof : code/fungsi JS yang bertugas untuk mengetahui tipe data suatu variable atau nilai itu sendiri.
console.log(typeof tokoKu);
console.log(typeof 10);

// FUNGSI BAWAAN TIPE DATA STRING
let greeting:string = "Hello, Purwadhika Student";
// length : menghitung panjang character pada data string
console.log(greeting.length);

//toLowerCase() : merubah semua karakter menjadi huruf kecil
console.log(greeting.toLowerCase());

// toUpperCase() : merubah semua karakter menjadi huruf besar
console.log(greeting.toUpperCase());

// includes() : mendeteksi suatu kata ada atau tidak
console.log(greeting.includes("meja"));
// True ada dan false tidak ada

// split() : merubah data string menjadi data array
console.log(greeting.split("e"));

// replace : mengganti barang tertentu
console.log(greeting.replace("Student", "Murid"));



