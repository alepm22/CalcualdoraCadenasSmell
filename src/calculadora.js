function calcularSumaCadena(cadena) {
    let suma = 0;
    let anchoCadena = cadena.length;
    let indice = 0;
    
    if (cadena.length === 0) {
      return 0;
    }
  
    if (cadena.length === 1) {
      return parseInt(cadena);
    }
  
    // Asegura que no se intente acceder a un índice fuera del rango
    while (indice < anchoCadena) {
      suma += parseInt(cadena[indice]);
      indice += 2;
    }
    
    return suma;
  }
  
  export default calcularSumaCadena;
  