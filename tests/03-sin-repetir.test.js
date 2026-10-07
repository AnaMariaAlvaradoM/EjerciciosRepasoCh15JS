const test = require("node:test");
const assert = require("node:assert/strict");
const { referenciasSinRepetir } = require("../ejercicios/03-sin-repetir");
const { codigoSinComentarios } = require("./utilidades");

test("quita las referencias repetidas y conserva el orden", () => {
  assert.deepEqual(
    referenciasSinRepetir(["MR-1", "MR-2", "MR-1", "MR-3"]),
    ["MR-1", "MR-2", "MR-3"],
    'referenciasSinRepetir(["MR-1", "MR-2", "MR-1", "MR-3"]) debería retornar ["MR-1", "MR-2", "MR-3"]'
  );
});

test("si no hay repetidas retorna las mismas", () => {
  assert.deepEqual(referenciasSinRepetir(["MR-4", "MR-5"]), ["MR-4", "MR-5"], 'referenciasSinRepetir(["MR-4", "MR-5"]) debería retornar ["MR-4", "MR-5"]');
});

test("si todas son iguales queda una sola", () => {
  assert.deepEqual(referenciasSinRepetir(["MR-7", "MR-7", "MR-7"]), ["MR-7"], 'referenciasSinRepetir(["MR-7", "MR-7", "MR-7"]) debería retornar ["MR-7"]');
});

test("no modifica el arreglo original", () => {
  const original = ["MR-1", "MR-1", "MR-2"];
  const resultado = referenciasSinRepetir(original);
  assert.ok(Array.isArray(resultado), "referenciasSinRepetir(...) debería retornar un arreglo nuevo");
  assert.deepEqual(original, ["MR-1", "MR-1", "MR-2"], "El arreglo original no debería cambiar (crea uno nuevo)");
});

test("si no recibe un arreglo retorna []", () => {
  assert.deepEqual(referenciasSinRepetir("MR-1"), [], 'referenciasSinRepetir("MR-1") debería retornar [] (revisa con Array.isArray)');
});

test("lo resuelve sin usar Set", () => {
  assert.deepEqual(referenciasSinRepetir(["A", "B", "A"]), ["A", "B"], 'referenciasSinRepetir(["A", "B", "A"]) debería retornar ["A", "B"]');
  assert.doesNotMatch(codigoSinComentarios("03-sin-repetir.js"), /new\s+Set\s*\(/, "Tu código no debería usar Set (es la restricción de la entrevista)");
});
