// //1. student class example
// class student{
//      constructor(sId,sName){                 //constructor built-in function in class where no need do write function first to declare.
//          this.studentId=sId;
//          this.studentName=sName;
//          this.varsity='Daffodil International University'
//      }                        
// }

// const student1=new student(4575,'torab');    //student1 & 2  is object of student class.
// const student2=new student(4589,'nayeem');

// console.log(student1,student2);
// console.log(student1.studentId,student2.studentId);

//2.phone class example

class Phone{
    constructor(eMi,model,cost,company){
        this.emaiNo=eMi;
        this.phoneModel=model;
        this.price=cost;
        this.companyName=company;
    }
}
const xiaomiPhone=new Phone('mi-12345','mi5',20000,'xiaomi');
const xiaomiPhone1=new Phone('mi-1234567','mi6',25000,'xiaomi');
const oppoPhone=new Phone('o-676767', 'oppo-F9', 25000, 'oppo')
const oppoPhone1=new Phone('o-6767577', 'oppo-F10', 30000, 'oppo')

console.log(xiaomiPhone,xiaomiPhone1,oppoPhone,oppoPhone1);
console.log(xiaomiPhone1.price);
