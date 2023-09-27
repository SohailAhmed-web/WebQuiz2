const persons = [
    {
		id: 1,
		personName: "Fahad",
		personAge: "23",
		personIncome: "2000000"
    },
    
];


console.log("id of a person:");
persons.forEach((person) => {
    console.log(person.id);
});

console.log("Name of a person:");
persons.forEach((person) => {
    console.log(person.personName);
});

console.log("Age of a person:");
persons.forEach((person) => {
    console.log(person.personAge);
});

console.log("Income of a person:");
persons.forEach((person) => {
    console.log(person.personIncome);
});
