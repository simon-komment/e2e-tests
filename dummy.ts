/**
* @description The function `greet` takes a `string` parameter named `name`, and
* returns a string that greets the person with the name given as an argument.
* 
* @param { string } name - The `name` input parameter is a string that is passed as
* an argument to the `greet()` function.
* 
* @returns { string } The output of the `greet` function is a string that reads
* "Hello," followed by the input string "name", and finally the punctuation symbol
* "!"
*/
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const greeting: string = greet("John");
console.log(greeting);



