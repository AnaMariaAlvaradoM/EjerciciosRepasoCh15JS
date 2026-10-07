// ============================================================
// Ejercicio 06 · Módulos · Reporte del catálogo (integrador)
// ============================================================
// La gerente quiere un reporte rápido del catálogo. No vas a
// escribir ciclos nuevos para contar: vas a REUTILIZAR tus
// funciones de los ejercicios 02 y 03.
//
// Paso 1: arriba de la función, importa con require:
//   - contarCategorias      desde "./02-contar-categorias"
//   - referenciasSinRepetir desde "./03-sin-repetir"
//
// Paso 2: crea la función reporteDeCatalogo(productos) que
// retorne un objeto con:
//   - totalProductos:    cuántos productos llegaron
//   - referenciasUnicas: cuántas referencias distintas hay
//   - porCategoria:      el resultado de contarCategorias
//
// Ejemplo:
//   reporteDeCatalogo([
//     { referencia: "MR-1", categoria: "Café" },
//     { referencia: "MR-1", categoria: "Café" },
//     { referencia: "MR-2", categoria: "Panela" },
//   ])
//   → { totalProductos: 3, referenciasUnicas: 2, porCategoria: { Café: 2, Panela: 1 } }
//
// Pista: arma primero un arreglo solo con las referencias y
// pásaselo a referenciasSinRepetir. ¿Qué propiedad te dice
// cuántas quedaron?
//
// 🎤 Pregunta de entrevista (para pensar, no se califica):
//   ¿Qué ganas al reutilizar funciones en lugar de copiar
//   el código de los ejercicios 02 y 03 aquí?
// ============================================================

// Paso 1: escribe aquí tus dos require


function reporteDeCatalogo(productos) {
  // Tu código aquí
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { reporteDeCatalogo };
