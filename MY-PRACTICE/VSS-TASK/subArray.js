//Subarray with given sum
//Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 2 4
// Explanation: The sum of elements
// from 2nd position to 4th position
// is 12.

function subarraySum(a, s) {
  if (a.length < 2 || s < 0) {
    return -1;
  } else {
    // end = start + 1;
    let start = 0;
    for (let i = start; i <= a.length; i++) {
      for (let j = i + 1; j <= a.length; j++) {
        sum = a[i] + a[j];
        // console.log("Sum1:", sum);
        check(sum);
        function check(sum) {
          if (sum < s) {
            sum += a[j + 1];
            check(sum);
          } else if (sum > s) {
            // sum += a[i + 1];
            sum -= a[i];
            check(sum);
          } else if (sum == s) {
            console.log(i, j);
            // return i, j;
          }
        }
        // console.log(i, j);
      }
    }
  }
}

A = [1, 2, 3, 7, 5];
subarraySum(A, 12);
// A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// subarraySum(A, 15);

// function subarray(array, start, target) {
//   sum = 0;
//   result = [];
//   for (let i = start; i < array.length; i++) {
//     sum += array[i];
//     if (sum == target) {
//       result[0] = start;
//       result[1] = i;
//       return result;
//     } else if (sum > target) return subarray(array, start + 1, target);
//   }
// }

// A = [1, 2, 3, 7, 5];
// subarray(A, 1, 12);
