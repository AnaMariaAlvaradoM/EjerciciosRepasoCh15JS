const test = require("node:test");
const assert = require("node:assert/strict");
const { ProductoEnOferta } = require("../ejercicios/08-herencia-oferta");
const { Producto } = require("../ejercicios/07-clase-producto");
const { codigoSinComentarios } = require("./utilidades");

test("un producto en oferta también es un Producto", () => {
  const panela = new ProductoEnOferta("Panela orgánica", 10000, 8, 20);
  assert.ok(panela instanceof Producto, "Un ProductoEnOferta debería ser instancia de Producto (¿usaste extends?)");
  assert.equal(panela.nombre, "Panela orgánica", "panela.nombre debería ser \"Panela orgánica\" (¿llamaste a super?)");
  assert.equal(panela.stock, 8, "panela.stock debería ser 8");
  assert.equal(panela.descuento, 20, "panela.descuento debería ser 20");
});

test("precioConIva aplica el descuento sobre el precio con IVA", () => {
  assert.equal(new ProductoEnOferta("Panela orgánica", 10000, 8, 20).precioConIva(), 9520, "precioConIva() con precio 10000 y 20% debería retornar 9520");
  assert.equal(new ProductoEnOferta("Mochila wayuu", 180000, 2, 15).precioConIva(), 182070, "precioConIva() con precio 180000 y 15% debería retornar 182070");
});

test("el descuento solo vale entre 1 y 90", () => {
  assert.equal(new ProductoEnOferta("A", 10000, 1, 90).descuento, 90, "Un descuento de 90 debería guardarse (revisa si usaste <=)");
  assert.equal(new ProductoEnOferta("B", 10000, 1, 1).descuento, 1, "Un descuento de 1 debería guardarse (revisa si usaste >=)");
  assert.equal(new ProductoEnOferta("C", 10000, 1, 91).descuento, 0, "Un descuento de 91 debería guardarse como 0");
  assert.equal(new ProductoEnOferta("D", 10000, 1, 0).descuento, 0, "Un descuento de 0 debería guardarse como 0");
});

test("hereda vender() de Producto", () => {
  const panela = new ProductoEnOferta("Panela orgánica", 10000, 8, 20);
  assert.equal(panela.vender(3), true, "panela.vender(3) debería retornar true");
  assert.equal(panela.stock, 5, "Después de vender 3, el stock debería quedar en 5");
});

test("usa extends, super() y super.precioConIva()", () => {
  const codigo = codigoSinComentarios("08-herencia-oferta.js");
  assert.match(codigo, /class\s+ProductoEnOferta\s+extends\s+Producto\b/, "Tu clase debería heredar: class ProductoEnOferta extends Producto");
  assert.match(codigo, /super\s*\(/, "Tu constructor debería llamar a super(nombre, precio, stock)");
  assert.match(codigo, /super\.precioConIva\s*\(/, "Tu precioConIva() debería usar super.precioConIva() en vez de repetir la fórmula");
});
