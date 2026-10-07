const test = require("node:test");
const assert = require("node:assert/strict");
const { Producto } = require("../ejercicios/07-clase-producto");

test("el constructor guarda nombre, precio y stock", () => {
  const cafe = new Producto("Café de Huila", 32000, 10);
  assert.equal(cafe.nombre, "Café de Huila", "cafe.nombre debería ser \"Café de Huila\" (¿usaste this.nombre?)");
  assert.equal(cafe.precio, 32000, "cafe.precio debería ser 32000");
  assert.equal(cafe.stock, 10, "cafe.stock debería ser 10");
});

test("precioConIva suma el 19% y redondea", () => {
  assert.equal(new Producto("Café de Huila", 32000, 10).precioConIva(), 38080, "precioConIva() de un producto de 32000 debería retornar 38080");
  assert.equal(new Producto("Bocadillo", 4500, 3).precioConIva(), 5355, "precioConIva() de un producto de 4500 debería retornar 5355");
});

test("vender con stock suficiente descuenta y retorna true", () => {
  const cafe = new Producto("Café de Huila", 32000, 10);
  assert.equal(cafe.vender(4), true, "cafe.vender(4) debería retornar true");
  assert.equal(cafe.stock, 6, "Después de vender 4, el stock debería quedar en 6");
});

test("vender más de lo que hay no cambia el stock", () => {
  const cafe = new Producto("Café de Huila", 32000, 10);
  assert.equal(cafe.vender(20), false, "cafe.vender(20) debería retornar false");
  assert.equal(cafe.stock, 10, "El stock debería seguir en 10 (no restes si no alcanza)");
});

test("hayStock revisa el límite exacto y vender(0) no vende", () => {
  const cafe = new Producto("Café de Huila", 32000, 10);
  assert.equal(cafe.hayStock(10), true, "cafe.hayStock(10) debería retornar true (revisa si usaste >=)");
  assert.equal(cafe.hayStock(11), false, "cafe.hayStock(11) debería retornar false");
  assert.equal(cafe.vender(0), false, "cafe.vender(0) debería retornar false");
  assert.equal(cafe.stock, 10, "El stock debería seguir en 10");
});
