// ============================================================
// Ejercicio 02 · Objetos · Contar por categoría
// ============================================================
// El equipo de compras quiere saber cuántos productos hay en
// cada categoría del catálogo.
//
// Crea la función contarCategorias(productos) que reciba un
// arreglo de productos y retorne un OBJETO donde cada clave es
// una categoría y su valor es cuántos productos tiene.
//
// Cada producto se ve así:
//   { referencia: "MR-001", nombre: "Café de Huila", categoria: "Café", precio: 32000, stock: 10 }
//
// Reglas:
//   - Si un producto no tiene categoria, cuenta en "Otros".
//   - Si el arreglo está vacío, retorna {}.
//
// Ejemplos:
//   contarCategorias([{ categoria: "Café" }, { categoria: "Café" }, { categoria: "Panela" }])
//     → { Café: 2, Panela: 1 }
//   contarCategorias([{ nombre: "Mochila" }]) → { Otros: 1 }
//   contarCategorias([])                       → {}
//
// Pista: empieza con un objeto vacío. Si la categoría ya existe
// como clave, súmale 1; si no, créala en 1.
//
// 🎤 Pregunta de entrevista (para pensar, no se califica):
//   ¿Por qué un objeto y no un arreglo para llevar las cuentas?
// ============================================================

function contarCategorias(productos) {
  // Tu código aquí
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { contarCategorias };
