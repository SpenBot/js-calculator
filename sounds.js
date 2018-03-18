
let buttons = document.getElementsByClassName('button')

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', ()=> document.getElementById('beep').play())
}
