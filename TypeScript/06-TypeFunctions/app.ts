/* --------------- Type params of functions --------------- */

const add = (a:number, b:number = 0): number => {
    return a + b
}

const result = add(1,3)

/* --------------- Type functions --------------- */

let combineFunctions: Function

const multiply = (a:number, b:number):number => {
    return a * b
}

const sayHello = (): string => {
    return 'Hello my friend'
}

const user:string = 'Bob'

if(user === 'pep'){
    combineFunctions = multiply
}else{
    combineFunctions = sayHello
}

/* --------------- Type never --------------- */

const generateError = (message: string): never => {
    throw new Error(message)
}

generateError('This is a error message')