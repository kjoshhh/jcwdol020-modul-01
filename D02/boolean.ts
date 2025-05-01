// Boolean : kalau string/number bisa variatif.  Hanya ada dua tipe "true" atau "false"
// Membantu menjalankan decision A atau B
let benar: boolean= true;
let salah: boolean = false;

// Comparison operator : >, <, >=, <=, ==, ===, != -> bisa untuk menampilkan hasil boolean
// Hubungannya dengan operasi perbandingan
let valueA: number = 15 // terjadi error karena number tidak bisa diassign ke string.
let valueB: number = "12";
let valueC: number = 15

console.log(valueB > valueC);
console.log(valueC > valueB);
console.log(valueC >=15);
console.log(valueC == 14);
console.log(valueB != 12);
console.log(valueB === 12);
// comparison operator == hanya untuk pencocokan nilai tapi tidak peduli dengan tipe data, kasus untuk data sama sama angka atau sama sama string
// comparison operator === juga berfokus pada pencocokan data
// di Module 2, react.js kalau ada comparison equal harus pakai sama dengan ===

// Logical oeprator : AND &&, OR ||, NOT ! -> cara untuk mengambil kesimpulan nilai boolean
console.log(true && true);
console.log(valueB == 12 && valueC < 20);
console.log(true && false);
console.log(false && true);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
// kalau or || ketika salah satu ada yang true, hasilnya tetap true

// NOT : membalikkan nilai boolean
console.log(!false);
console.log(valueB === valueC);

// Nilai boolean berdasarkan data
// TRUTHLY
console.log(Boolean("ABC"));
console.log(Boolean(" "));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean(true));
console.log(Boolean(true));
console.log(Boolean([ ]));
console.log(Boolean({ }));

// FALSY
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(false));

















