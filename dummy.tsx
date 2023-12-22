/**
* @description This function takes a string `name` as input and returns a greeting
* message with the format "Hello,
* ${name}!"
* 
* @param { string } name - The `name` input parameter passes a string value to the
* function and is used as a variable inside the function's return statement to
* personalize the greeting message.
* 
* @returns { string } The function "greet" takes a string argument "name", and returns
* a string with the format of "Hello , ${name}!"
* The output returned by this function is a string that will include the value of
* "name" as a parameter.
*/
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const greeting: string = greet("John");
console.log(greeting);




































