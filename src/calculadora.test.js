import calcularSumaCadena from "./calculadora.js";

describe("Sumar digitos", () => {
  it("Si es vacia la cadena debe retornar 0", () => {
    expect(calcularSumaCadena("")).toEqual(0);
  });

  it("Si la cadena recibe un numero debe retornar el mismo numero", () => {
    expect(calcularSumaCadena("1")).toEqual(1);
  });

  it("Si la cadena recibe 2 numeros debe retornar la suma de los numeros", () => {
    expect(calcularSumaCadena("1,4")).toEqual(5);
  });

  
  it("Si la cadena recibe mas numeros debe retornar la suma de los numeros", () => {
    expect(calcularSumaCadena("1,4,1")).toEqual(6);
  });

  it("Si la cadena recibe mas numeros en un digito debe retornar la suma de los numeros", () => {
    expect(calcularSumaCadena("11,4,1")).toEqual(16);
  });

  it("Si la cadena recibe numeros separados por guiones y retorna la suma de los numeros", () => {
    expect(calcularSumaCadena("11-4-1")).toEqual(16);
  });

});

