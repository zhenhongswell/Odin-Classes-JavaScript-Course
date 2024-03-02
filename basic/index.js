class Person{
    name = "deault"
    constructor(name,age){
        this.name = name
        this.age = age

    }


    get Name(){
        return this.name
    }

    set Name(value){
        this.name = value
    }
}




const person = new Person('zhen hong',25)

console.log(person.Name)
person.Name = "new zhen hong"
console.log(person.Name)

console.log(person)


// testing extend

class Worker extends Person{
    constructor(name,age,job){
        super(name,age)
        this.job = job
    }
    set Job(value){
        this.job = value
    }

    get Job(){
        
        console.log(super.Name)
        return this.job
    }




}

const work = new Worker("zhen hong",25,'engineer')

console.log(work)
work.Job = "no no no"
console.log(work.Job)



// extend


