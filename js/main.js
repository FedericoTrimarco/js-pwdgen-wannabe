/* 
PASSWORD GENERATOR
*/

// NOME UTENTE
const nameUser = prompt('Qual è il tuo nome?');
console.log(nameUser, typeof nameUser);

// CONGNOME UTENTE
const surnameUser = prompt('Qual è il tuo cognome?');
console.log(surnameUser, typeof surnameUser);

// COLORE PREFERITO
const color = prompt('Qual è il tuo colore preferito?');
console.log(color, typeof color);

// PASSWORD
const password = nameUser + surnameUser + color;
console.log(password);

// RISULTATO A SCHERMO
document.getElementById('result').innerHTML = `${password}23`;