/**
* @description The function `greet` takes a `string` parameter named `name`, and
* returns a string message that includes the value of `name`. The message is formatted
* as "Hello.
* 
* @param { string } name - The `name` input parameter is a string that is passed to
* the `greet` function and is used to personalize the greeting message.
* 
* @returns { string } The output returned by the `greet` function is a string that
* starts with "Hello" and contains the input `name` as a string.
*/
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const greeting: string = greet("John");
console.log(greeting);












