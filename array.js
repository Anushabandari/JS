//how to declare an array?
var array_name = [];

eg: var friuts = []; // empty array
var nums = [1, 2, 3, 4]; // array with numbers

var diff = [1, true, "anu"]; // can store different data types

var diff2 = [[1, 2], ["a", "b"], { "name": "anu" }]; // can store arrays and objects too.

//how to access the array element
eg: array_name[index]
//eg: nums[1] gives 2

//how to find the number of elements?
array_name.length
eg: nums.length; //4

// how to iterate through an array?
//for loop
//while loop

for (initiliation; CSSConditionRule; increment / decrement){
  
}
eg: for (var i = 0; i < nums.length; i++){
  // your code goes here
}

//how to remove an item in an array?
//pop() - used to remove from end of the array
//shift() - used to remove from the start of an array
//splice() - removes the element by index

// hot to find the element index from an array
//indexOf() - to find the index of an element 

//how to add elements in an array?
//push() adds at the end
//unshift - adds at the begining of the array

//how to get the sub-array fron the main array
slice() - provide begin and end index of the sub - array
eg: nums(1,2) - gives [2]
splice() - provide begin index and number of the items to remove of the subarray
eg: splice(1, 1) - gives[2]

//difference between slice and splice?
//splices modifies the parent array where as slice don't.



