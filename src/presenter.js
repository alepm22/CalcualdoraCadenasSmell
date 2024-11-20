import calcularSumaCadenas from "./calculadora"; // Importa la función correcta

// Selección de elementos
const inputCadena = document.querySelector("#input-cadena");
const btnCalcular = document.querySelector("#btn-calcular");
const resultadoDiv = document.querySelector("#resultado-div");

// Agregar el evento al botón
btnCalcular.addEventListener("click", (event) => {
  event.preventDefault(); // Evita el comportamiento por defecto del botón

  const cadena = inputCadena.value.trim(); // Obtén y limpia el valor ingresado

  try {
    // Llama a la función calcularSumaCadenas
    const resultado = calcularSumaCadenas(cadena);
    resultadoDiv.innerHTML = `<p>Resultado: ${resultado}</p>`;
  } catch (error) {
    // Manejo de errores
    console.error("Error en calcularSumaCadenas:", error);
    resultadoDiv.innerHTML = "<p>Ocurrió un error al procesar la cadena.</p>";
  }
});
