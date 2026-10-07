const test = require("node:test");
const assert = require("node:assert/strict");
const { comboExacto } = require("../ejercicios/04-combo-exacto");

test("encuentra los dos productos que suman el bono", () => {
  assert.deepEqual(comboExacto([12000, 30000, 18000, 25000], 30000), [0, 2], "comboExacto([12000, 30000, 18000, 25000], 30000) debería retornar [0, 2]");
});

test("dos productos con el mismo precio también sirven", () => {
  assert.deepEqual(comboExacto([15000, 15000], 30000), [0, 1], "comboExacto([15000, 15000], 30000) debería retornar [0, 1]");
});

test("si ningún par suma el bono retorna null", () => {
  assert.equal(comboExacto([10000, 20000], 50000), null, "comboExacto([10000, 20000], 50000) debería retornar null");
});

test("no usa el mismo producto dos veces", () => {
  assert.equal(comboExacto([15000, 40000], 30000), null, "comboExacto([15000, 40000], 30000) debería retornar null (¿tu segundo ciclo empieza en i + 1?)");
});

test("si hay varios combos retorna el primero", () => {
  assert.deepEqual(comboExacto([20000, 10000, 5000, 25000], 30000), [0, 1], "comboExacto([20000, 10000, 5000, 25000], 30000) debería retornar [0, 1]");
});

test("con un catálogo vacío retorna null", () => {
  assert.equal(comboExacto([], 30000), null, "comboExacto([], 30000) debería retornar null");
});
