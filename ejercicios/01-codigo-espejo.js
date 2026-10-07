// ============================================================
// Ejercicio 01 · Strings · Códigos espejo
// ============================================================
// Mercado Raíz lanzó una promo: los cupones "espejo" (que se leen
// igual al derecho y al revés) dan 10% de descuento.
//
// Crea la función esCodigoEspejo(codigo) que retorne true si el
// código se lee igual en ambos sentidos y false si no.
//
// Reglas:
//   - No importan las mayúsculas: "Ana" es espejo.
//   - Se ignoran los espacios y los guiones (-).
//   - Si codigo no es un string, retorna false.
//   - Si después de limpiarlo queda vacío, retorna false.
//
// 🔒 Restricción de entrevista: NO uses .reverse()
//
// Ejemplos:
//   esCodigoEspejo("ana")          → true
//   esCodigoEspejo("RAI-IAR")      → true
//   esCodigoEspejo("Mercado")      → false
//   esCodigoEspejo(12321)          → false
//
// Pista: compara la primera letra con la última, la segunda con
// la penúltima… ¿hasta dónde necesitas llegar?
//
// 🎤 Pregunta de entrevista (para pensar, no se califica):
//   Si te prohíben reverse(), ¿qué otra estrategia usarías?
//   ¿Cuántas comparaciones necesitas como máximo?
// ============================================================

function esCodigoEspejo(codigo) {
  // Tu código aquí
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { esCodigoEspejo };
