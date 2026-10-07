// ============================================================
// Ejercicio 07 · Clases · La clase Producto
// ============================================================
// Hasta ahora los productos eran objetos sueltos. Ahora cada
// producto va a ser una instancia de una clase que sabe
// calcular su precio y cuidar su propio stock.
//
// Completa la clase Producto:
//
//   constructor(nombre, precio, stock)
//     → guarda los tres valores en this.nombre, this.precio
//       y this.stock
//
//   precioConIva()
//     → retorna el precio + IVA del 19%, redondeado con
//       Math.round()
//
//   hayStock(cantidad)
//     → retorna true si el stock alcanza para esa cantidad
//
//   vender(cantidad)
//     → si cantidad es mayor que 0 y hay stock suficiente,
//       resta la cantidad del stock y retorna true
//     → si no, NO cambia el stock y retorna false
//
// Ejemplos:
//   const cafe = new Producto("Café de Huila", 32000, 10);
//   cafe.precioConIva() → 38080
//   cafe.vender(4)      → true   (stock queda en 6)
//   cafe.vender(20)     → false  (stock sigue en 6)
//
// Pista: dentro de vender() puedes llamar a this.hayStock().
//
// 🎤 Pregunta de entrevista (para pensar, no se califica):
//   ¿Por qué vender() valida antes de restar, en lugar de
//   dejar que el stock quede negativo?
// ============================================================

class Producto {
  // Tu código aquí
}

// No borres esta línea: es la puerta por donde el test usa tu clase
module.exports = { Producto };
