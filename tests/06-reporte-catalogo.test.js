const test = require("node:test");
const assert = require("node:assert/strict");
const { reporteDeCatalogo } = require("../ejercicios/06-reporte-catalogo");
const { codigoSinComentarios } = require("./utilidades");

test("arma el reporte de un catálogo con referencias repetidas", () => {
  const productos = [
    { referencia: "MR-1", categoria: "Café" },
    { referencia: "MR-1", categoria: "Café" },
    { referencia: "MR-2", categoria: "Panela" },
  ];
  assert.deepEqual(
    reporteDeCatalogo(productos),
    { totalProductos: 3, referenciasUnicas: 2, porCategoria: { Café: 2, Panela: 1 } },
    "reporteDeCatalogo(...) debería retornar { totalProductos: 3, referenciasUnicas: 2, porCategoria: { Café: 2, Panela: 1 } }"
  );
});

test("un catálogo sin repetidos y con un producto sin categoría", () => {
  const productos = [
    { referencia: "MR-3", categoria: "Cacao" },
    { referencia: "MR-4" },
  ];
  assert.deepEqual(
    reporteDeCatalogo(productos),
    { totalProductos: 2, referenciasUnicas: 2, porCategoria: { Cacao: 1, Otros: 1 } },
    "reporteDeCatalogo(...) debería retornar { totalProductos: 2, referenciasUnicas: 2, porCategoria: { Cacao: 1, Otros: 1 } }"
  );
});

test("un catálogo vacío", () => {
  assert.deepEqual(
    reporteDeCatalogo([]),
    { totalProductos: 0, referenciasUnicas: 0, porCategoria: {} },
    "reporteDeCatalogo([]) debería retornar { totalProductos: 0, referenciasUnicas: 0, porCategoria: {} }"
  );
});

test("importa con require las funciones de los ejercicios 02 y 03", () => {
  const codigo = codigoSinComentarios("06-reporte-catalogo.js");
  assert.match(codigo, /require\(\s*["']\.\/02-contar-categorias(\.js)?["']\s*\)/, 'Tu código debería importar el ejercicio 02 con require("./02-contar-categorias")');
  assert.match(codigo, /require\(\s*["']\.\/03-sin-repetir(\.js)?["']\s*\)/, 'Tu código debería importar el ejercicio 03 con require("./03-sin-repetir")');
});

test("reutiliza contarCategorias y referenciasSinRepetir", () => {
  const codigo = codigoSinComentarios("06-reporte-catalogo.js");
  for (const funcion of ["contarCategorias", "referenciasSinRepetir"]) {
    assert.match(codigo, new RegExp(funcion + "\\s*\\("), "Tu código debería llamar a " + funcion + "(...) en vez de repetir ciclos");
  }
});
