const test = require("node:test");
const assert = require("node:assert/strict");
const { esCodigoEspejo } = require("../ejercicios/01-codigo-espejo");
const { codigoSinComentarios } = require("./utilidades");

test("un código que se lee igual al revés es espejo", () => {
  assert.equal(esCodigoEspejo("ana"), true, 'esCodigoEspejo("ana") debería retornar true');
  assert.equal(esCodigoEspejo("abba"), true, 'esCodigoEspejo("abba") debería retornar true (cantidad par de letras)');
});

test("ignora mayúsculas, espacios y guiones", () => {
  assert.equal(esCodigoEspejo("RAI-IAR"), true, 'esCodigoEspejo("RAI-IAR") debería retornar true (¿quitaste los guiones?)');
  assert.equal(esCodigoEspejo("Anita lava la tina"), true, 'esCodigoEspejo("Anita lava la tina") debería retornar true (¿quitaste espacios y pasaste a minúsculas?)');
});

test("un código que no se lee igual al revés no es espejo", () => {
  assert.equal(esCodigoEspejo("Mercado"), false, 'esCodigoEspejo("Mercado") debería retornar false');
});

test("si el código no es un string retorna false", () => {
  assert.equal(esCodigoEspejo(12321), false, "esCodigoEspejo(12321) debería retornar false (revisa con typeof)");
});

test("si queda vacío después de limpiarlo retorna false", () => {
  assert.equal(esCodigoEspejo("- -"), false, 'esCodigoEspejo("- -") debería retornar false');
});

test("lo resuelve sin usar reverse()", () => {
  assert.equal(esCodigoEspejo("oso"), true, 'esCodigoEspejo("oso") debería retornar true');
  assert.doesNotMatch(codigoSinComentarios("01-codigo-espejo.js"), /\.reverse\s*\(/, "Tu código no debería usar .reverse() (es la restricción de la entrevista)");
});
