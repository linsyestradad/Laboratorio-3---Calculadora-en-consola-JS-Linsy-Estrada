function calcular(expresion) {
    try {
        return eval(expresion);
    } catch (error) {
        return 'Error: Expresión no válida';
    }
}

function mostrarEnPantalla(texto) {
    const historial = document.getElementById('historial');
    const nuevoElemento = document.createElement('div');
    nuevoElemento.textContent = texto;
    nuevoElemento.className = 'operacion';
    historial.appendChild(nuevoElemento);
}

function mostrarResultado(texto) {
    const resultado = document.getElementById('resultado');
    resultado.textContent = texto;
}

function iniciarCalculadora() {
    console.log("Bienvenido a la Calculadora en Consola y Pantalla");
    console.log("Ingrese 'salir' para terminar el programa");
    mostrarEnPantalla("Bienvenido a la Calculadora en Consola y Pantalla");
    mostrarEnPantalla("Ingrese 'salir' para terminar el programa");

    while (true) {
        let expresion = prompt("Ingrese una expresión matemática (o 'salir' para terminar):");

        if (expresion.toLowerCase() === 'salir') {
            console.log("Gracias por usar la Calculadora. ¡Hasta luego!");
            mostrarEnPantalla("Gracias por usar la Calculadora. ¡Hasta luego!");
            break;
        }

        let resultado = calcular(expresion);
        let salida = `${expresion} = ${resultado}`;
        console.log(salida);
        mostrarEnPantalla(salida);
        mostrarResultado(`Último resultado: ${salida}`);
    }
}

// Iniciar la calculadora
iniciarCalculadora();