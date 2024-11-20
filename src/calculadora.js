function calcularSumaCadena(cadena) {
    if(cadena.length === 0){
      return 0;
    }
  
    const numeros = cadena.split(",");
  
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += parseInt(numeros[i]);
    }
  
    return suma;
  }
  
  export default calcularSumaCadena;