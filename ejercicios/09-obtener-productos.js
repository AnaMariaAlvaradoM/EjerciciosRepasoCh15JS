// ============================================================
// Ejercicio 09 · APIs · Traer el catálogo con fetch
// ============================================================
// El catálogo de Mercado Raíz ahora vive en una API. La app
// debe pedirlo y, si algo sale mal, no romperse.
//
// Crea la función ASÍNCRONA obtenerProductos(url) que:
//   - Pida la url con fetch (usa await).
//   - Si la respuesta NO es exitosa (respuesta.ok es false),
//     retorne [].
//   - Si es exitosa, retorne los datos (await respuesta.json()).
//   - Si fetch falla (sin internet, servidor caído), atrape el
//     error con try/catch y retorne [].
//
// Ejemplos (con la API respondiendo):
//   await obtenerProductos("https://api.mercadoraiz.test/productos")
//     → [{ nombre: "Café de Huila", precio: 32000, stock: 10 }, ...]
//   Con un 404 → []
//   Sin conexión → []
//
// 💡 Los tests NO usan internet: reemplazan fetch por uno de
// mentiras que responde lo que el test necesita. Tú escribe
// tu función como si la API fuera real.
//
// Pista: la palabra async va antes de function, y todo lo que
// puede fallar va dentro del bloque try { }.
//
// 🎤 Pregunta de entrevista (para pensar, no se califica):
//   ¿Por qué fetch NO lanza un error cuando la API responde 404?
// ============================================================

function obtenerProductos(url) {
  // Tu código aquí
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { obtenerProductos };
