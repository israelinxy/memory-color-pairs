class Timer {
    min;
    sec;
    ms;
    count;
    malt;
    salt;
    msalt;
    idElement;
  
    // Constructor de la clase Timer.
    constructor(idElement = "timer") {
      console.log("Creamos un Timer"); // Mensaje de registro que indica la creación del Timer
      this.idElement = idElement;
  
      // Verificar si hay datos del temporizador en localStorage
      if (localStorage.getItem("timer") !== null) {
        // Recuperar el estado del temporizador desde localStorage
        let timerFromLocalStorage = JSON.parse(localStorage.getItem("timer"));
        this.sec = parseInt(timerFromLocalStorage.sec);
        this.min = parseInt(timerFromLocalStorage.min); // Usar minutos de localStorage
        this.ms = parseInt(timerFromLocalStorage.ms);
      } else {
        // Inicializar los valores del temporizador a 0
        this.ms = 0;
        this.min = 0;
        this.sec = 0;
      }
    }
  
    // Inicia el temporizador.
    start() {
      this.count = setInterval(() => {
        if (this.ms == 100) {
          this.ms = 0;
          if (this.sec == 60) {
            this.sec = 0;
            this.min++;
          } else {
            // Guardar el estado del temporizador en localStorage cada 2 segundos
            if (this.sec % 2 == 0) {
              let timerObject = {
                sec: this.sec,
                ms: this.ms,
                min: this.min, // Incluir minutos en el objeto guardado
              };
              localStorage.setItem("timer", JSON.stringify(timerObject));
            }
            this.sec++;
          }
        } else {
          this.ms++;
        }
  
        // Formatear los valores del temporizador con ceros a la izquierda
        this.malt = this.pad(this.min);
        this.salt = this.pad(this.sec);
        this.msalt = this.pad(this.ms);
  
        // Actualizar la visualización del temporizador
        this.update(this.malt + ":" + this.salt + ":" + this.msalt);
      }, 10);
    }
  
    // Detiene el temporizador.
    stop() {
      clearInterval(this.count);
    }
  
    // Actualiza la visualización del temporizador en el HTML.
    update(txt) {
      let temp = document.getElementById(this.idElement);
      temp.firstChild.nodeValue = txt;
    }
  
    // Rellena un número con un cero a la izquierda si es menor que 10.
    pad(time) {
      let temp;
      if (time < 10) {
        temp = "0" + time;
      } else {
        temp = time;
      }
      return temp;
    }
  }
  
  export default Timer;
