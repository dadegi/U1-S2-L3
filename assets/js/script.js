let defName = 'Mario';
const yourName = document.getElementById('yourName');

if (defName === 'Aldo') {
	yourName.innerText = 'Ti chiami Aldo';
} else if (defName === 'Maria') {
	yourName.innerText = 'Ti chiami Maria';
} else if (defName === 'Antonio') {
	yourName.innerText = 'Ti chiami Antonio';
} else if (defName === 'Giovanna') {
	yourName.innerText = 'Ti chiami Giovanna';
} else if (defName === 'Mario') {
	yourName.innerText = 'Ti chiami Mario';
}

switch (defName) {
	case 'Aldo':
		yourName.innerText = 'Ti chiami Aldo';
		break;

	case 'Maria':
		yourName.innerText = 'Ti chiami Maria';
		break;

	case 'Antonio':
		yourName.innerText = 'Ti chiami Antonio';
		break;

	case 'Giovanna':
		yourName.innerText = 'Ti chiami Giovanna';

	case 'Mario':
		yourName.innerText = 'Ti chiami Mario';
		break;
}

const dayName = 6;
const thisDay = document.getElementById('thisDay');

// if (dayName === 0) {
// 	thisDay.innerText += ' Domenica';
// } else if (dayName === 1) {
// 	thisDay.innerText += ' Lunedì';
// } else if (dayName === 2) {
// 	thisDay.innerText += ' Martedì';
// } else if (dayName === 3) {
// 	thisDay.innerText += ' Mercoledì';
// } else if (dayName === 4) {
// 	thisDay.innerText += ' Giovedì';
// } else if (dayName === 5) {
// 	thisDay.innerText += ' Venerdì';
// } else {
// 	thisDay.innerText += ' Sabato';
// }

switch (dayName) {
	case 0:
		thisDay.innerText += 'Domenica';
		break;

	case 1:
		thisDay.innerText += 'Lunedì';
		break;

	case 2:
		thisDay.innerText += 'Martedì';
		break;

	case 3:
		thisDay.innerText += 'Mercoledì';
		break;

	case 4:
		thisDay.innerText += 'Giovedì';
		break;

	case 5:
		thisDay.innerText += 'Venerdì';
		break;

	case 6:
		thisDay.innerText += 'Sabato';
		break;
}

let num1 = 4;
let num2 = 15;
let num3 = 21;
const sequence = document.getElementById('sequence');

switch (true) {
	case num1 > num2 && num2 > num3:
		sequence.innerText += num1 + ', ' + num2 + ', ' + num3;
		break;

	case num1 > num3 && num3 > num2:
		sequence.innerText += num1 + ', ' + num3 + ', ' + num2;
		break;

	case num2 > num1 && num1 > num3:
		sequence.innerText += num2 + ', ' + num1 + ', ' + num3;
		break;

	case num2 > num3 && num3 > num1:
		sequence.innerText += num2 + ', ' + num3 + ', ' + num1;
		break;

	case num3 > num1 && num1 > num2:
		sequence.innerText += num3 + ', ' + num1 + ', ' + num2;
		break;

	default: // Si usa il default case quando si vuol che lo switch esegua comunque un'operazione anche se nessuna delle condizioni nei case è true
		sequence.innerText += num3 + ', ' + num2 + ', ' + num1;
		break;
}

//WHILE
const numberList = document.getElementById('numberList');
let stop = 1;

while (stop < 11) {
	numberList.innerHTML += '<li>' + stop + '</li>';
	stop++;
}

// DO-WHILE
const numberList2 = document.getElementById('numberList2');
let stop2 = 11;

do {
	numberList2.innerHTML += '<li>' + stop2 + '</li>';
	stop2++;
} while (stop2 < 11);

// FOR
const numberList3 = document.getElementById('numberList3');

for (let i = 1; i <= 11; i++) {
	numberList3.innerHTML += '<li>' + i + '</li>';
}

// Iterazione di un array
const listStudents = [
	'Francesca',
	'Pietro',
	'Nicolò',
	'Marzo Z.',
	'Andrea',
	'Federico',
	'Diana',
	'Yuri',
	'Francesco',
];
const studentList = document.getElementById('studentList');

for (let i = 0; i < listStudents.length; i++) {
	studentList.innerHTML += '<li class="list">' + listStudents[i] + '</li>';
}

// Iterazione array di oggetti
const usersList = document.getElementById('usersList');
const usersTotal = document.getElementById('usersTotal');

const users = [
	{
		name: 'Mario',
		surname: 'Rossi',
		age: 25,
		email: 'mario@rossi.com',
	},
	{
		name: 'Aldo',
		surname: 'Bianchi',
		age: 31,
		email: 'aldo@bianchi.com',
	},
	{
		name: 'Maria',
		surname: 'Verdi',
		age: 30,
		email: 'maria@verdi.com',
	},
	{
		name: 'Giovanna',
		surname: 'Neri',
		age: 21,
		email: 'giovanna@neri.com',
	},
	{
		name: 'Paolino',
		surname: 'Paperino',
		age: 90,
		email: 'paolino@paperino.com',
	},
	{
		name: 'zio',
		surname: 'Paperone',
		age: 150,
		email: 'zio@paperone.com',
	},
];

for (let i = 0; i < users.length; i++) {
	usersList.innerHTML +=
		'<tr><td>' +
		users[i].name +
		'</td><td>' +
		users[i].surname +
		'</td><td>' +
		users[i].age +
		'</td><td>' +
		users[i].email +
		'</td></tr>';
}

usersTotal.innerText = 'Totale utenti: ' + users.length;

const filteredList = document.getElementById('filteredList');
const filteredTotal = document.getElementById('filteredTotal');
let totalFiltered = 0;

for (let i = 0; i < users.length; i++) {
	if (users[i].age > 30) {
		totalFiltered++; // Variabile numerica che conta il numero di volte che la condizione dell'if è ttrue
		filteredList.innerHTML +=
			'<tr><td>' +
			users[i].name +
			'</td><td>' +
			users[i].surname +
			'</td><td>' +
			users[i].age +
			'</td><td>' +
			users[i].email +
			'</td></tr>';
	}
}

filteredTotal.innerText = 'Totale utenti: ' + totalFiltered;

// Somma array numerico
const numbersArray = [1, 8, 15, 7, 22, 41, 3];
const sumArray = document.getElementById('sumArray');
let finalSum = 0;

for (let i = 0; i < numbersArray.length; i++) {
	finalSum += numbersArray[i];
}

sumArray.innerText = "Il totale dei numeri contenuti nell'array è " + finalSum;
if (finalSum > 100) {
	sumArray.innerText += ' - il totale è superiore a 100';
} else {
	sumArray.innerText += ' - il totale è inferiore a 100';
}

const newArray = [];

for (let i = 1; i < 11; i++) {
	newArray.push(i);
}

console.log(newArray);

newArray.pop();

console.log(newArray);
