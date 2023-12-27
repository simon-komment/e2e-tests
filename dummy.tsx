/**
* @description This function takes a string parameter `name` and returns a string
* that includes the greeting "Hello" and the input name.
* 
* @param { string } name - The `name` input parameter is a string that is passed to
* the `greet` function and is used inside the function to create a personalized
* greeting message by concatenating it with the string "Hello" and the string "!"
* 
* @returns { string } The output returned by this function is a string with the
* content "Hello", followed by the input "string" parameter (in this case: name).
*/
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const greeting: string = greet("John");
console.log(greeting);










































