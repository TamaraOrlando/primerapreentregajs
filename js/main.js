// Definimos variable global y le damos la bienvenida al usuario
let colocarEdad = prompt("Hola, bienvenido/a a Tasty Vape Liquids. Por favor, ingrese su edad para poder acceder al sitio:");

// Función para verificar la edad del usuario
function verificarEdad() {
    let edad = parseInt(colocarEdad);

    while (isNaN(edad) || edad < 18) {
        if (isNaN(edad)) {
            alert("Número invalido. Por favor, ingrese un número válido para su edad.");
        } else {
            alert("Lo siento, eres menor de edad, no puedes ingresar. Llame a un adulto e inténtelo nuevamente.");
        }
        // Si el usuario coloca un número inválido o es menor a 18 años, se repite el ciclo
        colocarEdad = prompt("Por favor, ingrese su edad nuavemente para poder acceder al sitio:");
        edad = parseInt(colocarEdad);
    }
    alert("Bienvenido/a, puedes acceder al sitio. Presiona aceptar para continuar.");
}

// Llamamos a la función verificarEdad
verificarEdad();





// Función para saludar al usuario
function saludar() {
    let nombreIngresado = prompt("Por favor, ingrese su nombre para brindarle una mejor atención:");

    // Validamos el nombre ingresado
    while (nombreIngresado === null || !isNaN(parseFloat(nombreIngresado)) || nombreIngresado.trim().length < 3) {
        console.log("DEBUG:", nombreIngresado);
        if (nombreIngresado === null) {
            nombreIngresado = prompt("El nombre ingresado no es válido. Por favor, ingrese su nombre completo nuevamente:");
        }
        else if (!isNaN(parseFloat(nombreIngresado))) {
            nombreIngresado = prompt("El nombre ingresado no es válido. No ingrese números. Por favor, ingrese su nombre completo nuevamente:");
        }
        else {
            nombreIngresado = prompt("El nombre " + nombreIngresado + " es demasiado corto. Por favor, ingrese su nombre completo nuevamente:");
        }
    }

    // Mostramos mensaje de bienvenida con el nombre ingresado
    alert("Bienvenido/a " + nombreIngresado + " a ¡Tasty Vape Liquids!");
}

// Llamamos a la función para saludar al usuario
saludar();





//Le damos las opciones del menú al usuario

// Definimos variables globales
let opcionPrincipal;
let sabor;
let presentacion;

// Función para elegir la opción principal
function elegirOpcionPrincipal() {
    let opcion;
    do {
        opcion = prompt("Elija el sabor de su líquido para vapear: \n1 - Frutales y cool \n2 - Tabaquiles y bebidas alcohólicas \n3 - Postres");
    } while (opcion !== "1" && opcion !== "2" && opcion !== "3");
    return opcion;
}

// Función para elegir el sabor según la opción principal
function elegirSabor(opcion) {
    let saborElegido;
    switch (opcion) {
        case "1":
            do {
                saborElegido = prompt("Elija el sabor frutal o cool: \n1 - Menta \n2 - Melón \n3 - Frutilla");
            } while (saborElegido !== "1" && saborElegido !== "2");
            break;
        case "2":
            do {
                saborElegido = prompt("Elija el sabor tabaquil o de bebida alcohólica: \n1 - Tabaco \n2 - Bayley's");
            } while (saborElegido !== "1" && saborElegido !== "2");
            break;
        case "3":
            do {
                saborElegido = prompt("Elija el sabor de postre: \n1 - Lemon Pie \n2 - Milk Oreo");
            } while (saborElegido !== "1" && saborElegido !== "2");
            break;
        default:
            console.log("Opción inválida");
            break;
    }

    return saborElegido;
}

// Función para elegir la presentación
function elegirPresentacion() {
    let presentacionElegida;
    do {
        presentacionElegida = prompt("Elija la presentación: \n1 - Botella de 30ml - $4500 \n2 - Botella de 60ml - $9000");
    } while (presentacionElegida !== "1" && presentacionElegida !== "2");

    return presentacionElegida;
}

// Función para obtener el texto correspondiente a la opción principal
function obtenerOpcionTextoPrincipal(opcionPrincipal) {
    switch (opcionPrincipal) {
        case "1":
            return "Frutales y cool";
        case "2":
            return "Tabaquiles y bebidas alcohólicas";
        case "3":
            return "Postres";
        default:
            return "Desconocido";
    }
}

// Función para obtener el texto correspondiente al sabor
function obtenerSaborTexto(opcionPrincipal, sabor) {
    switch (opcionPrincipal) {
        case "1":
            return sabor === "1" ? "Menta" : sabor === "2" ? "Melón" : "Frutilla";
        case "2":
            return sabor === "1" ? "Tabaco" : "Bayley's";
        case "3":
            return sabor === "1" ? "Lemon Pie" : "Milk Oreo";
        default:
            return "Desconocido";
    }
}

// Función para obtener el texto correspondiente a la presentación
function obtenerPresentacionTexto(presentacion) {
    return presentacion === "1" ? "Botella de 30ml - $4500" : "Botella de 60ml - $9000";
}

// Función principal
function main() {
    do {
        opcionPrincipal = elegirOpcionPrincipal();
        sabor = elegirSabor(opcionPrincipal);
        presentacion = elegirPresentacion();
        let resultado = "Usted eligió:\n" + "- Opción principal: " + obtenerOpcionTextoPrincipal(opcionPrincipal) + "\n" + "- Sabor: " + obtenerSaborTexto(opcionPrincipal, sabor) + "\n" + "- Presentación: " + obtenerPresentacionTexto(presentacion);
        alert(resultado);

        // Preguntamos al usuario si desea confirmar la compra
        let confirmacionCompra = confirm("¿Desea confirmar su compra?\nPulse Aceptar para confirmar y Cancelar para volver al menú principal.");
        if (confirmacionCompra) {
            let seguirNavegando = confirm("Ha accedido al producto seleccionado. ¡Disfrute su vapeo!\n¿Desea seguir navegando por la web? Pulse Aceptar para ir al sitio o Cancelar para volver al menú principal");
            if (seguirNavegando) {
                break; // Finaliza el ciclo si el usuario no desea seguir navegando
            }
        } else {
            // Vuelve al menú principal
            continue;
        }
    } while (true); // Repite el ciclo mientras el usuario no confirme la compra o decida seguir navegando
}

// Llamamos a la función principal para iniciar el proceso
main();


