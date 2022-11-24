let max = 5;

let arr = [];

for(let i= 0 ;i< max; i++){
    console.log(i);
    arr.push(i);
}
let arr2 = arr.map(x=> {
    return x+2;
})
console.log(...arr2);
let arr3 = arr.map(x => {
    return x = arr2;
}) //
console.log(...arr);
console.log(...arr3);

arr3.map(x => {
    x.map(y => {
        y + 2
    })
})
console.log(...arr3 );
/**
 * map 특징
 * 1. 기존의 배열에 영향이 없음
 * 2. 할당시키지 않으면 사용안됨
 * 3. 배열의 기본으로 제공하는 함수
 * 4. retrun 사용안하면 안됨
 */