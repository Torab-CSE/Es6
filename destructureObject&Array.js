//Destructure is a way of get some property value from object & put in variable .


const person={name:'Shuvro Ghosh', phone:01957693902, address:'dhanmondi', sex:'male', friends:['nayeem','touhid']};
 
const { phone,address,sex} =  person  ;         //or, {name:'Shuvro Ghosh', phone:01957693902, address:'dhanmondi', sex:'male', friends:['nayeem','touhid']};
 
// const fName=person.name;    //put property value in variable,then print it.
// const address=person.address;

console.log(phone,address,sex);
console.log(phone,address,sex);