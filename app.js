/* =====================================================================
   LÓGICA DE LA CARTA  —  normalmente NO necesitas tocar este archivo.
   Toda la personalización vive en "contenido.js".
   ===================================================================== */

(function () {
  "use strict";

  // Pequeños atajos
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const crear = (tag, clase) => {
    const el = document.createElement(tag);
    if (clase) el.className = clase;
    return el;
  };

  // Compara textos sin importar mayúsculas, acentos ni espacios sobrantes
  function normalizar(txt) {
    return (txt == null ? "" : String(txt))
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "");
  }

  // Escapa texto para insertarlo sin romper el HTML
  function esc(s) {
    const d = document.createElement("div");
    d.textContent = s == null ? "" : String(s);
    return d.innerHTML;
  }

  let yaDesbloqueoSecreto = false;
  let intentosFallidos = 0;

  /* ============================ ACCESO ============================ */

  function construirAcceso() {
    const a = CONTENIDO.acceso;
    $("#accesoTitulo").textContent = a.titulo;
    $("#accesoSubtitulo").textContent = a.subtitulo;
    $("#accesoBoton").textContent = a.textoBoton;
    $("#modoInvitada").textContent = a.textoInvitada;

    const cont = $("#preguntas");
    cont.innerHTML = "";
    a.preguntas.forEach((p, i) => {
      const campo = crear("div", "campo");
      campo.innerHTML =
        '<label for="preg' + i + '">' + esc(p.etiqueta) + "</label>" +
        '<input id="preg' + i + '" type="text" autocomplete="off" placeholder="' + esc(p.placeholder) + '">' +
        '<span class="pista oculto" id="pista' + i + '">💡 ' + esc(p.pista) + "</span>";
      cont.appendChild(campo);
    });
  }

  function verificarAcceso(e) {
    e.preventDefault();
    const a = CONTENIDO.acceso;
    const correcto = a.preguntas.every((p, i) =>
      normalizar($("#preg" + i).value) === normalizar(p.respuesta)
    );

    if (correcto) {
      entrarALaCarta(false);
      return;
    }

    intentosFallidos++;
    const err = $("#accesoError");
    err.textContent = a.error;
    const tarjeta = $(".tarjeta-acceso");
    tarjeta.classList.remove("temblar");
    void tarjeta.offsetWidth; // reinicia la animación
    tarjeta.classList.add("temblar");

    // Tras 2 intentos, mostramos las pistas solas
    if (intentosFallidos >= 2) mostrarPistas();
  }

  function mostrarPistas() {
    CONTENIDO.acceso.preguntas.forEach((_, i) => {
      $("#pista" + i).classList.remove("oculto");
    });
  }

  /* ============================ LA CARTA ============================ */

  function entrarALaCarta(modoInvitada) {
    $("#acceso").classList.add("oculto");
    $("#carta").classList.remove("oculto");
    window.scrollTo(0, 0);

    $("#bienvenida").textContent = modoInvitada
      ? "Modo invitada — solo un pedacito 💕"
      : CONTENIDO.bienvenida;
    $("#cartaTitulo").textContent = "Para " + CONTENIDO.paraQuien;
    $("#pie").textContent = CONTENIDO.pie;

    actualizarContador();
    prepararMusica();
    construirMenu(modoInvitada);

    // Mostramos la primera opción
    const primerChip = $(".chip");
    if (primerChip) primerChip.click();

    // Una lluvia de bienvenida 💗
    lluviaDeCorazones(14);
  }

  function actualizarContador() {
    const cont = $("#contador");
    const fecha = CONTENIDO.fechaAniversario;
    if (!fecha) { cont.classList.add("oculto"); return; }
    const inicio = new Date(fecha + "T00:00:00");
    if (isNaN(inicio.getTime())) { cont.classList.add("oculto"); return; }
    const dias = Math.floor((Date.now() - inicio.getTime()) / 86400000);
    if (dias < 0) { cont.classList.add("oculto"); return; }
    cont.textContent = CONTENIDO.textoContador + " " + dias + " días 💞";
    cont.classList.remove("oculto");
  }

  function prepararMusica() {
    const url = CONTENIDO.cancion;
    if (!url) return;
    const audio = $("#audio");
    const boton = $("#botonMusica");
    audio.src = url;
    boton.classList.remove("oculto");
    boton.addEventListener("click", function () {
      if (audio.paused) {
        audio.play().catch(function () {});
        boton.textContent = "⏸️ pausar canción";
      } else {
        audio.pause();
        boton.textContent = "🎵 nuestra canción";
      }
    });
  }

  /* ============================ MENÚ ============================ */

  function construirMenu(modoInvitada) {
    const items = [];

    // Secciones normales
    CONTENIDO.secciones.forEach((s) => {
      items.push({ icono: s.icono, titulo: s.titulo, render: () => renderSeccion(s) });
    });

    if (!modoInvitada) {
      // Sección secreta
      const sec = CONTENIDO.secreto;
      items.push({ icono: sec.icono, titulo: sec.titulo, render: renderSecreto, despues: conectarSecreto });
      // Final con corazón
      const fin = CONTENIDO.final;
      items.push({ icono: fin.icono, titulo: fin.titulo, render: renderFinal, despues: conectarFinal });
    } else {
      // En modo invitada, solo dejamos intentar de nuevo
      items.push({ icono: "🔓", titulo: "Intentar de nuevo", render: volverAlAcceso });
    }

    const menu = $("#menu");
    menu.innerHTML = "";
    items.forEach((item) => {
      const chip = crear("button", "chip");
      chip.type = "button";
      chip.innerHTML = (item.icono ? esc(item.icono) + " " : "") + esc(item.titulo);
      chip.addEventListener("click", function () {
        document.querySelectorAll(".chip").forEach((c) => c.classList.remove("activo"));
        chip.classList.add("activo");
        const html = item.render();
        if (html != null) {
          pintarContenido(html);
          if (item.despues) item.despues();
        }
      });
      menu.appendChild(chip);
    });
  }

  function pintarContenido(html) {
    const cont = $("#contenido");
    cont.innerHTML = html;
    cont.firstElementChild &&
      cont.firstElementChild.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  /* ============================ RENDERS ============================ */

  function bloqueTextos(s) {
    let html = "";
    if (s.parrafos) html += s.parrafos.map((p) => "<p>" + esc(p) + "</p>").join("");
    if (s.lista) {
      html +=
        '<ul class="lista-bonita">' +
        s.lista.map((li) => "<li>" + esc(li) + "</li>").join("") +
        "</ul>";
    }
    return html;
  }

  function renderSeccion(s) {
    return (
      '<article class="seccion">' +
      "<h2><span class=\"icono\">" + esc(s.icono) + "</span>" + esc(s.titulo) + "</h2>" +
      bloqueTextos(s) +
      "</article>"
    );
  }

  function renderSecreto() {
    const sec = CONTENIDO.secreto;
    if (yaDesbloqueoSecreto) {
      return (
        '<article class="seccion">' +
        "<h2><span class=\"icono\">🔓</span>" + esc(sec.titulo) + "</h2>" +
        bloqueTextos(sec) +
        "</article>"
      );
    }
    // Aún bloqueada: mostramos el formulario de clave (se conecta en "despues")
    return (
      '<article class="seccion secreto-form">' +
      '<span class="candado">' + esc(sec.icono) + "</span>" +
      "<h2>" + esc(sec.titulo) + "</h2>" +
      "<p>" + esc(sec.instruccion) + "</p>" +
      '<input id="claveSecreta" type="password" placeholder="' + esc(sec.placeholder) + '">' +
      '<button class="boton" id="botonSecreto" type="button">' + esc(sec.textoBoton) + "</button>" +
      '<p class="mensaje-error" id="errorSecreto"></p>' +
      "</article>"
    );
  }

  function conectarSecreto() {
    const input = $("#claveSecreta");
    const boton = $("#botonSecreto");
    if (!input || !boton) return;
    const intentar = function () {
      if (normalizar(input.value) === normalizar(CONTENIDO.secreto.clave)) {
        yaDesbloqueoSecreto = true;
        pintarContenido(renderSecreto());
        lluviaDeCorazones(18);
      } else {
        $("#errorSecreto").textContent = CONTENIDO.secreto.error;
        const card = $(".secreto-form");
        card.classList.remove("temblar");
        void card.offsetWidth;
        card.classList.add("temblar");
      }
    };
    boton.addEventListener("click", intentar);
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") intentar(); });
    input.focus();
  }

  function renderFinal() {
    const fin = CONTENIDO.final;
    return (
      '<article class="seccion final-centro">' +
      '<span class="corazon-grande" id="corazonGrande">❤️</span>' +
      "<h2>" + esc(fin.titulo) + "</h2>" +
      bloqueTextos(fin) +
      '<button class="boton" id="botonFinal" type="button" style="max-width:280px;margin:8px auto 0;">' +
      esc(fin.textoBoton) +
      "</button>" +
      "</article>"
    );
  }

  function conectarFinal() {
    const corazon = $("#corazonGrande");
    const boton = $("#botonFinal");
    const explotar = () => lluviaDeCorazones(40);
    if (corazon) corazon.addEventListener("click", explotar);
    if (boton) boton.addEventListener("click", explotar);
  }

  function volverAlAcceso() {
    $("#carta").classList.add("oculto");
    $("#acceso").classList.remove("oculto");
    $("#accesoError").textContent = "";
    CONTENIDO.acceso.preguntas.forEach((_, i) => { const el = $("#preg" + i); if (el) el.value = ""; });
    window.scrollTo(0, 0);
    return null;
  }

  /* ====================== CORAZONES FLOTANTES ====================== */

  const EMOJIS = ["💗", "💖", "💕", "💞", "🩷", "❤️", "💓"];

  function lluviaDeCorazones(cantidad) {
    const fondo = $("#fondoCorazones");
    for (let i = 0; i < cantidad; i++) {
      setTimeout(function () {
        const h = crear("span", "corazon-flotante");
        h.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
        h.style.left = Math.random() * 100 + "vw";
        h.style.fontSize = 14 + Math.random() * 24 + "px";
        h.style.animationDuration = 4 + Math.random() * 4 + "s";
        fondo.appendChild(h);
        h.addEventListener("animationend", () => h.remove());
      }, i * 90);
    }
  }

  // Un goteo suave y constante de corazones de fondo
  function ambienteDeCorazones() {
    const prefiereMenos = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefiereMenos) return;
    setInterval(function () {
      if (!document.hidden) lluviaDeCorazones(1);
    }, 1100);
  }

  /* ============================ INICIO ============================ */

  function iniciar() {
    if (typeof CONTENIDO === "undefined") {
      document.body.innerHTML =
        '<p style="padding:40px;text-align:center;font-family:sans-serif">' +
        "No se encontró <b>contenido.js</b>. Revisa que el archivo esté junto a index.html.</p>";
      return;
    }
    document.title = "Carta para " + CONTENIDO.paraQuien + " 💌";
    construirAcceso();
    $("#formAcceso").addEventListener("submit", verificarAcceso);
    $("#verPistas").addEventListener("click", mostrarPistas);
    $("#modoInvitada").addEventListener("click", () => entrarALaCarta(true));
    ambienteDeCorazones();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
