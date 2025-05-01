// Object : tipe data yang mampu menampung sekumpulan tipe data lain berdasarkan nama properti

/**
 * Aturan penulisan :
 * const data_obkect = {
 *      nama_property : value, -> sama dengan aturan penamaan variable
 *      username: "Edi",
 *      age: 17
 *      is_active: true
 * }
 */
type Student = {
    fullName: string;
    age: number;
    isActive: boolean;
    grade: string[]
}

const student: Student = {
    fullName : "Kevin",
    age : 20,
    isActive : true,
    grade : ["A", "B", "C"]
};

console.log(student.age); // Cara umum yang digunakan
console.log(student.fullName);
console.log(student["fullName"]);
console.log(student.grade[2]);


student.fullName = "Kevin Joshua";
console.log(student);

// LOOPING OBJECT : for...in
for(const propertyName in student) {
    console.log(propertyName);
    console.log(student[propertyName]);
}

// EXERCISE
// Soal 4