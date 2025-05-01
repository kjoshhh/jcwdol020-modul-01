// Function
/**
 * - Definisi ; Sekumpulan program yang ditujukan untuk menyelesaikan suatu proses khusus atau spesifik.
 *              - Untuk menggunakan function, maka harus dibuat terlebih dahulu.
 *              - Function bersifat reusable dan modular.
 * - Kategori : Built-in function dan user-defined function
 * - Aturan :
 *          - Nama function mengacu pada aturan penamaan variable.
 *          - Format penulisan : 
 *              - Declarative function :
 *                      function namaFunc(param1?, param2?,...){}
 *                          - code
 *                      }
 *              - Function expression :
 *                      const namaFunc = function(param1?, param2?,...){
 *                          -code
 *                      }
 *              - Arrow function
 *                      const namaFunc = () => - code
 *                      const namaFunc = () => {
 *                          - code
 *                      }
 * - Function mungkin membutuhkan parameter.
 *   Parameter merupakan penampung value dari luar function,
 *   yang nantinya mungkin akan dibutuhkan untuk melengkapi proses di dalam function.
 * - Function biasanya menghasilkan nilai output melalui return.
 */

// Declarative Function
// function penjumlahan(){
//     let angka_A: number = 12;
//     let angka_B: number = 5;
//     const new_result: number = angka_A + angka_B;

//     return new_result
// }

penjumlahan; // memanggil fungsi

// penjumlahan(); // menjalankan fungsi

console.log(penjumlahan(25, 2));
console.log(penjumlahan(25, 1));
console.log(penjumlahan(12, 2));

function penjumlahan(angka_A: number, angka_B: number) {
    const new_result:number = angka_A+angka_B;

    return new_result
}

// Exorcism 3
function body_massindex(weight_A: number, height_A: number){
    const body_result: number = weight_A / (height_A * height_A);
   
    if(body_result <= 18.5){
        return "Less Weight"
    } else if (body_result > 18.5 && body_result <= 24.9){
        return "Ideal"
    } else if (body_result >= 25 && body_result <= 29.9){
        return "Overweight"
    } else if (body_result >= 30 && body_result <= 39.9){
        return "Very Overweight"
    } else
        return "Obese"
}

console.log(body_massindex(65, 1.7));



// // Exorcism 2
// function trial_looping(n: number) {
//     let total = 0;

//     for (let i = 1; i <= n; i++) {
//         total += 1;

//         if (i % 3 === 0 && i % 5 ===0){
//             console.log("FizzBuzz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else {
//             console.log(i);
            
//         }
//     }
//     console.log("Total loop count:", total);
// }

// CALLBACK FUNCTION : sebuah function yang dititipkan lewat parameter untuk dijalankan
//                      di dalam function utama pemiliki parameter.

function render_calculator(angka_C: number, angka_B: number, callbackFnOperation: any){
    const hasil: number = callbackFnOperation(angka_C, angka_B);
    console.log(`Hasil perhitungan : ${hasil}`);
}

function pengurangan(value_A:number, value_B:number){
    return value_A - value_B;
}

function perkalian(value_A:number, value_B:number){
    return value_A * value_B;
}

render_calculator(12, 5, pengurangan)
render_calculator(12, 5, perkalian)
// Calbackfn with Function expression
render_calculator(12, 5, function (nilaiA: number, nilaiB: number) {
    return nilaiA / nilaiB;
});


// Callbackfn with Arrow function
render_calculator(12, 5, (nilaiA: number, nilaiB: number) => {
    return nilaiA / nilaiB;
});

// Fungsi bawaan = array.forEach(), array.map()

// array.forEach(callback) : mengakses setiap value pada suatu array
const name_list: string [] = ["Edo", "Kevin", "Marsel"];

for(let i:number=0; i< name_list.length; i++) {
    console.log(name_list[i]);
}

name_list.forEach (function (value:string, index: number, array: string[]){
    console.log(index);
    console.log(value);
    
}) // parameter "array" jarang dipakai.

let number_list: number[] = [2,3,4,5,6]

number_list.forEach((value:number, index: number) => {
    console.log(value);
})

number_list.forEach((data:number, i:number) => {
    console.log(data);
    console.log(i);
})

// array.map(callback) : mengakses setiap value pada array dan dijadikan data array baru
let pricelist:number[] = [2000, 20000, 200000, 2500000]; // dirubah menjadi ["Rp2.000", "Rp20.000", "Rp200.000", "Rp2.500.000"]
let currencyList: string[] = pricelist.map((value:number, index:number) => {
    return value.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).replace(/\s/g, '');
});

console.log(currencyList);

// Exercise : Coba pahami cara kerja forEach, lalu duplikasi ke dalam function yang kalian buat sendiri

let umur: number[] = [12, 17, 20];
umur.forEach((value: number) => {
    console.log(value);
})

function duplicateForEach(dataArray: any[], callback: any){
    for (let i = 0; i < dataArray.length; i++){
        callback(dataArray[i], i, dataArray); // kalau tidak pakai index dan array. Pada saat console.log(index); tidak akn terbaca
    }
};

duplicateForEach(umur, (value: number) => {
    console.log(value);
});
