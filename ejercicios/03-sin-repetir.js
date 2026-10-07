// ============================================================
// Ejercicio 03 · Arreglos · Referencias sin repetir
// ============================================================
// Al importar el inventario desde un Excel, algunas referencias
// quedaron repetidas.
//
// Crea la función referenciasSinRepetir(referencias) que retorne
// un arreglo NUEVO con cada referencia una sola vez, en el orden
// en que apareció por primera vez.
//
// Reglas:
//   - No modifiques el arreglo original.
//   - Si referencias no es un arreglo, retorna [].
//
// 🔒 Restricción de entrevista: NO uses Set
//
// Ejemplos:
//   referenciasSinRepetir(["MR-1", "MR-2", "MR-1", "MR-3"]) → ["MR-1", "MR-2", "MR-3"]
//   referenciasSinRepetir([])                                → []
//   referenciasSinRepetir("MR-1")                            → []
//
// Pista: arma un arreglo de resultado y, antes de agregar cada
// referencia, pregunta si ya está adentro con .includes().
//
// 🎤 Pregunta de entrevista (para pensar, no se califica):
//   ¿Por qué es mala idea modificar el arreglo que te pasan?
// ============================================================

function referenciasSinRepetir(referencias) {
  // Tu código aquí
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { referenciasSinRepetir };
