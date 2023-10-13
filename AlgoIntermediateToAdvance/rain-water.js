/**
 * Leet Code Example - Trapping Rain Water (Case Study)
 * 
 * 
 * LeetCode is a good tool to help you enhance your skills, expand your knowledge and 
 * prepare for technical interviews. Now although some questions and examples are free,
 * they do have a subscription to pay for their platfrom services as well. 
 * 
 * Let's take a look at a leetcode interview questions together! 
 */


/**
 * Leet Code Example - Trapping Rain Water (Case Study)

1. Given n non-negative integers representing an elevation map where the 
width of each bar is 1, compute how much water it is able to trap after raining.

2. Use the following array as your functions input:
[0,1,0,2,1,0,1,3,2,1,2,1]

3. Log and call the function which should successfully return the computation of how 
much water this blueprint array is able to trap after raining. 
 */

// 
// Exercise Solution Explanation
// 
// x axis base = .
// * = block of elevation
// 
//     .......*....
//     ...*rrr**r*.
// x .*r**r******
// 
// final calc = min(a,b) – array[i],
// 
// r = 6
// 
// Input: arr[]      = {2, 0, 2}
// Output: 2
// 
// Algorithm: 
// 
// Traverse the array from start to end.
// For every element, traverse the array from start to that index and find the
// maximum height (a) and traverse the array from the current index to end, and 
// find the maximum height (b).
// The amount of water that will be stored in this column is min(a,b) – array[i], 
// add this value to the total amount of water stored
// Print the total amount of water stored.
//  

function maxRain(graphArr) {
        let result = 0;
        const xPlainMax = graphArr.length;
        // For every element of the array
        // except first and last element
        for (let i = 1; i < xPlainMax - 1; i++) {
            let left = 0;
            //console.log(i)
            //console.log('left',left)
            // Find maximum element on its left
            for (let j = i; j >= 0; j--) {
                // console.log('j',j)
                left = Math.max(left, graphArr[j]);
                //console.log('graphArr',graphArr[j])
              // console.log('left',left)
            }
            // Find maximum element on its right
            let right = graphArr[i];
            //console.log('graphArr',graphArr[i])
            for (let j = i + 1; j < xPlainMax; j++) {
              // console.log('j',j)
              // console.log('graphArr',graphArr[j])
            //    console.log('right',right)
                right = Math.max(right, graphArr[j]);
              
            }
    
            // Update maximum water value
            result += Math.min(left, right) - graphArr[i];
          // console.log('left',left)
          // console.log('right',right)
          // console.log('graphArr',graphArr[i])
    
        }
        return result;
    }
    
    console.log("Exercise Solution I", maxRain([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
    
    function trap2(heights) {
        const maxSoFar = (arr) =>
            arr.reduce((m, x) => m.concat(Math.max(...m, x)), []);
        const leftWall = (arr) => [0, ...maxSoFar(arr).slice(0, -1)];
        const l = leftWall(heights);
        const r = leftWall(heights.reverse()).reverse();
        return heights.reduce(
            (m, h, i) => m + Math.max(0, Math.min(l[i], r[i]) - h),
            0
        );
    }
    console.log(
        "Exercise Solution II",
        trap2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
    );
    