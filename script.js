const textos = [
  "bandalos chinos.html",
  "luis.html",
  "jonatanleandoer96.html",
  "pete sampras.html",
  "pacifica.html",
  "chapi.html",
  "casa del arbol.html",
  "theo y simon.html",
  "tango astral.html",
  "anabella cartolano.html",
  "erica.html",
  "chechi.html",
  "king krule.html",
  "el principe idiota.html",
  "lara91k.html",
  "winona riders.html",
  "mi amigo invensible.html",
  "diosque.html"
];

console.log(textos);

function abrirArchivoAleatorio() {
  if (textos.length === 0) {
      alert("No hay archivos disponibles.");
      return;
  }

  let randomFile = textos[Math.floor(Math.random() * textos.length)];
  console.log("Ruta seleccionada: " + randomFile);
  
  // Ahora redirige correctamente dentro de la carpeta "textos"
  window.location.href = "/textos/" + randomFile;
}

function activarModoOscuro() {
  document.body.classList.toggle("modo-oscuro");
}
