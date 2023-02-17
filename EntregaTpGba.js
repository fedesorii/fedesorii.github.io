
// Boton "Experiencia"
let showExp_btn = document.getElementById('showExp_btn');
let hideExpC = document.getElementById('showExp');
showExp_btn.addEventListener('click', toggleTextExp)

function toggleTextExp() {
  hideExpC.classList.toggle('showExpC');
}

// Boton "Educacion"
let showEdu_btn = document.getElementById('showEdu_btn');
let hideEduC = document.getElementById('showEdu');
showEdu_btn.addEventListener('click', toggleTextEdu)

function toggleTextEdu() {
  hideEduC.classList.toggle('showEduC');
}

// Boton "Idiomas"
let showIdi_btn = document.getElementById('showIdi_btn');
let hideIdiC = document.getElementById('showIdi');
showIdi_btn.addEventListener('click', toggleTextIdi)

function toggleTextIdi() {
  hideIdiC.classList.toggle('showIdiC');
}

// Boton "Habilidades"
let showHab_btn = document.getElementById('showHab_btn');
let hideHabC = document.getElementById('showHab');
showHab_btn.addEventListener('click', toggleTextHab)

function toggleTextHab() {
  hideHabC.classList.toggle('showHabC');
}