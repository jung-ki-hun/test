
var testArray = [0,1,2,3,4,5];
 
console.log(testArray.filter(function(c){ return c <= 2; })); // [0, 1, 2]
 
console.log(testArray.map(function(c){ return c <= 2 })); // [true, true, true, false, false, false]
 
console.log(testArray.map(function(c){
    if (c <= 2)
        return c;
})) // [0, 1, 2, undefined, undefined, undefined]

console.log( testArray.filter(function(c){ return c * 2; })); // [1, 2, 3, 4, 5]
 
console.log(testArray.map(function(c){ return c * 2 })); // [0, 2, 4, 6, 8, 10]