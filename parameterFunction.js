function add(num1,num2=20){   // you can set the temporary parameter value.when function can not find the parameter value,it will be permanent parameter value.
    return num1+num2;
}
var total=add(10);          // if you send the less parameters that function is need,the function will give the NAN value.it's solution is above on declare parameter value.

//var total=add (10,20);     when you pass the all function parameter then automatically replace the second parameter value.

console.log(total);
 

//note:Using default parameter, you can set empty string or array parameter.it'll be helpful when you don't declare the parameter value properly.