/*
THE SYNTAX

class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

The method to create new objects must be called constructor

The class keyword creates a constant, so you can not redefine it. 

Creating objects from classes
- We use the new keyword

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");
*/

class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0
        this.scores = []
    }

    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies) return "YOUR ARE EXPELLED!!"
        return `${this.firstName} ${this.lastName} has been late ${this.tardies}`
    }
    addScore(score){
        this.scores.push(this.scores)
        return this.scores
    }
    calAverage(){
        this.scores.reduce((a, b) => a+b)
        return sum/this.scores.length;
    }
    static EnrollStudents(){
        return "ENROLLING STUDENTS!"
    }
}

let firstStudent = new Student("Colt", "Steele", 2024);
let secondStudent = new Student("Blue", "Steele", 2025);
Student.EnrollStudents();
