// Looping ; Cara untuk menjalan program berulang

/**
 * FOR LOOP : perulangan yang digunakan ketika dari awal sudah diketahui batas loopingnya
 * Aturan penulisan :
 * for(statement_1;statement_2:statement_3){
 *      - task_code
 * }
 * statement_1: variable yang mendefinisikan nilai awal dari hitungan batas looping
 * statement_2: kondisi untuk memerika bahwa statement_1 memiliki nilai sesuai kondisi yang diberikan
 * statement_3: berisi perhitungan increment atau decrement yang dilakukan pada variable statement_1
*/

for (let i: number = 0; i < 5; i++) {
    console.log(`Loop Ke-${i}`); 
}




/**
 * WHILE LOOP : secara umum digunakan untuk proses looping yang batasnya tidak pasti
 * Aturan penulisan :
 * while(condition){
 *      - task_code
 * }
 */

let countA: number = 12;

while(countA < 10){
    console.log(`Loop Ke-${countA}`);
    countA++;
}

while(countA > 0){
    console.log(`Perhitungan mundur-${countA}`);
    countA--;
}







/**
 * DO WHILE : secara umum sama cara kerjanya dengan while. Tetapi do while pasti minimal akan dieksekusi 1 Kali
 * Aturan penulisan:
 * do{
 *      -task_code
 * }while(condition)
 */

let count_B: number = 0;
do{
    console.log(`Loop ke-${count_B}`);
    count_B++;
} while (count_B < 5)



