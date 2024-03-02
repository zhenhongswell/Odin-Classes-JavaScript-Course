class Person {
    #age = 30
    constructor(){
        // this.age = 20
    }

    get Age(){
        return this.#age
    }
}

const person = new Person()
console.log(person.Age)
