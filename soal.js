// input1: [5, 3] 
// input2: [3, 2]
// Output: [5, 8]

// Solve:
// input1: [5, 3] -> 35 
// input2: [3, 2] -> 23
// Output: [5, 8] -> 58

// input1: [1, 2, 3] -> 321
// input2: [3, 2] -> 23
// Output: [3, 4, 4] -> 344

function convert(input1, input2) {
    // [5, 3]
    // [3, 5]
    // '35'
    const input1String = input1.reverse().join('');
    // [3, 2]
    // [2, 3]
    // '23'
    const input2String = input2.reverse().join('');

    // 35 + 23
    // 58
    const result = parseInt(input1String) + parseInt(input2String);
    // '58'
    // ['5', '8']
    // [5, 8]
    const output = result.toString().split('').map(item => parseInt(item));
    return output;
}

console.log(convert([5, 3], [3, 2]));
console.log(convert([1, 2, 3], [3, 2]));


// sumArray([5, 3], [3, 2]); // [1, 2, 5, 5, 6, 9]

// function sumArray(array1, array2) {
//     // console.log("array");
//     let l1 = array1.length;
//     let l2 = array2.length;
//     let array = []
//     if (l1 == l2) {
//         for (let i = l1 - 1; i >= 0; i--) {
//             array.push(array1[i] + array2[i]);
//         }
//     }
//     console.log(array);
// };

// function sumArrays(input1, input2) {
 
//     let result = [];
  
  
//     for (let i = 0; i < input1.length; i++) {
//       result.push(input1[i] + input2[i]);
//     }
  
//     return result;
//   }
  
  
//   const input1 = [5, 3];
//   const input2 = [3, 2];
//   const output = sumArrays(input1, input2);
  
//   console.log(output); // Output: [5, 8] 