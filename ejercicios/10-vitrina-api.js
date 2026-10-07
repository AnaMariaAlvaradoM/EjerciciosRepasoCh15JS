// ============================================================
// Ejercicio 10 · Integrador · Vitrina con datos de la API
// ============================================================
// La vitrina de la página solo muestra productos disponibles,
// con su precio final. Aquí juntas TODO: módulos, API, clases
// y ciclos.
//
// Crea la función ASÍNCRONA productosEnVitrina(url) que:
//   1. Traiga los datos con tu obtenerProductos(url) (ej. 09).
//      ¡No olvides el await!
//   2. Por cada dato con stock MAYOR que 0, cree un
//      new Producto(nombre, precio, stock) (ej. 07).
//   3. Retorne un arreglo de objetos con esta forma:
//        { nombre: "...", precioFinal: <precioConIva()> }
//
// Si la API falla, obtenerProductos ya retorna [], así que tu
// función debería retornar [] sin hacer nada especial.
//
// Ejemplo (si la API responde estos datos):
//   [ { nombre: "Café de Huila", precio: 32000, stock: 10 },
//     { nombre: "Mochila wayuu", precio: 180000, stock: 0 } ]
//   → [ { nombre: "Café de Huila", precioFinal: 38080 } ]
//
// Pista: el precio final no se calcula aquí a mano: se lo
// pides a cada producto con producto.precioConIva().
//
// 🎤 Pregunta de entrevista (para pensar, no se califica):
//   ¿Qué recibes si olvidas el await antes de obtenerProductos?
// ============================================================

// Estas líneas traen tus funciones de los ejercicios 07 y 09
const { Producto } = require("./07-clase-producto");
const { obtenerProductos } = require("./09-obtener-productos");

function productosEnVitrina(url) {
  // Tu código aquí
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { productosEnVitrina };
