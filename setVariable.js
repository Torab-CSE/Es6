const girlfriend="zaara";
//girlfriend="newItem"    const variable can not be changed.
//console.log(girlfriend);
console.log(girlfriend);


const numbers=[10,20];
numbers[0]=50;          // change the single element of an constant array at a time.
numbers[1]=100;
//numbers=[50,100];         //you can con change the full element of array at a time.
console.log(numbers);


const hero={name:"srk", phone:6770}; //you can change the single property value but can note be changed the full constant object.


let patient="abdur rahman"
patient="rahim vai"   //here patient can be changed because we are using let .

let sum=0;
for(var i=0;i<10;i++){ 
    sum=sum+i;
}
console.log(i);  //let is changeable but lickProof.
console.log(sum);