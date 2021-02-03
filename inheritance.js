class Parent{
    constructor(father){
        this.fatherName= "ABU TORAB"//father;
        this.title="Khan"
    }
}
//const fatherName=new parent("ABU TORAB")

class Child extends Parent{
    constructor(name){
        super();
        this.babyName=name;
    }
    getFullName(){                   //it's a method.you can get the property and value of child class and also parent class.
        const fullName=this.babyName+' '+this.title;
        return fullName;
    }

}
const child1=new Child('Sharfaraz Khan'); //here,it's an object.provide value in parameter of constructor.
const child2=new Child('Shaheed');

console.log(child1);
console.log(child2.getFullName());