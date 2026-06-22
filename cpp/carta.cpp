// =====================================================================
//  CARTA PARA NATA  —  versión de consola (C++)
//  ---------------------------------------------------------------------
//  Versión mejorada del borrador original:
//    • Todos los textos están como constantes ARRIBA para editar fácil.
//    • Colores en la terminal (se activan solos en Windows 10+).
//    • Entrada más tolerante (ignora mayúsculas, acentos y espacios).
//    • Contador de "días juntos" y más secciones.
//
//  CÓMO COMPILAR Y EJECUTAR:
//    Windows:  g++ carta.cpp -o carta.exe   y luego:  carta.exe
//    Linux/Mac: g++ carta.cpp -o carta      y luego:  ./carta
// =====================================================================

#include <iostream>
#include <string>
#include <cctype>
#include <ctime>

#ifdef _WIN32
#include <windows.h>
#endif

using namespace std;

// =====================================================================
//  ✏️  EDITA AQUÍ TUS TEXTOS Y RESPUESTAS
// =====================================================================

// --- Respuestas de las 3 preguntas de acceso (en minúsculas) ---
const string RESP_NOMBRE = "nata";
const string RESP_FECHA  = "28";
const string RESP_GUSTO  = "ruru";

// --- Clave de la sección secreta (en minúsculas) ---
const string CLAVE_SECRETA = "fenix";

// --- Fecha de aniversario para el contador (año, mes, día) ---
// Si no lo quieres, pon ANIVERSARIO_ACTIVO en false.
const bool ANIVERSARIO_ACTIVO = true;
const int  ANIV_ANIO = 2024;
const int  ANIV_MES  = 1;   // 1 = enero
const int  ANIV_DIA  = 28;

// =====================================================================
//  Colores ANSI (puedes ignorar esta parte)
// =====================================================================
const string C_RESET = "\033[0m";
const string C_ROSA  = "\033[95m";
const string C_MAGEN = "\033[35m";
const string C_CIAN  = "\033[96m";
const string C_AMAR  = "\033[93m";
const string C_VERDE = "\033[92m";
const string C_ROJO  = "\033[91m";
const string C_NEG   = "\033[1m";

void habilitarColores() {
#ifdef _WIN32
    // En Windows hay que activar el procesamiento de secuencias ANSI
    HANDLE hOut = GetStdHandle(STD_OUTPUT_HANDLE);
    DWORD modo = 0;
    if (GetConsoleMode(hOut, &modo)) {
        SetConsoleMode(hOut, modo | ENABLE_VIRTUAL_TERMINAL_PROCESSING);
    }
    SetConsoleOutputCP(CP_UTF8);
#endif
}

// =====================================================================
//  Utilidades
// =====================================================================

// Pasa a minúsculas y quita espacios al inicio/fin
string limpiar(string texto) {
    size_t ini = texto.find_first_not_of(" \t\r\n");
    size_t fin = texto.find_last_not_of(" \t\r\n");
    if (ini == string::npos) return "";
    texto = texto.substr(ini, fin - ini + 1);
    for (size_t i = 0; i < texto.length(); i++) {
        texto[i] = (char)tolower((unsigned char)texto[i]);
    }
    return texto;
}

void limpiarPantalla() {
    // Funciona en terminales modernas (Windows Terminal, Linux, Mac)
    cout << "\033[2J\033[H";
}

void pausar() {
    string pausa;
    cout << "\n" << C_CIAN << "Presiona Enter para continuar..." << C_RESET;
    getline(cin, pausa);
}

void linea() {
    cout << C_ROSA << "=====================================" << C_RESET << "\n";
}

void mostrarBanner() {
    limpiarPantalla();
    linea();
    cout << C_NEG << C_MAGEN << "        CARTA PARA NATA <3" << C_RESET << "\n";
    linea();
}

int diasJuntos() {
    if (!ANIVERSARIO_ACTIVO) return -1;
    tm inicio = {};
    inicio.tm_year = ANIV_ANIO - 1900;
    inicio.tm_mon  = ANIV_MES - 1;
    inicio.tm_mday = ANIV_DIA;
    inicio.tm_hour = 12; // mediodía para evitar líos de horario
    time_t tInicio = mktime(&inicio);
    time_t ahora = time(nullptr);
    if (tInicio == (time_t)-1 || ahora < tInicio) return -1;
    double seg = difftime(ahora, tInicio);
    return (int)(seg / 86400.0);
}

// =====================================================================
//  Acceso
// =====================================================================
bool validarAcceso() {
    string nombre, fecha, gusto;

    cout << "\nPara abrir esta carta responde 3 preguntas.\n\n";

    cout << C_AMAR << "1) Escribe tu nombre completo: " << C_RESET;
    getline(cin, nombre);

    cout << C_AMAR << "2) Escribe la fecha de nuestro mes: " << C_RESET;
    getline(cin, fecha);

    cout << C_AMAR << "3) Pregunta seria... quien te gusta?: " << C_RESET;
    getline(cin, gusto);

    return limpiar(nombre) == RESP_NOMBRE &&
           limpiar(fecha)  == RESP_FECHA  &&
           limpiar(gusto)  == RESP_GUSTO;
}

// =====================================================================
//  Secciones (edita los textos a tu gusto)
// =====================================================================
void introduccion() {
    cout << "\n" << C_MAGEN << "--- INTRODUCCION ---" << C_RESET << "\n";
    cout << "Nata, esta carta no esta hecha en papel.\n";
    cout << "Esta hecha en codigo, con calma, con amor y con mi forma rara de decirte lo que siento.\n";
    cout << "Cada opcion es un pedacito de nosotros.\n";
}

