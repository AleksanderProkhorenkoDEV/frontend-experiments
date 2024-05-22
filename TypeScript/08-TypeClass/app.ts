class Person {
    public gender: string;
    public name: string = 'Jose';

    constructor(gender: string) {
        this.gender = gender
    }

    public sayHi() {
        console.log(`Hi ${this.name}!`);
    }
}

class Developer extends Person {
    public languages: string[] = ['Java', 'JavaScript'];
}

const person = new Person('male');
const developer = new Developer('female');

console.log(developer.name); // 'Jose'
developer.sayHi();