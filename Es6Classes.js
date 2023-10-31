
class Person{
    walk(){
        console.log("Hi, I am from person");
    }
}


class Student extends Person{
    constructor(name){
        super();
        this.name=name;
    }
    sayHi(){
        console.log("Hi, from student "+this.name);
    }
}

const stu1=new Student("bhuvi");
const stu2=new Student("naveen");
stu1.sayHi();
stu2.sayHi();
stu1.walk();