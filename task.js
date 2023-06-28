function findCombinations(arr, target) {
  const result = [];
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) {
      const pairs = map.get(complement);
      for (const pair of pairs) {
        result.push([arr[i], pair]);
      }
    }

    if (map.has(arr[i])) {
      map.get(arr[i]).push(arr[i]);
    } else {
      map.set(arr[i], [arr[i]]);
    }
  }

  return result;
}

function mergeAndSort(arr) {
  return arr.sort((a, b) => a - b);
}

function doubleTargetCombinations(arr, target) {
  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
    const combination = [arr[i]];
    
    for (let j = 0; j < arr.length; j++) {
      combination.push(arr[j]);
      if (combination.reduce((sum, num) => sum + num, 0) === target) {
        result.push(combination.slice());
      }
    }
  }
  
  return result;
}

const input = [1, 3, 2, 2, -4, -6, -2, 8];
const target = 4;

const combinations = findCombinations(input, target);
console.log("First Combination For '4':", combinations);

const merged = mergeAndSort(combinations.flat());
console.log("Merge Into a single Array:", merged);

const doubleTargetCombs = doubleTargetCombinations(merged, target * 2);
console.log("Second Combination For '8':", doubleTargetCombs);
