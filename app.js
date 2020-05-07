const os = require('os');
const fs = require('fs');

const genders = [
  'Male',
  'Female',
]
const maleNames = [
  'John',
  'Magnus',
  'Jackob',
  'Jack',
]
const femaleNames = [
  'Emma',
  'Olivia',
  'Ava',
  'Mia',
]
const lastNames = [
  'Smith',
  'Jones',
  'Brown',
  'Miller',
]
const peoples = [

]
const randChoice = (arr) => (
    arr[Math.floor(arr.length * Math.random())]
);
for (let i=0; i<21; i++ ){
    const gender = randChoice(genders)
    const people = new Object()
    people.Gender = gender
    if (gender === genders[0]) {
        name = randChoice(maleNames)
    }
    else {
        name = randChoice(femaleNames)
    }
    
    people.Name = name
    const last = randChoice(lastNames)
    people.LastName = last
    const age = Math.floor(Math.random() * (70 - 18)) + 18;
    people.Age = age
    peoples.push(people)

}

fs.writeFile('peoples.json', JSON.stringify(peoples), (err) => {
    if (err) throw err;
    console.log('Saved file!');
})
console.log(peoples);
