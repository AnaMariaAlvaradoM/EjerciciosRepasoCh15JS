const test = require("node:test");
const assert = require("node:assert/strict");
const { contarCategorias } = require("../ejercicios/02-contar-categorias");

test("cuenta los productos de cada categoría", () => {
  const productos = [{ categoria: "Café" }, { categoria: "Café" }, { categoria: "Panela" }];
  assert.deepEqual(contarCategorias(productos), { Café: 2, Panela: 1 }, "contarCategorias(...) debería retornar { Café: 2, Panela: 1 }");
});

test("un producto sin categoría cuenta en Otros", () => {
  const productos = [{ nombre: "Mochila" }, { categoria: "Café" }];
  assert.deepEqual(contarCategorias(productos), { Otros: 1, Café: 1 }, "contarCategorias(...) debería retornar { Otros: 1, Café: 1 }");
});

test("una sola categoría repetida varias veces", () => {
  const productos = [
    { categoria: "Artesanías" },
    { categoria: "Artesanías" },
    { categoria: "Artesanías" },
    { categoria: "Artesanías" },
  ];
  assert.deepEqual(contarCategorias(productos), { Artesanías: 4 }, "contarCategorias(...) debería retornar { Artesanías: 4 } (¿sumas 1 cuando la clave ya existe?)");
});

test("un catálogo completo con varias categorías", () => {
  const productos = [
    { referencia: "MR-1", categoria: "Café" },
    { referencia: "MR-2", categoria: "Cacao" },
    { referencia: "MR-3", categoria: "Café" },
    { referencia: "MR-4" },
    { referencia: "MR-5", categoria: "Cacao" },
    { referencia: "MR-6", categoria: "Café" },
  ];
  assert.deepEqual(contarCategorias(productos), { Café: 3, Cacao: 2, Otros: 1 }, "contarCategorias(...) debería retornar { Café: 3, Cacao: 2, Otros: 1 }");
});

test("un arreglo vacío retorna un objeto vacío", () => {
  assert.deepEqual(contarCategorias([]), {}, "contarCategorias([]) debería retornar {}");
});