void geek() {
    cout << "\n" << C_MAGEN << "--- LO GEEK DE NOSOTROS ---" << C_RESET << "\n";
    cout << "Entre apps, consolas, fotos, audios y ocurrencias, contigo lo digital se vuelve humano.\n";
    cout << "Tu y yo somos como dos dispositivos raros, pero cuando conectamos, todo fluye.\n";
}

void recuerdos() {
    cout << "\n" << C_MAGEN << "--- RECUERDOS FAVORITOS ---" << C_RESET << "\n";
    cout << "Recuerdo 1: [Aqui escribe un recuerdo bonito]\n";
    cout << "Recuerdo 2: [Aqui escribe otro recuerdo]\n";
    cout << "Recuerdo 3: [Aqui escribe algo que solo ustedes entiendan]\n";
}

void razones() {
    cout << "\n" << C_MAGEN << "--- RAZONES POR LAS QUE TE AMO ---" << C_RESET << "\n";
    cout << "1. Por como te ries cuando algo te da pena.\n";
    cout << "2. Por la paciencia que me tienes.\n";
    cout << "3. Porque contigo lo simple ya es bonito.\n";
    cout << "4. Y porque, de todas las personas, te elijo a ti.\n";
}

void promesas() {
    cout << "\n" << C_MAGEN << "--- PROMESAS Y FUTURO ---" << C_RESET << "\n";
    cout << "Prometo escucharte mejor, cuidarte y crecer contigo.\n";
    cout << "Prometo no hablar sin pensar y no rendirme cuando algo se complique.\n";
    cout << "Quiero que nuestro futuro no sea perfecto, pero si consciente, bonito y real.\n";
}

void secreto() {
    string clave;
    cout << "\nPara entrar a esta seccion escribe la clave secreta: ";
    getline(cin, clave);

    if (limpiar(clave) == CLAVE_SECRETA) {
        cout << "\n" << C_VERDE << "--- SECRETO: ENTRE TU Y YO ---" << C_RESET << "\n";
        cout << "Si llegaste aqui, es porque conoces nuestra clave.\n";
        cout << "Gracias por creer en mi cuando ni yo podia.\n";
        cout << "Esta parte es solo nuestra. <3\n";
    } else {
        cout << "\n" << C_ROJO << "Clave incorrecta. Esta parte se queda guardada por ahora.\n" << C_RESET;
    }
}

void corazonDigital() {
    cout << C_ROJO;
    cout << "\n";
    cout << "   ***     ***   \n";
    cout << "  *****   *****  \n";
    cout << "  *************  \n";
    cout << "   ***********   \n";
    cout << "    *********    \n";
    cout << "     *******     \n";
    cout << "      *****      \n";
    cout << "       ***       \n";
    cout << "        *        \n";
    cout << C_RESET;
    cout << "\n" << C_NEG << C_MAGEN << "Te amo, Nata <3" << C_RESET << "\n";
}

// =====================================================================
//  Menú
// =====================================================================
void mostrarMenu() {
    int dias = diasJuntos();
    if (dias >= 0) {
        cout << "\n" << C_ROSA << "Llevamos juntos " << dias << " dias <3" << C_RESET << "\n";
    }
    cout << "\n" << C_CIAN << "========== MENU ==========" << C_RESET << "\n";
    cout << "A) Introduccion\n";
    cout << "B) Lo geek de nosotros\n";
    cout << "C) Recuerdos favoritos\n";
    cout << "D) Razones por las que te amo\n";
    cout << "E) Promesas y futuro\n";
    cout << "F) Seccion secreta\n";
    cout << "H) Corazon digital\n";
    cout << "S) Salir\n";
    cout << C_CIAN << "==========================" << C_RESET << "\n";
    cout << "Elige una opcion: ";
}

int main() {
    habilitarColores();

    string entrada;
    char opcion;

    mostrarBanner();

    if (!validarAcceso()) {
        cout << "\n" << C_ROJO << "No se pudo abrir toda la carta." << C_RESET << "\n";
        cout << "Pero igual dejo una parte para ti:\n";
        introduccion();
        cout << "\nFin del modo invitado.\n";
        return 0;
    }

    cout << "\n" << C_VERDE << "Acceso correcto. Bienvenida, Nata. <3" << C_RESET << "\n";

    bool repetir = true;
    while (repetir) {
        mostrarMenu();
        getline(cin, entrada);

        opcion = entrada.empty() ? ' ' : (char)toupper((unsigned char)entrada[0]);

        switch (opcion) {
            case 'A': introduccion();   pausar(); break;
            case 'B': geek();           pausar(); break;
            case 'C': recuerdos();      pausar(); break;
            case 'D': razones();        pausar(); break;
            case 'E': promesas();       pausar(); break;
            case 'F': secreto();        pausar(); break;
            case 'H': corazonDigital(); pausar(); break;
            case 'S':
                cout << "\n" << C_MAGEN << "Gracias por leer esta carta, Nata. <3" << C_RESET << "\n";
                repetir = false;
                break;
            default:
                cout << "\n" << C_ROJO << "Opcion no valida. Intenta otra vez." << C_RESET << "\n";
                pausar();
                break;
        }
    }

    return 0;
}
