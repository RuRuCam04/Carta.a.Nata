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

## ✏️ Cómo personalizar la carta (lo más importante)

Abre **`contenido.js`** con cualquier editor (Bloc de notas, VS Code, etc.) y
cambia lo que está entre comillas `"..."`. Ahí puedes editar:

- Las **3 preguntas de acceso** y sus respuestas.
- El texto de cada **sección** (introducción, recuerdos, razones, promesas...).
- La **clave secreta** y el mensaje secreto.
- La **fecha de aniversario** para el contador de días (`"AAAA-MM-DD"`).
- Una **canción** opcional (pon un `.mp3` en esta carpeta y escribe su nombre).

> Reglas: no borres las comillas `" "`, las comas `,` ni los corchetes `[ ]`.
> Guarda el archivo y recarga la página (F5).

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

## 👀 Cómo verla en tu compu

Solo haz **doble clic en `index.html`** y se abre en tu navegador. No necesitas
instalar nada.

---

## 🌐 Cómo publicarla online (para mandarle el link a Nata)

Con **GitHub Pages** tendrás un enlace que ella puede abrir desde su celular.

1. Asegúrate de que el repositorio sea **Público**
   (*Settings → General → Change visibility*). Pages gratis requiere repo público.
2. Ve a **Settings → Pages**.
3. En **Build and deployment → Source**, elige **"Deploy from a branch"**.
4. En **Branch**, elige `claude/zen-edison-vehj10` y la carpeta **`/ (root)`**. Guarda.
5. Espera 1–2 minutos y entra a tu link:

   ```
   https://rurucam04.github.io/carta.a.nata/
   ```

6. ¡Comparte ese link con Nata! 💌

> Cada vez que cambies `contenido.js` y subas los cambios a esa rama, la página
> online se actualiza sola en un par de minutos.

> **Nota:** como es una página web, las respuestas y la clave están dentro del
> código (cualquiera curioso podría verlas en el código fuente). Es una "puerta"
> bonita, no una caja fuerte. No pongas ahí secretos de verdad.

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
