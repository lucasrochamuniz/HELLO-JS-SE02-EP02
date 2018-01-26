
let arr = [1,2,3,4,5,6,7,8,9,10];
let ne = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i]%2 == 0) {
        ne.push(arr[i] + 'x')
    } else {
        ne.push(arr[i] + 'p')
    }
}
console.log('Array: ' + ne);

