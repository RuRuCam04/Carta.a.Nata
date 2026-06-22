/* =====================================================================
   💌  CONTENIDO DE LA CARTA  —  EDITA SOLO ESTE ARCHIVO
   ---------------------------------------------------------------------
   Todo lo que está entre comillas "..." lo puedes cambiar a tu gusto.
   Reglas para que no se rompa nada:
     • No borres las comillas " " ni las comas ,
     • No borres los corchetes [ ] ni las llaves { }
     • Para usar un emoji solo cópialo y pégalo dentro de las comillas
   Cuando termines: guarda el archivo y recarga la página (F5).
   ===================================================================== */

const CONTENIDO = {

  /* ------------------------------------------------------------------ */
  /* 1) DATOS BÁSICOS                                                    */
  /* ------------------------------------------------------------------ */
  paraQuien: "Nata",
  deParte: "Ruru",

  /* ------------------------------------------------------------------ */
  /* 2) PANTALLA DE ACCESO (las 3 preguntas para abrir la carta)        */
  /*    "respuesta" es lo que ella debe escribir. No importan mayúsculas */
  /*    ni acentos ni espacios de más: todo se compara en minúsculas.    */
  /* ------------------------------------------------------------------ */
  acceso: {
    titulo: "Carta para Nata",
    subtitulo: "Responde 3 preguntitas para abrir tu carta 💌",
    preguntas: [
      {
        etiqueta: "1) ¿Cuál es tu nombre?",
        placeholder: "Escribe tu nombre...",
        respuesta: "nata",
        pista: "Empieza con N y yo la digo todo el día 😏"
      },
      {
        etiqueta: "2) ¿Qué día del mes es 'nuestro día'?",
        placeholder: "Solo el número...",
        respuesta: "28",
        pista: "Está entre el 27 y el 29 👀"
      },
      {
        etiqueta: "3) Pregunta seria... ¿quién te gusta?",
        placeholder: "Sin mentir 👀",
        respuesta: "ruru",
        pista: "Soy yo... ¿verdad que sí? 🙈"
      }
    ],
    textoBoton: "Abrir mi carta 💗",
    error: "Mmm, algo no cuadra... inténtalo otra vez, tú puedes 💕",
    textoInvitada: "solo quiero ver un pedacito"
  },

  // Mensaje que aparece cuando contesta bien las 3 preguntas:
  bienvenida: "Acceso correcto. Bienvenida, Nata 💗",

  /* ------------------------------------------------------------------ */
  /* 3) CONTADOR DE DÍAS JUNTOS (opcional)                              */
  /*    Pon la fecha en que empezaron, formato "AAAA-MM-DD".            */
  /*    Si NO quieres el contador, deja las comillas vacías: ""         */
  /* ------------------------------------------------------------------ */
  fechaAniversario: "2024-01-28",
  textoContador: "Llevamos juntos",

  // Canción (opcional): pon el nombre de un mp3 que dejes en esta misma
  // carpeta, por ejemplo "cancion.mp3", o un enlace directo a un audio.
  // Si lo dejas vacío "" no aparece el botón de música.
  cancion: "",

  /* ------------------------------------------------------------------ */
  /* 4) SECCIONES DE LA CARTA                                            */
  /*    Cada sección puede tener "parrafos" (textos) y/o "lista".        */
  /*    Puedes agregar o quitar secciones copiando un bloque { ... }.    */
  /* ------------------------------------------------------------------ */
  secciones: [
    {
      icono: "💌",
      titulo: "Introducción",
      parrafos: [
        "Nata, esta carta no está hecha en papel.",
        "Está hecha en código, con calma, con amor y con mi forma rara de decirte lo que siento.",
        "Cada sección de aquí es un pedacito de nosotros. Tómate tu tiempo para leerlas. 💗"
      ]
    },
    {
      icono: "🎮",
      titulo: "Lo geek de nosotros",
      parrafos: [
        "Entre apps, consolas, fotos, audios y ocurrencias, contigo lo digital se vuelve humano.",
        "Tú y yo somos como dos dispositivos raros, pero cuando conectamos, todo fluye.",
        "Si tú eres el hardware bonito, yo soy el software que solo funciona bien a tu lado. 🤓💕"
      ]
    },
    {
      icono: "📸",
      titulo: "Recuerdos favoritos",
      // 👇 Cambia estos por recuerdos REALES de ustedes:
      lista: [
        "El día que [escribe aquí ese primer momento que no olvidas] ✨",
        "Cuando [escribe algo que te hizo reír mucho con ella] 😂",
        "Ese momento que solo ustedes dos entienden... [escríbelo] 🤍"
      ]
    },
    {
      icono: "✨",
      titulo: "Razones por las que te amo",
      // 👇 Personalízalas, son las que más se sienten:
      lista: [
        "Por cómo te ríes cuando algo te da mucha pena.",
        "Por la paciencia que me tienes cuando me cuesta hablar.",
        "Porque contigo lo simple ya es bonito.",
        "Por la forma en que me miras cuando crees que no me doy cuenta.",
        "Y porque, de todas las personas, te elijo a ti. Siempre."
      ]
    },
    {
      icono: "🤍",
      titulo: "Promesas y futuro",
      parrafos: [
        "Prometo escucharte mejor, cuidarte y crecer contigo.",
        "Prometo no hablar sin pensar y no rendirme cuando algo se complique.",
        "Quiero que nuestro futuro no sea perfecto, pero sí consciente, bonito y real."
      ]
    }
  ],

  /* ------------------------------------------------------------------ */
  /* 5) SECCIÓN SECRETA (protegida con una clave)                       */
  /* ------------------------------------------------------------------ */
  secreto: {
    icono: "🔒",
    titulo: "Sección secreta",
    instruccion: "Para entrar a esta parte, escribe nuestra clave secreta:",
    clave: "fenix",
    placeholder: "La clave...",
    textoBoton: "Entrar",
    error: "Clave incorrecta. Esta parte se queda guardada por ahora 🤍",
    parrafos: [
      "Si llegaste aquí, es porque conoces nuestra clave.",
      "Gracias por creer en mí cuando ni yo podía.",
      "Esta parte es solo nuestra. Te amo más de lo que el código puede mostrar. 💗"
    ]
  },

  /* ------------------------------------------------------------------ */
  /* 6) MENSAJE FINAL (con el corazón animado)                          */
  /* ------------------------------------------------------------------ */
  final: {
    icono: "❤️",
    titulo: "Te amo, Nata",
    parrafos: [
      "Gracias por leer cada parte de esta carta.",
      "No sé programar el futuro, pero sí sé que te quiero en el mío.",
      "Presiona el corazón 👇"
    ],
    textoBoton: "Presióname 💖"
  },

  // Texto chiquito del pie de página:
  pie: "Hecho con 💗 y código, solo para ti."
};
