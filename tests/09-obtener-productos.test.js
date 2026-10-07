const test = require("node:test");
const assert = require("node:assert/strict");
const { obtenerProductos } = require("../ejercicios/09-obtener-productos");
const { codigoSinComentarios } = require("./utilidades");

const URL_API = "https://api.mercadoraiz.test/productos";
const DATOS = [
  { nombre: "Café de Huila", precio: 32000, stock: 10 },
  { nombre: "Mochila wayuu", precio: 180000, stock: 0 },
];

// Reemplaza fetch por uno de mentiras: no se usa internet
function respuestaFalsa(ok, status, cuerpo) {
  return async () => ({ ok, status, json: async () => cuerpo });
}

async function llamarSinRomper(url) {
  try {
    return await obtenerProductos(url);
  } catch (error) {
    assert.fail("obtenerProductos lanzó un error (" + error.message + "): atrápalo con try/catch y retorna []");
  }
}

test("retorna los productos cuando la API responde bien", async (t) => {
  t.mock.method(globalThis, "fetch", respuestaFalsa(true, 200, DATOS));
  assert.deepEqual(await llamarSinRomper(URL_API), DATOS, "obtenerProductos(url) debería retornar los datos de la API (¿usaste await respuesta.json()?)");
});

test("le pide a fetch la url que recibe", async (t) => {
  const fetchFalso = t.mock.method(globalThis, "fetch", respuestaFalsa(true, 200, DATOS));
  await llamarSinRomper(URL_API);
  assert.equal(fetchFalso.mock.callCount(), 1, "obtenerProductos(url) debería llamar a fetch una vez");
  assert.equal(fetchFalso.mock.calls[0].arguments[0], URL_API, "fetch debería recibir la misma url que recibe tu función");
});

test("si la API responde 404 retorna []", async (t) => {
  t.mock.method(globalThis, "fetch", respuestaFalsa(false, 404, { mensaje: "No encontrado" }));
  assert.deepEqual(await llamarSinRomper(URL_API), [], "Con un 404 obtenerProductos(url) debería retornar [] (revisa respuesta.ok)");
});

test("si no hay conexión retorna []", async (t) => {
  t.mock.method(globalThis, "fetch", async () => {
    throw new TypeError("fetch failed");
  });
  assert.deepEqual(await llamarSinRomper(URL_API), [], "Sin conexión obtenerProductos(url) debería retornar []");
});

test("usa async, await y try/catch", () => {
  const codigo = codigoSinComentarios("09-obtener-productos.js");
  assert.match(codigo, /async\s+function\s+obtenerProductos/, "Tu función debería ser async: async function obtenerProductos(url)");
  assert.match(codigo, /\bawait\s+fetch\s*\(/, "Tu código debería usar await fetch(url)");
  assert.match(codigo, /\btry\s*\{[\s\S]*\}\s*catch\b/, "Tu código debería usar try { ... } catch (error) { ... }");
});
