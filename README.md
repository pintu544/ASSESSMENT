# ASSESSMENT
UNIBIT PRIVATE LIMITED  assessment 

## Array Combinations and Merging

This solution addresses the problem of finding combinations and merging arrays based on a given target value. It follows the following steps:

1. Find Combinations: Given an array of integers and a target value, the solution determines which two integers' sum equals the target and returns a 2D array.

2. Merge Arrays: The 2D array obtained from the previous step is merged into a single array and sorted in ascending order.

3. Double Target Combinations: The merged array is used to find combinations of digits that sum up to double the target value. The combinations are returned in a 2D array.

### Sample Input

Array: [1, 3, 2, 2, -4, -6, -2, 8]
Target Value: 4

### First Combination For "4"

The first step involves finding the combinations of integers in the given array that sum up to the target value. The solution finds all such combinations and returns them in a 2D array.

Output: [[1, 3], [2, 2], [-4, 8], [-6, 2]]

### Merge Into a Single Array

The second step merges the combinations obtained from the previous step into a single array. The elements are sorted in ascending order.

Output: [-6, -4, 1, 2, 2, 2, 3, 8]

### Second Combination For "8"

In the final step, the merged array is used to find combinations of digits that sum up to double the target value (8 in this case). The solution generates all possible combinations and returns them in a 2D array.

Output: [[1, 3, 2, 2], [8, -4, 2, 2], ..., [n, n, n, n]]

### How to Use

The solution is implemented in JavaScript. To use it:

1. Copy the code provided in the solution.
2. Create a JavaScript file (e.g., `array-combinations.js`).
3. Paste the code into the file.
4. Run the file using a JavaScript runtime environment or a web browser console.
5. Review the output for the first combination, merged array, and second combination based on the given sample input.

Feel free to modify the input array and target value to test the solution with different inputs.


