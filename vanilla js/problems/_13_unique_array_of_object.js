//* Write function to sort array of object of type 'Object'
function uniqueArray(arr) {
    var _a, _b, _c, _d;
    var output = [];
    var strArr = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var obj = arr_1[_i];
        var str = "".concat((_a = obj.a) !== null && _a !== void 0 ? _a : "", "-").concat((_b = obj.b) !== null && _b !== void 0 ? _b : "", "-").concat((_c = obj.c) !== null && _c !== void 0 ? _c : "", "-").concat((_d = obj.d) !== null && _d !== void 0 ? _d : "");
        if (strArr.indexOf(str) === -1) {
            strArr.push(str);
            output.push(obj);
        }
    }
    return output;
}
var arr1 = [
    { a: 1, b: 2, c: 3, d: 4 },
    { a: 5, b: 6, c: 7, d: 8 },
    { a: 1, b: 2, c: 3, d: 4 }, // Duplicate
];
var result1 = uniqueArray(arr1);
console.log(result1);
var arr2 = [
    { a: 1, b: 3 },
    { b: 3, a: 1 },
    { c: 2, d: 4 },
];
console.log(uniqueArray(arr2));
