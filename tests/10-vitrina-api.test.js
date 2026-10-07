const test = require("node:test");
const assert = require("node:assert/strict");
const { productosEnVitrina } = require("../ejercicios/10-vitrina-api");
const { codigoSinComentarios } = require("./utilidades");

const URL_API = "https://api.mercadoraiz.test/productos";

// Reemplaza fetch por uno de mentiras: no se usa internet
function respuestaFalsa(ok, status, cuerpo) {
  return async () => ({ ok, status, json: async () => cuerpo });
}

test("muestra solo los productos con stock y su precio final", async (t) => {
  t.mock.method(globalThis, "fetch", respuestaFalsa(true, 200, [
    { nombre: "Café de Huila", precio: 32000, stock: 10 },
    { nombre: "Mochila wayuu", precio: 180000, stock: 0 },
  ]));
  assert.deepEqual(
    await productosEnVitrina(URL_API),
    [{ nombre: "Café de Huila", precioFinal: 38080 }],
    'productosEnVitrina(url) debería retornar [{ nombre: "Café de Huila", precioFinal: 38080 }] (¿usaste await?)'
  );
});

test("un producto con stock 1 sí aparece", async (t) => {
  t.mock.method(globalThis, "fetch", respuestaFalsa(true, 200, [
    { nombre: "Bocadillo veleño", precio: 4500, stock: 1 },
  ]));
  assert.deepEqual(
    await productosEnVitrina(URL_API),
    [{ nombre: "Bocadillo veleño", precioFinal: 5355 }],
    'productosEnVitrina(url) debería retornar [{ nombre: "Bocadillo veleño", precioFinal: 5355 }] (revisa si usaste > 0)'
  );
});

test("varios productos disponibles conservan el orden", async (t) => {
  t.mock.method(globalThis, "fetch", respuestaFalsa(true, 200, [
    { nombre: "Cacao de Tumaco", precio: 26000, stock: 4 },
    { nombre: "Panela orgánica", precio: 10000, stock: 0 },
    { nombre: "Sombrero vueltiao", precio: 210000, stock: 2 },
  ]));
  assert.deepEqual(
    await productosEnVitrina(URL_API),
    [
      { nombre: "Cacao de Tumaco", precioFinal: 30940 },
      { nombre: "Sombrero vueltiao", precioFinal: 249900 },
    ],
    "productosEnVitrina(url) debería retornar los dos productos con stock y su precio con IVA"
  );
});

test("si la API falla retorna []", async (t) => {
  t.mock.method(globalThis, "fetch", respuestaFalsa(false, 500, { mensaje: "Error del servidor" }));
  assert.deepEqual(await productosEnVitrina(URL_API), [], "Si la API falla, productosEnVitrina(url) debería retornar []");
});

test("reutiliza obtenerProductos y la clase Producto", () => {
  const codigo = codigoSinComentarios("10-vitrina-api.js");
  assert.match(codigo, /await\s+obtenerProductos\s*\(/, "Tu código debería usar await obtenerProductos(url) (ejercicio 09)");
  assert.match(codigo, /new\s+Producto\s*\(/, "Tu código debería crear cada producto con new Producto(...) (ejercicio 07)");
  assert.match(codigo, /\.precioConIva\s*\(/, "Tu código debería pedir el precio con producto.precioConIva()");
});
