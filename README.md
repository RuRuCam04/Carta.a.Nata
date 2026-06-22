# 💌 Carta para Nata

Una carta hecha con código, con amor. Tiene **dos versiones**:

1. **App web** (recomendada para regalar): se abre en el celular o la compu, con
   diseño romántico, corazones flotantes, contador de días juntos, secciones y
   una sección secreta con clave.
2. **Versión de consola en C++**: el programa de terminal, mejorado.

---

## 📂 ¿Qué hay en este proyecto?

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La página de la carta. Es lo que se abre en el navegador. |
| `contenido.js` | **👉 Aquí editas TODO el texto** (preguntas, secciones, clave...). |
| `estilos.css` | Los colores y el diseño. |
| `app.js` | La lógica. Normalmente no se toca. |
| `cpp/carta.cpp` | La versión de consola en C++. |

---

## 🚀 Guía paso a paso (de revisar el PR a tener tu link)

### 1) Revisar el PR
1. En GitHub, abre la pestaña **Pull requests** y entra al PR **#1**
   ("Add complete love letter web app and C++ console version").
2. Ve a la pestaña **Files changed** para ver todos los archivos nuevos.
3. Si el PR está como **borrador (Draft)**, pulsa **"Ready for review"**.

### 2) Fusionar (merge) el PR a `main`
1. En el PR, pulsa el botón verde **"Merge pull request"**.
2. Confirma con **"Confirm merge"**.
3. Cuando te ofrezca **"Delete branch"**, puedes borrar la rama (opcional).
   Tras el merge, todos los archivos quedan en la rama `main`.

### 3) Activar GitHub Pages desde `main`
1. Asegúrate de que el repositorio sea **Público**
   (*Settings → General → Change visibility*). Pages gratis requiere repo público.
2. Ve a **Settings → Pages**.
3. En **Build and deployment → Source**, elige **"Deploy from a branch"**.
4. En **Branch**, elige **`main`** y la carpeta **`/ (root)`** → **Save**.
5. Espera 1–2 minutos. GitHub te muestra ahí mismo el enlace, que será algo como:

   ```
   https://rurucam04.github.io/Carta.a.Nata/
   ```
6. ¡Comparte ese link con Nata! 💌

### 4) Editar los textos
1. Abre **`contenido.js`** y cambia lo que está entre comillas (detalle más abajo).
2. Sube el cambio a `main` (haz *commit*). En ~2 minutos la página online se
   actualiza sola.

### 5) Probar la app
- **En tu compu:** doble clic en `index.html`.
- **Online:** abre tu link de GitHub Pages.
- Más detalle en la sección **"👀 Probar la app"** de abajo.

---

## 🌐 Publicar online: los dos caminos

GitHub Pages te da un enlace para abrir la carta desde cualquier celular.

### ✅ Recomendado — desde `main` (después de fusionar el PR)
Es lo más estable: tu carta vive en `main` y no depende de una rama que podría
borrarse. Solo sigue los pasos **2** y **3** de la guía de arriba.

### Alternativa — desde la rama, sin fusionar (para verlo YA)
Si quieres el link antes de hacer el merge:

1. **Settings → Pages → Source: "Deploy from a branch"**.
2. **Branch:** `claude/zen-edison-vehj10`, carpeta **`/ (root)`** → **Save**.
3. ⚠️ Cuando luego fusiones a `main`, **cambia el Branch de Pages a `main`**.
   Si borras la rama, el link viejo deja de funcionar.

> En ambos casos: cada vez que subas cambios a la rama elegida, la página se
> actualiza sola en un par de minutos.

> **Nota de privacidad:** como es una página web, las respuestas y la clave están
> dentro del código (alguien curioso podría verlas en el código fuente). Es una
> "puerta" bonita, no una caja fuerte. No pongas ahí secretos de verdad.

---

## ✏️ Editar / personalizar los textos

Abre **`contenido.js`** con cualquier editor (Bloc de notas, VS Code, o el lápiz
✏️ de GitHub) y cambia lo que está entre comillas `"..."`. Ahí puedes editar:

- Las **3 preguntas de acceso** y sus respuestas.
- El texto de cada **sección** (introducción, recuerdos, razones, promesas...).
- La **clave secreta** y el mensaje secreto.
- La **fecha de aniversario** para el contador de días (`"AAAA-MM-DD"`).
- Una **canción** opcional (pon un `.mp3` en esta carpeta y escribe su nombre).

> Reglas: no borres las comillas `" "`, las comas `,` ni los corchetes `[ ]`.
> Guarda y recarga la página (F5) para ver los cambios localmente.

### 🔑 Respuestas y clave actuales (cámbialas en `contenido.js`)

| Pregunta | Respuesta actual |
|---|---|
| ¿Cuál es tu nombre? | `nata` |
| ¿Qué día del mes es "nuestro día"? | `28` |
| ¿Quién te gusta? | `ruru` |
| **Clave secreta** | `fenix` |

Las respuestas **no distinguen** mayúsculas, acentos ni espacios de más, así que
`Nata`, `NATA` y ` nata ` funcionan igual.

---

## 👀 Probar la app

- **En tu compu (local):** doble clic en `index.html`. No necesitas instalar nada.
- **Online:** abre tu link de GitHub Pages.
- **Qué probar:**
  1. Contesta las 3 preguntas (con los valores actuales: nombre `nata`, día `28`,
     gusto `ruru`).
  2. Navega por las secciones del menú.
  3. En **"Sección secreta"** escribe la clave `fenix`.
  4. Pulsa el corazón del final para ver la lluvia de corazones. 💗

---

## ⌨️ Versión en C++ (consola)

El código está en `cpp/carta.cpp`. Edita los textos y respuestas que están
marcados **arriba del archivo**.

### Compilar y ejecutar

**Windows** (con [g++/MinGW](https://www.mingw-w64.org/) instalado):

```bash
g++ cpp/carta.cpp -o carta.exe
carta.exe
```

**Linux / Mac:**

```bash
g++ cpp/carta.cpp -o carta
./carta
```

Mejoras respecto al borrador original: textos editables arriba, colores en la
terminal (se activan solos en Windows 10+), entrada más tolerante (ignora
mayúsculas/acentos/espacios), contador de días juntos y una sección extra
("Razones por las que te amo").

---

Hecho con 💗 y código.
