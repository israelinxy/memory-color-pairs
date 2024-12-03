import "../sass/main.scss";
import Game from "./class/Game";


// Obtiene el elemento del botón de reinicio por su ID
let resetButton = document.getElementById("reset");

// Agrega un evento de clic al botón de reinicio
resetButton.addEventListener("click", () => {
  // Llama a la función estática resetGame de la clase Game para reiniciar el juego
  Game.resetGame();
});


// Obtiene las dimensiones del juego (filas y columnas) llamando a la función estática getRowsCols de la clase Game
let data = Game.getRowsCols();

// Crea una nueva instancia del juego con las dimensiones obtenidas y el ID del elemento del juego
let game = new Game(data.rows, data.cols, "game"); 
