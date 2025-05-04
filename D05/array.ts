// Array
/**
 *  - Definisi : Sebuah tipe data yang berisi sekumpulan data.
 *               dan setiap data memiliki alamat index yang selalu dimulai
 *               dari index ke-0.
 * 
 *  - Tujuan : untuk mempermudah pengelolaan data.
 *  - Penulisan : Data array ditandai dengan kurung siku [..., ...]
 *  - Example : let numbs: number[] = [1, 2, 3, 4]
 */

let headphone: string = "Headphone";
let laptop: string = "Laptop";

const gadgetList: string[] = ["Headphone", "Laptop", "TWS", "Ipad"]; // lebih efektif untuk mengumpulkan data-data yang mempunyai typical yang sama.
console.log(gadgetList); 
// Cara manggil data tertentu dari suatu array : namaVariable[index_yang_dipilih]
console.log(gadgetList[1]);
console.log(gadgetList[0]);

const gadgetPrice: number[] = new Array (85000, 45000000, 2500000, 8000000)
console.log(gadgetPrice);
console.log(typeof gadgetPrice);
console.log(typeof null);

// Cara mengganti salah satu data array secara langsung
gadgetPrice[1] = 50000000
console.log(gadgetPrice);
console.log(gadgetPrice[3]);

gadgetList[1] = "Macbook";
console.log(gadgetList);

// Dari data array yang ada, coba rubah menjadi data string berbentuk list barang
// PROCESS : Cara 1
let new_gadgetList: any = []

// for (let i = 0; i < gadgetList.length; i++){
//     new_gadgetList.push((i + 1) + ". " + gadgetList[i]);
// }

// console.log(new_gadgetList);

// Cara 2
// for (let i = 0; i < gadgetList.length; i++){
//     console.log((i + 1) + ". " + gadgetList[i]);
//     console.log(`${i+1}. ${gadgetList[i]}`)
//     }


// Cara 3

let printList: string = "";
for (let i = 0; i < gadgetList.length; i++){
    printList = printList + `${i + 1}. ${gadgetList[i]}\n`;   
}
console.log(printList);


/**
 * Output :
 * 1. Headphone
 * 2. Macbook
 * 3. TWS
 * 4. Ipad
 */

// Array function
// array.length : mengetahui jumlah data pada suatu array.
console.log(gadgetList.length);

// array.push(newData) : menambahkan data baru pada akhir array.
gadgetList.push("Smartwatch")
console.log(gadgetList);
console.log(gadgetList.length);

// arrah.pop() : menghapus data terakhir suatu array
gadgetList.pop();
console.log(gadgetList);

// array.unshift(newData) : menambahkan data baru pada awal array
gadgetList.unshift("PC");
console.log(gadgetList);

// array.shift() : menghapus data awal suatu array
gadgetList.shift();
console.log(gadgetList);

// array.splice() : menghapus/menyisipkan/memperbarui data pada index tertentu.
// 1. Menghapus data : array.splice(pilihanIndex, jumlahYangDihapus)
let carBrands: string [] = ["Toyota", "Mazda", "Nissan"];
console.log(carBrands);
carBrands.splice(1, 1)
console.log(carBrands);

// 2. Menyisipkan data : array.splice(pilihanIndex, jumlahYangDihapus, newData1, newData2,...)
carBrands.splice(1, 0, "Chevrolet", "Lexus");
console.log(carBrands);

// 3. Memperbarui data : array.splice(pilihanIndex, jumlahYangDihapus, newData)
carBrands.splice(0, 1, "Ferrari");
console.log(carBrands);

// array.indexOf("data") : mencari index suatu data
console.log(carBrands.indexOf("Lexus"));
console.log(carBrands.indexOf("Mazda"));
// kalau ga ketemu nanti dapatnya minus 1

// array.reverse() : membalikkan urutan data
carBrands.reverse();
console.log(carBrands);

// array.sort() : mengurutkan data ASC
carBrands.sort();
console.log(carBrands);

// Penggabungan data Array
const studentsA: string[] = ["Amir", "Dion", "Brigitta"]
const studentsB: string [] = ["Emyr", "Jason", "Erika"]
// array.concat(dataArray1, dataArray2,...);
const student: string[] = studentsA.concat(studentsB, "Natasya", "Rabi");
console.log(student);

// Spread Operator : menyalin data dari suatu array ke array yang baru dan menggambungkan dengan data yang lain
const studentList: string[] = [...studentsA, ...studentsB, "Amirah"]
console.log(studentList);

// Array destructure : mengeluarkan nilai suatu array menjadi variable yang berdiri sendiri
const data: any[] = ["Ruben", "Diaz", 17];
let [firstName, lastName, age] = data;
console.log(firstName);
console.log(lastName);
console.log(age);
firstName = "Ananta";
console.log(firstName);
console.log(data[0]);
// untuk membantu aksesibilitas data

//EXERCISE FOUR
// PROCESS:
const dataNumber: number[] = [1,2,3,4,5,6,7,8,9,10];
let printDataNumber: number[] = [];
 for (let i = 0; i < dataNumber.length; i++){
    if (dataNumber[i] % 2 === 0){
        printDataNumber.push(dataNumber[i])
}}

console.log(printDataNumber);

// OUTPUT: merubah [1,2,3,4,5,6,7,8,9,10] menjadi [2,4,6,8,10]






