/**
* @description The function `greet` takes a string `name` as input and returns a
* string greeting the person with the name.
* 
* @param { string } name - The `name` input parameter is passed as a string and is
* used to personalize the greeting message by inserting it into the String template
* `Hello、${name}`.
* 
* @returns { string } The output returned by this function is "Hello" followed by
* the input name (as a string).
*/
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const greeting: string = greet("John");
console.log(greeting);




