class Person {
    firstName = "Default"
    static species(){
        // this -> class
        return "test"
    }

    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
        this.havejob = false
    }

    get Name(){
        return this.firstName
    }

    set Name(name){
        this.firstName = name
    }

    fullname(){
        return this.firstName + this.lastName
    }

}

class Worker extends Person{
    constructor(firstName,lastName,job){
        // calls the Person's constructor method
        super(firstName,lastName)
        this.havejob = true
        this.job = job
    }

    fullname(){
        return super.fullname()
    }

    get Job(){
        return this.job
    }

    set Job(job){
        this.job = job
    }
}

const person = new Person('zhen','hong')
person.Name = "test"
console.log(Person.species())
console.log(person.fullname())

const PersonButHaveJob = new Worker('super_zhen','hong','engineer')
console.log(PersonButHaveJob.Job)

PersonButHaveJob.Job = "new Task!"

console.log(PersonButHaveJob.Name)

console.log(PersonButHaveJob.fullname())



