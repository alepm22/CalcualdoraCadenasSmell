import calcularSumaCadena from "./calculadora.js";

describe("Sumar digitos", () => {
  it("Si es vacia la cadena debe retornar 0", () => {
    expect(calcularSumaCadena("")).toEqual(0);
  });

  it("Si la cadena recibe un numero debe retornar el mismo numero", () => {
    expect(calcularSumaCadena("1")).toEqual(1);
  });

  it("Si la cadena recibe 2 numeros debe retornar la suma de los nuemeros", () => {
    expect(calcularSumaCadena("1,4")).toEqual(5);
  });

});

