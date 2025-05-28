function checkEmail() {
  let email = document.querySelector('#emailField').value;
  if(!email.includes('@')) alert('Немає символа @');
  else if(!email.includes('.')) alert('Немає символа "крапка"');
  else alert('Все відмінно!')
}