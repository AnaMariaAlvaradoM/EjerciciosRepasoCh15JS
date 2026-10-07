# 🧺 Mercado Raíz · Repaso tipo entrevista técnica

Generation Colombia · Cohorte 15 · JavaScript

10 retos para repasar **todo lo básico de JavaScript** como si estuvieras en una entrevista técnica. Cada `git push` te da tu nota automáticamente. Sin fecha límite: practica a tu ritmo.

---

## 1. ¿Qué es esto?

### El negocio

**Mercado Raíz** es una tienda en línea que vende productos de pequeños productores colombianos: café, cacao, panela y artesanías.

Vas a construir piezas de su sistema: validar cupones, contar el inventario, modelar productos con clases y traer el catálogo desde una API.

### ¿En qué se diferencia de un taller?

Un taller practica **el tema de la clase**. Este repo mezcla **todos los temas**, como pasa en una entrevista: nadie te dice "usa un for aquí".

Algunos retos traen una **🔒 restricción de entrevista** (por ejemplo, "no uses `.reverse()`"). Así practicas pensar la lógica tú, no solo recordar el método.

### La pregunta de entrevista 🎤

Cada ejercicio termina con una **pregunta para pensar**. No se califica, pero es justo lo que te preguntaría un entrevistador después de ver tu código.

Respóndela en voz alta, como si alguien te escuchara. Esa práctica vale tanto como el código.

### ¿Cómo se califica?

Cada ejercicio tiene **tests**. Tu nota es la proporción de tests que pasan, de **0.0 a 5.0**, con crédito parcial.

Cuando abres tu Pull Request, GitHub corre los tests y te deja la nota en un comentario. Cada `git push` la actualiza.

### ¿Qué es un test?

**Técnicamente:** es código que llama a tu función con datos conocidos y verifica que retorne el resultado esperado.

**En la vida real:** es como el control de calidad de una fábrica de café. Toman una bolsa, la pesan y verifican que diga 500 g. Si no, la bolsa no pasa.

### ¿Qué es un test de estructura?

Algunos tests no revisan el resultado, sino **cómo lo hiciste**: si usaste `extends`, si importaste con `require`, si evitaste `.reverse()`.

Existen porque en una entrevista también importa el **cómo**, no solo que funcione.

---

## 2. Los 10 ejercicios

### Bloque A · Fundamentos

| # | Tema | Archivo | Qué creas |
|---|---|---|---|
| 01 | Strings | `ejercicios/01-codigo-espejo.js` | `esCodigoEspejo(codigo)` |
| 02 | Objetos | `ejercicios/02-contar-categorias.js` | `contarCategorias(productos)` |
| 03 | Arreglos | `ejercicios/03-sin-repetir.js` | `referenciasSinRepetir(referencias)` |
| 04 | Ciclos anidados | `ejercicios/04-combo-exacto.js` | `comboExacto(precios, bono)` |
| 05 | Condicionales + ciclos | `ejercicios/05-etiquetas-pedidos.js` | `etiquetasDePedidos(cantidad)` |
| 06 | Módulos (integrador) | `ejercicios/06-reporte-catalogo.js` | `reporteDeCatalogo(productos)` |

### Bloque B · Clases y herencia

| # | Tema | Archivo | Qué creas |
|---|---|---|---|
| 07 | Clases | `ejercicios/07-clase-producto.js` | clase `Producto` |
| 08 | Herencia | `ejercicios/08-herencia-oferta.js` | clase `ProductoEnOferta` |

### Bloque C · APIs

| # | Tema | Archivo | Qué creas |
|---|---|---|---|
| 09 | fetch + async/await | `ejercicios/09-obtener-productos.js` | `obtenerProductos(url)` |
| 10 | Integrador final | `ejercicios/10-vitrina-api.js` | `productosEnVitrina(url)` |

### ¿Dónde está el enunciado?

Arriba de cada archivo, en el bloque de comentarios: contexto, reglas, ejemplos, una pista y la pregunta de entrevista.

### Los ejercicios se conectan

El 06 reutiliza el 02 y el 03. El 08 hereda del 07. El 10 usa el 07 y el 09.

Si un ejercicio base falla, el que lo usa también puede fallar. **Resuélvelos en orden.**

### Un detalle sobre módulos

En clase vieron dos formas: `require` / `module.exports` (CommonJS) e `import` / `export` (ES Modules).

En este repo se usa **solo `require` y `module.exports`**. No mezcles las dos en un mismo archivo.

### ¿Y la API de verdad?

En el 09 y el 10 escribes `fetch` como si la API fuera real. Los tests **no usan internet**: reemplazan `fetch` por uno de mentiras que responde lo que cada test necesita.

---

## 3. Paso 1 · Fork

### ¿Qué es un fork?

**Técnicamente:** es una copia de un repositorio ajeno que queda en **tu** cuenta de GitHub. Puedes cambiarla sin tocar el original.

