const test = require("node:test");
const assert = require("node:assert/strict");
const { etiquetasDePedidos } = require("../ejercicios/05-etiquetas-pedidos");

test("etiqueta los primeros 5 pedidos", () => {
  assert.deepEqual(
    etiquetasDePedidos(5),
    ["1", "2", "Regalo", "4", "Envío gratis"],
    'etiquetasDePedidos(5) debería retornar ["1", "2", "Regalo", "4", "Envío gratis"] (¿los números van como texto?)'
  );
});

test("el pedido 15 recibe regalo y envío gratis", () => {
  const etiquetas = etiquetasDePedidos(15);
  assert.equal(etiquetas.length, 15, "etiquetasDePedidos(15) debería tener 15 etiquetas");
  assert.equal(etiquetas[14], "Regalo y envío gratis", 'La etiqueta del pedido 15 debería ser "Regalo y envío gratis" (revisa el orden de tus if)');
});

test("revisa varios pedidos hasta el 30", () => {
  const etiquetas = etiquetasDePedidos(30);
  assert.equal(etiquetas[8], "Regalo", 'El pedido 9 debería ser "Regalo"');
  assert.equal(etiquetas[9], "Envío gratis", 'El pedido 10 debería ser "Envío gratis"');
  assert.equal(etiquetas[10], "11", 'El pedido 11 debería ser "11"');
  assert.equal(etiquetas[29], "Regalo y envío gratis", 'El pedido 30 debería ser "Regalo y envío gratis"');
});

test("con 0 pedidos retorna []", () => {
  assert.deepEqual(etiquetasDePedidos(0), [], "etiquetasDePedidos(0) debería retornar []");
});

test("con una cantidad negativa retorna []", () => {
  assert.deepEqual(etiquetasDePedidos(-3), [], "etiquetasDePedidos(-3) debería retornar []");
});
