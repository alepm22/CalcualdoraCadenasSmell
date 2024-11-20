function calcularSumaCadena(cadena) {
    if(cadena.length === 0){
      return 0;
    }
  
    let delimitadores = /[,-]/;
    let numerosCadena = cadena;
  
    if(cadena.startsWith("//")){
      const delimitadorEspesificado = cadena[3];
      delimitadores = new RegExp(`[${delimitadorEspesificado},-]`);
      numerosCadena = cadena.substring(6);
    }
  
    const numeros = numerosCadena.split(delimitadores);
  
    let suma = 0;
    for (let indice = 0; indice < numeros.length; indice++) {
      if(numeros[indice] <= 1000)
        suma += parseInt(numeros[indice]);
    }
  
    return suma;
  }
  
  export default calcularSumaCadena;