/*
let quien = ["Mi gato ", "Mi madre ", "Mi hijo ", "Mi vecino "];
let accion = ["se comio ", " ha perdido ", " ha roto ", " ha escondido "];
let que = [" mis ejercicios ", "mi telefono ", " mi tarea ", " mi libro "];
let cuando = [
  " mientras paseaba ",
  " cuando estaba dormido",
  " porque no le gustaba",
  " cuando estaba jugando",
  " porque estaba aburrido",
];
function generarUnaExcusa() {
  let quienIndex = Math.floor(Math.random() * quien.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let queIndex = Math.floor(Math.random() * que.length);
  let cuandoIndex = Math.floor(Math.random() * cuando.length);

  let excusa =
    quien[quienIndex] +
    accion[accionIndex] +
    que[queIndex] +
    cuando[cuandoIndex];
  document.getElementById("excusa").innerHTML = excusa;
}*/
let quien = ["Mi gato ", "Mi madre ", "Mi hijo ", "Mi vecino "];
let accion = ["se comio ", " ha perdido ", " ha roto ", " ha escondido "];
let que = [" mis ejercicios ", "mi telefono ", " mi tarea ", " mi libro "];
let cuando = [
  " mientras paseaba ",
  " cuando estaba dormido",
  " porque no le gustaba",
  " cuando estaba jugando",
  " porque estaba aburrido",
];

function generarUnaExcusa() {
  let quienIndex = Math.floor(Math.random() * quien.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let queIndex = Math.floor(Math.random() * que.length);
  let cuandoIndex = Math.floor(Math.random() * cuando.length);

  let excusa =
    quien[quienIndex] +
    accion[accionIndex] +
    que[queIndex] +
    cuando[cuandoIndex];
  document.getElementById("excusa").innerHTML = excusa;
}

function aumentarCadencia() {
  let excusaElement = document.getElementById("excusa");
  let currentDuration = parseFloat(getComputedStyle(excusaElement).animationDuration);
  excusaElement.style.animationDuration = (currentDuration - 0.5) + 's';
}

function disminuirCadencia() {
  let excusaElement = document.getElementById("excusa");
  let currentDuration = parseFloat(getComputedStyle(excusaElement).animationDuration);
  excusaElement.style.animationDuration = (currentDuration + 0.5) + 's';
}

document.body.onload = function() {
  generarUnaExcusa();
  let aumentarButton = document.createElement("button");
  aumentarButton.innerHTML = "Aumentar Cadencia";
  aumentarButton.onclick = aumentarCadencia;
  document.body.appendChild(aumentarButton);

  let disminuirButton = document.createElement("button");
  disminuirButton.innerHTML = "Disminuir Cadencia";
  disminuirButton.onclick = disminuirCadencia;
  document.body.appendChild(disminuirButton);
};

