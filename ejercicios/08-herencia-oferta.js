// ============================================================
// Ejercicio 08 · Herencia · Productos en oferta
// ============================================================
// Algunos productos entran en oferta. Un producto en oferta ES
// un Producto (tiene nombre, precio, stock y se vende igual),
// pero calcula su precio distinto.
//
// Completa la clase ProductoEnOferta para que:
//
//   1. HEREDE de Producto (usa extends).
//
//   2. constructor(nombre, precio, stock, descuento)
//      → llama a super(...) con los tres primeros valores
//      → guarda this.descuento (es un porcentaje)
//      → si el descuento no está entre 1 y 90 (incluidos),
//        guarda 0
//
//   3. Sobrescriba precioConIva():
//      → toma el precio con IVA del padre (super.precioConIva())
//      → le aplica el descuento y redondea con Math.round():
//        Math.round(precioDelPadre * (100 - descuento) / 100)
//
// Ejemplos:
//   const panela = new ProductoEnOferta("Panela orgánica", 10000, 8, 20);
//   panela.precioConIva() → 9520   (11900 con IVA, menos 20%)
//   panela.vender(3)      → true   (lo heredó de Producto)
//   new ProductoEnOferta("Mochila", 50000, 2, 95).descuento → 0
//
// Pista: no copies la fórmula del IVA. Pídesela al padre con
// super.precioConIva().
//
// 🎤 Pregunta de entrevista (para pensar, no se califica):
//   ¿Qué ventaja tiene usar super.precioConIva() en lugar de
//   volver a escribir la fórmula del IVA aquí?
// ============================================================

// Esta línea trae tu clase Producto del ejercicio 07
const { Producto } = require("./07-clase-producto");

class ProductoEnOferta {
  // Tu código aquí
}

// No borres esta línea: es la puerta por donde el test usa tu clase
module.exports = { ProductoEnOferta };
