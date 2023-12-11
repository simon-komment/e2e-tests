/**
* @description This function takes a `string` named `name` as an argument and returns
* a string that starts with "Hello" and includes the value of `name` within the string.
* 
* @param { string } name - The `name` input parameter is a string that is passed
* into the `greet()` function and is used as a placeholder for the greeting message.
* 
* @returns { string } The output returned by the function `greet` is a string that
* says "Hello" followed by the input `name` (string).
*/
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const greeting: string = greet("John");
console.log(greeting);
