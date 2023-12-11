/**
* @description This function takes a string `name` as input and returns a greeting
* message with the name included.
* 
* @param { string } name - The `name` input parameter passed to the `greet()` function
* is a string that will be concatenated into the return value of the function using
* the template syntax `Hello..., ${name},!...`. In other words.
* 
* @returns { string } The function "greet" takes a string argument named "name" and
* returns a string with the greeting message "Hello," followed by the value of "name".
* In other words: it returns the string "Hello., <value of name>!" .
*/
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const greeting: string = greet("John");
console.log(greeting);


