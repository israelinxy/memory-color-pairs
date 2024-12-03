class Box {
  // Propiedades privadas
  #col;
  #row;
  #color;
  #free;
  #open;
  #element;

  // Constructor de la clase Box
  constructor(row, col, color, free = true, open = false) {
    this.#col = col;
    this.#row = row;
    this.#color = color;
    this.#free = free;
    this.#open = open;
  }

  // Getters para acceder a las propiedades privadas
  get col() {
    return this.#col;
  }

  get row() {
    return this.#row;
  }

  get open() {
    return this.#open;
  }

  get free() {
    return this.#free;
  }

  get color() {
    return this.#color;
  }

  // Setters para modificar propiedades específicas
  set element(element) {
    this.#element = element;
  }

  set free(newValue) {
    this.#free = newValue;
  }

  // Añade un evento de clic a la caja. Cambia el color de fondo y marca la caja como abierta al hacer clic
  addEventClick() {
    if (this.#element) {
      this.#element.addEventListener("click", (e) => {
        if (!this.#open) {
          this.#element.style.backgroundColor = this.#color;
          this.#open = true;
          console.log("Haz hecho click en una tarjeta");
        }
        return false;
      });
    }
  }

  // Restablece el color de la caja a negro y la marca como cerrada
  resetColor() {
    this.#element.style.backgroundColor = "black";
    this.#open = false;
  }
}

export default Box;
