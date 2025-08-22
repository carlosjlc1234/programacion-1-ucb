// cadenas.js
// Aquí definimos las funciones globales que serán invocadas por app.js

// Contar cuántas vocales hay en la palabra o texto
function ContarVocales(palabra) {
  if (typeof palabra !== "string") return 0;
  const coincidencias = palabra.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g);
  return coincidencias ? coincidencias.length : 0;
}

// Contar cuántas palabras hay en un texto
function ContarPalabras(texto) {
  if (typeof texto !== "string") return 0;
  // Eliminamos espacios múltiples y trim para evitar vacíos
  const limpio = texto.trim();
  if (limpio === "") return 0;
  return limpio.split(/\s+/).length;
}

// Contar cuántos caracteres (incluyendo espacios) tiene el texto
function ContarCaracteres(texto) {
  if (typeof texto !== "string") return 0;
  return texto.length;
}