**En la vida real:** es como sacarle fotocopia al cuaderno de la profe. Escribes en tu copia; el cuaderno de ella queda igual.

### Cómo hacerlo

1. Abre el enlace del repo que te compartió la profe.
2. Arriba a la derecha, clic en **Fork**.
3. Deja el nombre como está y clic en **Create fork**.

### ¿Quedó bien?

Arriba a la izquierda debe decir **tu-usuario / EjerciciosRepasoCh15** y, debajo, *forked from …*

---

## 4. Paso 2 · Clone

### Copia la URL de TU fork

En **tu** fork (no en el de la profe), clic en el botón verde **Code** y copia la URL HTTPS.

### Descárgalo a tu computador

Abre VS Code, luego la terminal (**Terminal → New Terminal**) y escribe, cambiando la URL por la tuya:

```bash
git clone https://github.com/TU-USUARIO/EjerciciosRepasoCh15.git
cd EjerciciosRepasoCh15
code .
```

### ¿Qué hizo cada comando?

`git clone` descarga tu copia. `cd` entra a la carpeta. `code .` la abre en VS Code.

---

## 5. Paso 3 · Resolver

### Dónde escribir

Abre cada archivo de la carpeta `ejercicios/` y escribe tu solución donde dice `// Tu código aquí`.

### Las tres reglas de oro

1. **No cambies el nombre** de la función o la clase.
2. **No borres** la línea `module.exports`: es la puerta por donde el test usa tu código.
3. **Usa `return`**: los tests revisan lo que tu función retorna, no lo que imprime.

### Así se ve la forma (no resuelve ningún ejercicio)

Este ejemplo solo muestra la estructura: recibe parámetros, retorna y exporta. No lo pegues en ningún archivo.

```javascript
function saludarCliente(nombre) {
  return "Hola, " + nombre;
}

module.exports = { saludarCliente };
```

### Practica como en una entrevista

- Lee el enunciado **dos veces** antes de escribir.
- Resuelve un ejemplo **a mano**, en papel.
- Abre la pista solo si llevas más de 15 minutos bloqueado.
- Al terminar, responde la 🎤 pregunta en voz alta.

---

## 6. Paso 4 · Probar la nota en local

### Requisito: Node.js

Necesitas Node.js 20 o superior. Revisa tu versión con `node --version`. Si el comando no existe, instala la versión LTS desde nodejs.org.

### Todos los ejercicios

En la terminal, dentro de la carpeta del repo:

```bash
npm test
```

### Un solo ejercicio

Agrega el número del ejercicio después de `--`:

```bash
npm test -- 07
```

### Cómo leer el resultado

- ✅ todos los tests del ejercicio pasan.
- 🟡 pasan algunos. Debajo ves cuáles fallan y una pista.
- ❌ no pasa ninguno.

Al final ves **Tests aprobados** y tu **Nota**.

---

## 7. Paso 5 · Subir tus cambios

### Los tres comandos

Cada vez que quieras actualizar tu nota en GitHub:

```bash
git add .
git commit -m "Resuelvo el ejercicio 03"
git push
```

### ¿Qué hace cada uno?

Piensa en un envío por mensajería:

- `git add .` mete los archivos en la caja.
- `git commit -m "..."` cierra la caja y le pone una etiqueta.
- `git push` despacha la caja a GitHub.

---

## 8. Paso 6 · Pull Request (solo UNO)

### ¿Qué es un Pull Request?

**Técnicamente:** es una solicitud para que el repo original revise los cambios de tu fork. Aquí se usa para calificarte.

**En la vida real:** es como radicar un documento en una oficina. Lo entregas una vez y te dan un número de radicado para hacerle seguimiento.

### Cómo abrirlo

1. En **tu** fork, clic en **Contribute → Open pull request**.
2. **Título:** tu nombre completo (por ejemplo, *María Fernanda Ruiz Gómez*).
3. Clic en **Create pull request**.

### Solo uno

Ábrelo **una sola vez**. Después solo haces `git push`: el mismo PR se actualiza solo.

---

## 9. Paso 7 · Ver tu nota

### Dónde aparece

En tu Pull Request, en unos minutos, aparece un comentario con tu **nota** y una tabla por ejercicio. También una etiqueta, por ejemplo `Nota 4.2`.

### ¿Qué me falta?

En el comentario, clic en **🔎 Ver qué falta por corregir**: muestra cada test que falló con su mensaje.

### ¿Cómo subo la nota?

Corrige, prueba con `npm test` y haz `git push`. El comentario se actualiza solo.

### ¿Hay fecha límite?

No. Este repo queda **abierto**: practica a tu ritmo y vuelve cuando quieras. Cada `git push` sigue actualizando tu nota.

La profe revisa tu avance de vez en cuando, así que mejor constante que todo el último día.

### ¿Y las soluciones?

