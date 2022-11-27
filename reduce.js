var peoples = [
    {
        name : 'Alice',
        age : 21
    },
    {
        name : 'Max',
        age : 20
    },
    {
        name : 'Jane',
        age : 20
    }
 
];
 
function groupBy(objectArray, property){
    return objectArray.reduce(function (accumulator, currentObj) {
        var key = currentObj[property];
        console.log(`key : ${key}`);
        if (!accumulator[key]) {
            accumulator[key] = [];
        }
        accumulator[key].push(currentObj);
        return accumulator;
    }, {}); // 누산기를 산술에 쓰지않고 빈 객체나 배열을 줘서 여기에다 담는 용도로도 쓴다.
};
 
var groupedPeople = groupBy(peoples, 'age');
console.log(`groupedPeople : ${JSON.stringify(groupedPeople)}`);
/*
"age" 속성으로 객체 분류 (나이 별)
groupedPeople : {
	"20":[{"name":"Max","age":20},{"name":"Jane","age":20}],
    "21":[{"name":"Alice","age":21}]
}
*/

let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
 
let result = arr.sort().reduce((accumulator, currentValue) => {
    const length = accumulator.length
    if (length === 0 || accumulator[length - 1] !== currentValue) {
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);
console.log(result); 
//[1,2,3,4,5]

[ 2, 4, 5, 6, 8 ]
    .filter(val => val % 2 === 0)
    .map(val => val * 10); // [20, 40, 60, 80]
 
// 루프 한번에 filter, map 완료.
[ 2, 4, 5, 6, 8 ].reduce((acc, val) => {
    if(val%2 === 0) {
        acc.push(val * 10)
    }
    return acc;
}, []);

[ [9,2], [8,7] ].reduce((acc, val) => [ ...acc, ...val ], []) // [9, 2, 8, 7]


var address = ["경기도", "안양시", "만안구"];
 
var addressResult = arr.reduceRight((acc, element) => address + " " + element);
 
console.log(result); //  만안구 안양시 경기도
console.log(typeof addressResult); // string