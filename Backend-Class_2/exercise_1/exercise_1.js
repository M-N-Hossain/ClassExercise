const arr = ["Peter", 7, "Marianne", true, "Helle", 8];

// printing each item with the data type of the arr array

function printArrayItemWithDataType(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} is a ${typeof arr[i]}`);
  }
}
printArrayItemWithDataType(arr);
