function calcularSumaCadena(cadena) {
    if (esCadenaVacia(cadena)) {
      return 0;
    }
  
    let delimitadores = obtenerDelimitadores(cadena);
    let cadenaNumeros = extraerCadenaNumeros(cadena, delimitadores);
  
    const numeros = dividirCadenaEnNumeros(cadenaNumeros, delimitadores);
  
    return sumarNumeros(numeros);
  }
  
  function esCadenaVacia(cadena) {
    return cadena.length === 0;
  }
  
  function obtenerDelimitadores(cadena) {
    if (cadena.startsWith("//")) {
      const delimitadorEspecificado = cadena[3];
      return new RegExp(`[${delimitadorEspecificado},-]`);
    }
    return /[,-]/;
  }
  
  function extraerCadenaNumeros(cadena, delimitadores) {
    if (cadena.startsWith("//")) {
      return cadena.substring(6);
    }
    return cadena;
  }
  
  function dividirCadenaEnNumeros(cadenaNumeros, delimitadores) {
    return cadenaNumeros.split(delimitadores);
  }
  
  function sumarNumeros(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      const numero = parseInt(numeros[i]);
      if (numero <= 1000) {
        suma += numero;
      }
    }
    return suma;
  }
  
  export default calcularSumaCadena;