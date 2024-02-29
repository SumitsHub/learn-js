function mutateArray(arr) {
    arr.push(5);
    arr = 1;
    return arr;
}

let list = [1, 2, 3, 4];
mutateArray(list);
console.log(list); // [1, 2, 3, 4, 5]

list = mutateArray(list);
console.log(list); // 1