// Number : tipe data dalam bentuk angka

let jarak : number = 1500; // Nilai INT
let berat : number = 30.5; // Nilai Float

// Aritmethic : +, -, *, :, %
let angkaA: number= 12
let angkaB: number= 10

let result_this: number; 
result_this = angkaA / angkaB
console.log(result); 

// Increment :
let count : number = 0;
count++; // Postfix count = count + 1;
count++; // Postfix
++count; // Prefix
console.log(count);
// Pendekatan yang prefix jarang terjadi karena mostly diurutkan dulu baru di jumlahkan


// Decrement
count--;
count--;
count--;
console.log(count);

// Math Object
const PI :number= Math.PI; 
console.log(PI);

// Pembulatan
console.log(Math.round(3.76));
console.log(Math.ceil(25.04));
console.log(Math.floor(25.99));

// MIN and MAX
console.log(Math.max(12,5,8,85,75,90,10,40)); 
console.log(Math.min(0, 99, -100, -16020));

// Random value -> rentang nilai 0-1
console.log(Math.random()); 
//Kalau mau custome 1-20 itu harus ada perhitungan arimathic tambahan

// Parsing data -> string to INt
let angka: string = "123.456"
console.log(parseInt(angka));
console.log(parseFloat(angka));

let price: number = 540000000;
console.log(price.toString());
console.log(price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
}));
// localeString berfungsi untuk currency nantinya












