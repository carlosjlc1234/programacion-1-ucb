// app.js
(function () {
  const $ = (sel) => document.querySelector(sel);

  const textInput  = $("#textInput");
  const btn        = $("#analyzeBtn");
  const outVowels  = $("#vowelsOut");
  const outWords   = $("#wordsOut");
  const outChars   = $("#charsOut");
  const statusBar  = $("#statusBar");
  const liveToggle = $("#liveToggle");
  const yearSpan   = $("#year");

  // Año en el footer
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Verificación: ¿existen las funciones en cadenas.js?
  function funcionesDisponibles() {
    return typeof ContarVocales === "function" &&
           typeof ContarPalabras === "function" &&
           typeof ContarCaracteres === "function";
  }

  function mostrarAdvertencia(si) {
    if (!statusBar) return;
    statusBar.hidden = !si;
    statusBar.classList.toggle("status--warning", si);
    statusBar.classList.toggle("status--ok", !si);
    if (!si) statusBar.innerHTML = "<strong>Listo:</strong> Funciones cargadas desde <code>cadenas.js</code>.";
  }

  // Ejecuta el análisis con el texto actual
  function analizar() {
    const texto = (textInput?.value ?? "");

    if (!funcionesDisponibles()) {
      mostrarAdvertencia(true);
      // Resetea resultados si no hay funciones
      outVowels.textContent = "0";
      outWords.textContent  = "0";
      outChars.textContent  = "0";
      return;
    }

    mostrarAdvertencia(false);

    try {
      // Invocamos TUS funciones definidas en cadenas.js
      const v = ContarVocales(texto);
      const p = ContarPalabras(texto);
      const c = ContarCaracteres(texto);

      outVowels.textContent = Number.isFinite(v) ? v : "0";
      outWords.textContent  = Number.isFinite(p) ? p : "0";
      outChars.textContent  = Number.isFinite(c) ? c : "0";
    } catch (err) {
      mostrarAdvertencia(true);
      console.error("Error al invocar funciones de cadenas.js:", err);
    }
  }

  // Eventos
  btn?.addEventListener("click", analizar);

  // Análisis en vivo opcional
  liveToggle?.addEventListener("change", () => {
    const on = liveToggle.checked;
    if (on) {
      textInput?.addEventListener("input", analizar);
      analizar();
    } else {
      textInput?.removeEventListener("input", analizar);
    }
  });

  // Intento inicial: si las funciones existen, mostramos OK
  if (funcionesDisponibles()) {
    mostrarAdvertencia(false);
  } else {
    mostrarAdvertencia(true);
  }
})();
