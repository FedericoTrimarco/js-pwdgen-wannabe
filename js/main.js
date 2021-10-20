/* 
PASSWORD GENERATOR
*/

// NOME UTENTE
const nameUser = prompt('Qual è il tuo nome?');

// CONGNOME UTENTE
const surnameUser = prompt('Qual è il tuo cognome?');

// COLORE PREFERITO
const color = prompt('Qual è il tuo colore preferito?');

// PASSWORD
const password = nameUser + surnameUser + color;

// RISULTATO A SCHERMO
document.getElementById('result').innerHTML = `${password}23`;