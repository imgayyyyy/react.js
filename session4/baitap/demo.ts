//arr
let arr: number[];
//object
let student: {
    id: number;
    name: string;
}

//type alias
type Student = {
    id: number;
    name: string;
}
let newStudent: Student;


// union type
let score: number | string;
score = 10;
score = 'muoi';

//intersection type
type subject = {
    subjectName: string;
    score: number;
}

console.log();

