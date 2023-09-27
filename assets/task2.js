const persons = [
    {

        id: 1,
		personName: "Fahad",
		personAge: "23",
		personIncome: "2000000"
    },
    {
        id: 2,
		personName: "Zoya",
		personAge: "23",
		personIncome: "3000000"
    },
    {
        id: 3,
		personName: "Veesar",
		personAge: "23",
		personIncome: "300000"
    },
   
];

for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    console.log(`Person ${i + 1} name is ${person.personName} having salary ${person.personIncome},`);
}

