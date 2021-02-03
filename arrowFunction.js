/*function doubleIt(x){
    return x*2;
}*/
//variable function is used as a arrow function in Es6.

/*const doubleIt= function(x){             //it's an arrow function. here doubleIt is variable function declaration.
    return x*2;
}  */             

const doubleIt=x=> x*2;   //es6 .here x is single parameter.
const result=doubleIt(5);
console.log(result);


const number=()=>10;  //no parameter
const showValue=number();
console.log(showValue);


const multiCondition=(x,y)=>{   //more than 1 or 2 parameter.
    const add=x+y;
    const diff=x-y;
    const result=add*diff;
    return result;
}                                        //In arrow function,when we use multiple condition then we need to use curly bracket and have to return the result.
const final=multiCondition(20,10);
console.log(final);
