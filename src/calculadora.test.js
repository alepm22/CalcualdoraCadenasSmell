import calcularSumaCadena from "./calculadora.js";

describe("Sumar digitos", () => {
  it("Si es vacia la cadena debe retornar 0", () => {
    expect(calcularSumaCadena("")).toEqual(0);
  });

  it("Si la cadena recibe u numero debe retornar el mismo numero", () => {
    expect(calcularSumaCadena("1")).toEqual(1);
  });

});

