/**
* @description The function "greet" takes a string parameter "name" and returns a
* string greeting with the name inserted into the template "Hello _, ?".
* 
* @param { string } name - The `name` input parameter is passed as a string and is
* used inside the return statement to include the name as part of the greeting message.
* 
* @returns { string } The function `greet` takes a `name` parameter of type `string`
* and returns a string with the greeting message "Hello" followed by the value of `name`.
*/
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const greeting: string = greet("John");
console.log(greeting);

