**No se publican.** En una entrevista nadie te pasa la respuesta: la idea es que llegues tú.

Si te bloqueas, sigue este orden:

1. Vuelve a leer el enunciado y los ejemplos.
2. Lee la pista y la documentación del tema (sección 12).
3. Lee el mensaje del test que falla: casi siempre dice qué revisar.
4. Pregúntale a tu sala o a la profe **qué** estás pensando, no "¿cuál es la respuesta?".

### ¿Y las preguntas 🎤?

Tampoco traen respuesta escrita. Discútelas con tu sala: explicarle tu razonamiento a otra persona es justo lo que harás en una entrevista.

---

## 10. Archivos que NO debes modificar

### La lista

- `tests/`
- `scripts/`
- `.github/`
- `package.json`

### ¿Qué pasa si los cambias?

Tu PR queda marcado como `⚠️ Revisar` y la profe lo revisa a mano. Tu nota igual se calcula con los tests originales: cambiarlos no sirve para subirla.

---

## 11. Errores frecuentes

### "node" o "npm" no se reconoce

Node.js no está instalado o la terminal se abrió antes de instalarlo. Instálalo, cierra VS Code y ábrelo de nuevo.

### "No encuentro tu función"

Le cambiaste el nombre a la función o borraste la línea `module.exports`. Compáralos con el enunciado.

### "Tu función retorna undefined" o "Se intentó leer … de algo que vale undefined"

Te faltó el `return`, o usas un valor que no existe. Revisa que tu función retorne algo en **todos** los caminos.

### "Tiempo agotado: posible ciclo infinito"

Un ciclo nunca termina. Revisa que la variable de control avance hacia la condición de salida (por ejemplo, `n++` y no `n--`).

### "Tu código debería usar…" o "no debería usar…"

Es un test de estructura: el resultado puede estar bien, pero no usaste (o usaste) lo que pide el enunciado.

### "Hay un error de sintaxis (SyntaxError) en …"

Falta o sobra un paréntesis, una llave o una comilla. El mensaje dice **en qué archivo**: puede ser uno anterior que este importa.

### "No encuentro el archivo … que pides con require"

La ruta del `require` está mal escrita. Debe empezar con `./` y llevar el nombre exacto del archivo, por ejemplo `"./02-contar-categorias"`.

### "… no existe en tu archivo" o "… no es una clase"

Usas algo que no importaste con `require`, o el archivo de donde viene no lo exporta con `module.exports`.

### "Mezclaste import/export con require/module.exports"

En un mismo archivo usaste las dos formas de módulos. Aquí se usa solo `require` y `module.exports`.

### "obtenerProductos lanzó un error"

Tu función no atrapa el fallo de red. Envuelve el `fetch` en un `try { } catch (error) { }` y retorna `[]` en el `catch`.

### "Please tell me who you are"

Git no sabe quién eres. Configúralo una sola vez, con tus datos:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-correo@ejemplo.com"
```

### Error 403 al hacer push

Clonaste el repo de la profe en vez de tu fork. Vuelve al Paso 1, haz el fork y clona **tu** URL.

---

## 12. 📚 Documentación por tema

### Strings y arreglos (ej. 01, 03, 04)

- [String · MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)
- [Array.includes · MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [Bucles e iteración · MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)

### Objetos y condicionales (ej. 02, 05)

- [Objetos · javascript.info](https://es.javascript.info/object)
- [Operador residuo % · MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Remainder)

### Módulos (ej. 06, 08, 10)

- [require y module.exports (CommonJS) · Node.js](https://nodejs.org/api/modules.html)
- [Módulos con import/export · MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules)
- [Módulos, introducción · javascript.info](https://es.javascript.info/modules-intro)

### Clases y herencia (ej. 07, 08)

- [Clases · MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)
- [extends · MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/extends)
- [super · MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/super)
- [Herencia de clases · javascript.info](https://es.javascript.info/class-inheritance)

### APIs, async/await y errores (ej. 09, 10)

- [Usando fetch · MDN](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)
- [Response.ok · MDN](https://developer.mozilla.org/es/docs/Web/API/Response/ok)
- [async function · MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)
- [try...catch · MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch)
- [Async/await · javascript.info](https://es.javascript.info/async-await)

---

## 🎯 Para seguir practicando

### Plataformas tipo entrevista

- [Exercism · JavaScript](https://exercism.org/tracks/javascript): ejercicios con mentores, ideal para empezar.
- [Codewars](https://www.codewars.com/): retos cortos por niveles ("kata").
- [LeetCode](https://leetcode.com/problemset/): el estándar de las entrevistas; empieza por los marcados *Easy*.

---

<sub>© 2026 Ana Alvarado · Educadora Tech & Desarrolladora Full Stack · Todos los derechos reservados · linkedin.com/in/ana-alvarado-instructora-full-stack</sub>
