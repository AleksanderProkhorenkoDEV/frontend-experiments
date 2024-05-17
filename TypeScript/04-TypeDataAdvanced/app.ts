/** ------ Type Data Advanced ------*/

var tupla:[number, string] = [1,'Some text']

type Person = {
    name: string,
    age?: number,
    email: string
}

const personOne: Person = {
    name: 'Aleks',
    email: 'aprokhorenkodev@gmail.com'
}

const personTwo: Person = {
    name: 'Fernadno',
    age: 33,
    email: 'fernandoalonso@gmail.com'
}

interface Vehicles {
    model: string;
    wheels: number;
    sayModel(): void;
}

const car: Vehicles = {
    model: 'Mercedes',
    wheels: 4,
    sayModel: function() {return 'Helo I am Mercedes'}
}
const myObject: Record<string, any> = {}

myObject.name = 'Mario'
myObject.age = 20

const mySecondObject: Record<any, string> = {}

mySecondObject['model'] = 'lamborguini'
mySecondObject.wheels = `4`


type PersonName = {
    name: string
}

type PersonAge = {
    age: number
}

type Human = PersonName & PersonAge

const human: Human = {
    name: 'Jhon',
    age: 21
}


type PersonNameOne = {
    name: string
}

type PersonAgeTwo = {
    age: number
}

type HumanTwo = PersonNameOne | PersonAgeTwo

const humanTwo: Human = {
    name: 'Jhon',
    age: 21
}

