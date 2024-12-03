import { shuffleArray } from "../utils/utils";
import Box from "./Box";
import Timer from "./Timer";

class Game {
  // Propiedades privadas
  #rows;
  #cols;
  #idElement;
  #boxes;
  element;
  timer;

  // Constructor de la clase Game
  constructor(rows, cols, idElement = "game") {
    // Inicialización de propiedades
    this.#rows = rows;
    this.#cols = cols;
    this.#idElement = idElement;
    this.element = document.getElementById(idElement);
    this.#boxes = [];

    // Configuración inicial del juego
    this.createBoxes();
    this.paintBoxes();
    console.log("Se ha creado un objeto de tipo Game");

    // Evento para comprobar cajas abiertas
    this.element.addEventListener("click", () => {
      this.checkOpenBoxes();
    });

    this.initTimer();
  }

  // Getters
  get cols() {
    return this.#cols;
  }

  get rows() {
    return this.#rows;
  }

  // Comprueba las cajas abiertas y maneja la lógica del juego
  checkOpenBoxes() {
    let nOpenBoxes = this.#boxes.filter((box) => box.open && box.free);
    if (nOpenBoxes.length == 2) {
      if (nOpenBoxes[0].color === nOpenBoxes[1].color) {
        nOpenBoxes.map((box) => {
          box.free = false;
        });
        this.arrayBoxesToLocalStorage();
      } else {
        setTimeout(() => {
          nOpenBoxes.map((box) => {
            box.resetColor();
          });
        }, 500);
      }
    } else {
      this.arrayBoxesToLocalStorage();
    }
    this.checkFinishGame();
  }

  // Verifica si el juego ha terminado
  checkFinishGame() {
    let freeBox = this.#boxes.filter((box) => box.free);
    if (freeBox.length === 0) {
      setTimeout(() => {
        this.timer.stop();
        alert("Juego finalizado");
      }, 200);
    }
  }

  // Crea colores aleatorios para las cajas
  createRandomColors() {
    let randomColors = [];
    for (let index = 0; index < (this.#cols * this.#rows) / 2; index++) {
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      let color = `rgb(${red}, ${green}, ${blue})`;
      randomColors.push(color);
    }
    randomColors = [...randomColors, ...randomColors];
    shuffleArray(randomColors);
    return randomColors;
  }

  // Crea las cajas del juego
  createBoxes() {
    this.#boxes = [];
    // Si hay datos en LocalStorage, creo las boxes desde ahí, si no las genero normalmente
    if (localStorage.getItem("boxes") !== null) {
      let boxesFromLocalStorage = JSON.parse(localStorage.getItem("boxes"));
      boxesFromLocalStorage.map((box) => {
        let newBox = new Box(box.row, box.col, box.color, box.free, box.open);
        this.#boxes.push(newBox);
      });
    } else {
      let randomColors = this.createRandomColors();
      for (let row = 0; row < this.#rows; row++) {
        for (let col = 0; col < this.#cols; col++) {
          let color = randomColors.shift();
          let newBox = new Box(row, col, color);
          this.#boxes.push(newBox);
        }
      }
      this.arrayBoxesToLocalStorage();
    }
  }

  // Guarda las cajas en LocalStorage
  arrayBoxesToLocalStorage() {
    let arrayBoxesToLocalStorage = this.#boxes.map((box) => {
      return {
        row: box.row,
        col: box.col,
        color: box.color,
        free: box.free,
        open: box.open,
      };
    });
    localStorage.setItem("boxes", JSON.stringify(arrayBoxesToLocalStorage));
  }

  // Pinta las cajas del DOM
  paintBoxes() {
    let header = document.createElement("header");
    header.setAttribute("id", "boxHeader");

    this.element.appendChild(header);

    let boxContainer = document.createElement("div");
    boxContainer.setAttribute("id", "boxContainer");
    this.element.appendChild(boxContainer);

    this.setCSSBoxTemplates();
    this.#boxes.map((box) => {
      let newBoxDiv = document.createElement("div");
      newBoxDiv.classList.add("box");
      if (!box.free || box.open) {
        newBoxDiv.style.backgroundColor = box.color;
      }
      box.element = newBoxDiv;
      box.addEventClick();
      boxContainer.appendChild(newBoxDiv);
    });
  }

  // Inicializa el temporizador
  initTimer() {
    let timerContainer = document.createElement("h2");
    timerContainer.setAttribute("id", "timerContainer");
    timerContainer.innerHTML = '<span id="timer">00:00:00</span>';

    let header = document.getElementById("boxHeader");
    header.appendChild(timerContainer);
    this.timer = new Timer();
    this.timer.start();
  }

  // Establece las plantillas CSS para las cajas
  setCSSBoxTemplates() {
    let boxContainer = document.getElementById("boxContainer");
    boxContainer.style.gridTemplateColumns = `repeat(${this.cols}, 1fr)`;
    boxContainer.style.gridTemplateRows = `repeat(${this.rows}, 1fr)`;
  }

  // Obtiene el numero de filas y columnas del juego
  static getRowsCols() {
    let rows, cols;

    if (
      localStorage.getItem("rows") !== null &&
      localStorage.getItem("cols") !== null
    ) {
      rows = parseInt(localStorage.getItem("rows"));
      cols = parseInt(localStorage.getItem("cols"));
    } else {
      rows = parseInt(prompt("Introduzca el número de filas"));
      cols = parseInt(prompt("Introduzca el número de columnas"));
      while ((rows * cols) % 2 !== 0) {
        alert(
          "El número de cartas deben ser par. Vuelva a introducir los datos."
        );
        rows = parseInt(prompt("Introduzca el número de filas"));
        cols = parseInt(prompt("Introduzca el número de columnas"));
      }

      localStorage.setItem("rows", rows);
      localStorage.setItem("cols", cols);
    }

    return {
      rows: rows,
      cols: cols,
    };
  }

  // Reinicia el juego
  static resetGame() {
    localStorage.removeItem("cols");
    localStorage.removeItem("rows");
    localStorage.removeItem("boxes");
    localStorage.removeItem("timer");
    location.reload();
  }
}

export default Game;
