interface IPerson {
    gender: string,
    sayHi: () => void
}

/**
 * The characteristic of implementing interfaces to a class is that its properties and methods must be of public type, they can be neither private nor protected.
 *  
 */

class Person implements IPerson {
    public gender: string;
    private name: string;

    constructor(gender: string, name) {
        this.gender = gender
        this.name = name
    }

    public sayHi(): void {
        console.log(`Hi ${this.gender}!`);
    }
}

const persona = new Person('male', 'Aleks')