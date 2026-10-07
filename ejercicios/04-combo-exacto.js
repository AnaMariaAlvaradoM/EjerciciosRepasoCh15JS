// ============================================================
// Ejercicio 04 · Ciclos anidados · Combo exacto
// ============================================================
// Un cliente tiene un bono y quiere gastarlo EXACTO comprando
// dos productos distintos.
//
// Crea la función comboExacto(precios, bono) que retorne las
// posiciones [i, j] de los dos productos cuyos precios suman
// exactamente el bono.
//
// Reglas:
//   - Deben ser dos posiciones distintas, con i menor que j.
//   - Si hay varios combos, retorna el primero que encuentres
//     recorriendo i desde 0 y, para cada i, j desde i + 1.
//   - Si no hay ningún combo, retorna null.
//
// Ejemplos:
//   comboExacto([12000, 30000, 18000, 25000], 30000) → [0, 2]
//   comboExacto([15000, 15000], 30000)               → [0, 1]
//   comboExacto([10000, 20000], 50000)               → null
//
// Pista: un ciclo para el primer producto y, adentro, otro ciclo
// para el segundo, que empiece en la posición siguiente.
//
// 🎤 Pregunta de entrevista (para pensar, no se califica):
//   Tu solución usa un ciclo dentro de otro. Si el catálogo
//   tuviera un millón de precios, ¿qué pasaría?
// ============================================================

function comboExacto(precios, bono) {
  // Tu código aquí
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { comboExacto };
