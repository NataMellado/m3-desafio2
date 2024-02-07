// Función principal que maneja el juego de cachipún para el número de rondas ingresado por el usuario.

function cachipun() {

  // Restablecer puntajes a cero
  var userWins = 0;
  var machineWins = 0;

  // Obtener el número de rondas desde el elemento con id 'rounds' y guardarlo en la variable numRounds.
  var numRounds = parseInt(document.getElementById("rounds").value, 10);

  // Validar si el número de rondas es válido.
  if (isNaN(numRounds) || numRounds <= 0 || numRounds > 10) {
    alert("Por favor, ingrese un número válido de rondas.");
    return;
  }

  // Ciclo para ejecutar el juego según el número de rondas.
  for (var i = 0; i < numRounds; i++) {
    // Solicitar la jugada del usuario y convertirla a minúsculas para hacer la comparación más fácil.
    var userChoice = prompt(
      "Ingrese su jugada: Piedra, Papel o Tijera"
    ).toLowerCase();

    // Validar la entrada del usuario.
    if (
      userChoice !== "piedra" &&
      userChoice !== "papel" &&
      userChoice !== "tijera"
    ) {
      alert("Por favor, ingrese una opción válida (Piedra, Papel o Tijera).");
      i--; // Decrementar i para repetir la misma ronda.
      continue;
    }

    // Obtener la jugada automática de la máquina.
    var machineChoice = getMachineChoice();

    // Determinar al ganador de la ronda.
    var winner = getWinner(userChoice, machineChoice);

    // Actualizar puntajes
    if (winner === "Usuario") {
      userWins++;
    } else if (winner === "Máquina") {
      machineWins++;
    }

    // Mostrar el resultado de la ronda.
    alert(
      `Ronda n°${
        i + 1
      } \nUsuario: ${userChoice} \nMáquina: ${machineChoice} \nGanador: ${winner}`
    );
  }

  // Llamar a la función para actualizar los puntajes en el HTML después del bucle
  updateScores(userWins, machineWins);

// Mostrar el elemento con id 'result'
document.getElementById("result").style.display = "block";

}

// Función para obtener la jugada automática de la máquina.
function getMachineChoice() {
  // Generar un número aleatorio entre 0 y 2.
  var randomNum = Math.floor(Math.random() * 3);

  // Asignar una jugada a la máquina según el número aleatorio.
  switch (randomNum) {
    case 0:
      return "piedra";
    case 1:
      return "papel";
    case 2:
      return "tijera";
  }
}

// Función para determinar al ganador de la ronda.
function getWinner(userChoice, machineChoice) {
  // Comparar las jugadas del usuario y la máquina según las reglas del juego.
  if (userChoice === machineChoice) {
    return "Empate";
  } else if (
    (userChoice === "tijera" && machineChoice === "papel") ||
    (userChoice === "papel" && machineChoice === "piedra") ||
    (userChoice === "piedra" && machineChoice === "tijera")
  ) {
    return "Usuario";
  } else {
    return "Máquina";
  }
}

// Función para actualizar los puntajes en el HTML
function updateScores(userWins, machineWins) {
  // Obtener elementos del DOM para actualizar sus contenidos
  var userScoreElement = document.getElementById("user-score");
  var machineScoreElement = document.getElementById("machine-score");
  var winnerElement = document.getElementById("winner");

  // Actualizar contenidos
  userScoreElement.innerText = `Usuario: ${userWins}`;
  machineScoreElement.innerText = `Máquina: ${machineWins}`;

  // Determinar al ganador final
  if (userWins > machineWins) {
    winnerElement.innerText = "¡Felicidades, ganaste!";
  } else if (machineWins > userWins) {
    winnerElement.innerText = "La máquina gana. ¡Inténtalo de nuevo!";
  } else {
    winnerElement.innerText = "Empate. ¡Bien jugado!";
  }
  ;
}
