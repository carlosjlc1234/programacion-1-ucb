function mostrarNombre() {
  const nombre = document.getElementById("nombres").value;
  const mensaje = document.getElementById("mensaje");

  if (nombre.trim() === "") {
    mensaje.textContent = "⚠️ Por favor, escribe tu nombre.";
  } else {
    mensaje.textContent = "Hola, " + nombre + " 👋";
  }
}

var lista = [];
function InsertarLista() {
  var valorAleatorio = Math.floor(Math.random() * 10);
  const resultado = document.getElementById("resultado");

  lista.push(valorAleatorio);

  // Crear nuevo botón
  const nuevoBoton = document.createElement("button");
  nuevoBoton.classList.add("boton-lista");
  nuevoBoton.textContent = valorAleatorio;

  // Agregar al contenedor
  resultado.appendChild(nuevoBoton);

  // Forzar animación CSS
  setTimeout(() => {
    nuevoBoton.classList.add("visible");
  }, 10);
}

function EliminarLista() {
  var valor = prompt("Ingrese el número que desea eliminar de la lista:");

  if (valor === null || valor.trim() === "") {
    alert("No se ingresó ningún valor.");
    return;
  }

  valor = parseInt(valor);

  // Filtrar lista quitando todas las ocurrencias
  lista = lista.filter(item => item !== valor);

  // Refrescar contenedor
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  lista.forEach(num => {
    const boton = document.createElement("button");
    boton.classList.add("boton-lista");
    boton.textContent = num;
    resultado.appendChild(boton);
    setTimeout(() => {
      boton.classList.add("visible");
    }, 10);
  });
}

