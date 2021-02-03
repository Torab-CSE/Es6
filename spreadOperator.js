// add all arrays using spread operator.
 //spread operator...is a element of arrayVariable or array.

const age1=[10,30,45,29];
const age2=[78,28,28,49];
const age3=[12,45,20,17];

const age=age1.concat(age2);
console.log(age);

//const allAges=age1.concat(age2).concat(age3).concat([100]);     //add all arrays in one variable together.
//const allAges =[age1,age2,age3];     // add all arrays in one variable but not together.

const allAges=[...age1,...age2,...age3,100];    //...age is element of age1 array.
console.log(allAges);


const student=300;
const teacher=500;
const principle=1000;
const max=Math.max(student,teacher,principle);
console.log(max);

const Value=[1000,45,2039,3420];
const highestValue=Math.max(...Value);
console.log(highestValue);

