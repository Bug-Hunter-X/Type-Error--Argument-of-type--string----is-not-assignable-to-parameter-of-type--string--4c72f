function greeter(person: string) {
  return "Hello, " + person;
}

function greetArray(people: string[]) {
  return people.map(person => greeter(person)).join(', ');
}

let user = ["Jane", "Doe"];
console.log(greetArray(user)); // Correct usage