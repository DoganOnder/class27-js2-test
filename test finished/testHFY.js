/* 1. Create a function, named logObj, that:
    - Takes 1 argument: an object, with 3 properties
    - Loops over the object and put each value into a separate variable
    - Concatenates the values into a single string
    - Log to the console the string, including the following: '{NAME} is {AGE} and works as an {JOB}!'
    - Return the string
    Expected output:
    'Noer is 28 and works as an Education Director'
*/
const person1 = { name: "Noer", age: "28", job: "teacher" };
function logObj(name, age, job) {
  let obj = {};
  obj.name = person1.name;
  object.age = person1.age;
  obj.job = person1.job;
  return obj;
}
console.log(
  person(`${person.name} is  ${person.age} and works as ${person.job}`)
);

// Q2. Create a function, named logNumbers, that:

function numberCounter() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
numberCounter();

// JavaScript2

// /* 3. Create a function, named toNumbers, that:
//       - Takes in 1 argument: an array of strings
//       - Get the index position number of each value
//       - Create a new array that includes all these numbers
//       - Make use of the map() function
//       - Log to the console the array of numbers
//       - Return the array of numbers
//       Expected output:
//       [1, 2, 3, 4]
//       Use the following array: const letters = ['a', 'b', 'c', 'd'];

const letters = ["a", "b", "c", "d"];

function index(arr) {
  const index = arr.map((value, index, array) => {
    return index;
  });
  return index;
}

console.log(index(letters));

/*5. What's the output for this snippet? Is the output deterministic (always the same) or might it depend on the browser
we run this in?


Answer: The values logged as 
one
six
four
two
five
three

one-six-four are displayed first 
since they are logged by simple calls to console.log() without any delay...
two-five-three are logged with time delay. And they are displayed later.

*/
