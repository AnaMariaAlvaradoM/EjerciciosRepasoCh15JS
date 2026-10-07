// ============================================================
// Ejercicio 05 · Condicionales + ciclos · Etiquetas de pedidos
// ============================================================
// Por aniversario, los pedidos numerados reciben una etiqueta:
//   - Múltiplo de 3 y de 5 → "Regalo y envío gratis"
//   - Solo múltiplo de 3   → "Regalo"
//   - Solo múltiplo de 5   → "Envío gratis"
//   - Ninguno              → el número como texto ("1", "2"…)
//
// Crea la función etiquetasDePedidos(cantidad) que retorne un
// arreglo con las etiquetas de los pedidos 1 hasta cantidad.
//
// Regla: si cantidad es 0 o negativa, retorna [].
//
// Ejemplos:
//   etiquetasDePedidos(5)
//     → ["1", "2", "Regalo", "4", "Envío gratis"]
//   etiquetasDePedidos(15)[14] → "Regalo y envío gratis"
//   etiquetasDePedidos(0)      → []
//
// Pista: el operador % te dice el residuo. Si n % 3 === 0,
// n es múltiplo de 3. Ojo con el ORDEN de tus if.
//
// 🎤 Pregunta de entrevista (para pensar, no se califica):
//   ¿Por qué importa el orden de los if en este ejercicio?
// ============================================================

function etiquetasDePedidos(cantidad) {
  // Tu código aquí
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { etiquetasDePedidos };
