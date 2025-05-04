// SOAL 1 - Bantuan
// Buat sebuah function filterNames yang menerima array berisi nama-nama orang, dan mengembalikan array baru yang hanya berisi nama yang dimulai dengan huruf "A".
// INPUT : const studentNames: string[] = ["Amir", "Dion", "Ananta", "Rudi", "Alya"].
// OUTPUT : membuat list baru dengan nama student yang dimulai dari huruf A => ["Amir", "Ananta", "Alya"].
// PROCESS :
const studentsNames: string[] = ["Amir", "Dion", "Ananta", "Rudi", "Alya"];
let printStudentsNames: string [] = [];
for (let i = 0; i < studentsNames.length; i++){
   if (studentsNames[i].startsWith("A"))
    printStudentsNames.push(studentsNames[i])
}

console.log(printStudentsNames);


//SOAL 2 - Bantuan
//Buat function isAdult yang menerima parameter berupa angka age. Function akan mengembalikan true jika umur di atas atau sama dengan 17 tahun, dan false jika kurang dari itu.
// Contoh:
// ts
// Copy
// Edit
// isAdult(18) → true  
// isAdult(15) → false
function isAdult(ageKnown: number): boolean{
let ageResult: boolean = false;
if (ageKnown >= 17){
    return true;
} else{
    return false;
}}

console.log(isAdult(18));

//SOAL 3
//Diberikan dua array string berisi nama siswa dari dua kelas berbeda. Gabungkan kedua array dan tampilkan jumlah total siswa.
const classA: string [] = ["Dion", "Amir", "Jason"];
const classB: string [] = ["Alya", "Rina"];

const newClass: string [] = classA.concat(classB)
console.log(newClass.length);

//SOAL 4 - Bantuan
// Buat function daysUntil yang menerima parameter berupa tanggal di masa depan (format: YYYY-MM-DD). Function akan menghitung berapa hari lagi menuju tanggal tersebut dari hari ini.
// Contoh jika hari ini adalah 2025-05-04: daysUntil("2025-05-10") → 6

function daysUntil(dateString): any {
    const today = new Date("2025-05-04");
    const targetDate = new Date(dateString);
    
    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  }
  
  console.log(daysUntil("2025-05-10"));


// SOAL 5
const students = ["Dion", "Erika", "Nina"];
const newStudents = [...students, "Budi"];

console.log(newStudents);


