# Juego de Memoria: Encuentra las Parejas de Colores

## Descripción
Este es un juego de memoria interactivo donde los jugadores deben encontrar parejas de cuadrados del mismo color en una cuadrícula. El juego está desarrollado con JavaScript vanilla y utiliza Vite como herramienta de construcción.

![Imagen del juego](encuentra-las-parejas.png)


## Características
- Cuadrícula de cuadrados con colores ocultos
- Temporizador para medir el tiempo de juego
- Almacenamiento local para guardar el progreso del juego
- Diseño responsive para diferentes dispositivos

## Tecnologías Utilizadas
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## Instalación
1. Clona este repositorio:
   ```
   git clone https://github.com/israelinxy/memory-color-pairs.git
   ```
2. Navega al directorio del proyecto:
   ```
   cd memory-color-pairs
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Uso
Para iniciar el servidor de desarrollo:
```
npm run dev
```

Para construir el proyecto para producción:
```
npm run build
```

Para previsualizar la versión de producción:
```
npm run preview
```

## Estructura del Proyecto
- `index.html`: Página principal del juego
- `sass/`: Archivos SCSS
- `src/`: Directorio de código fuente
  - `main.js`: Punto de entrada de la aplicación
  - `game.js`: Lógica principal del juego
  - `box.js`: Clase para los cuadrados individuales
  - `timer.js`: Clase para el temporizador
  - `utils/`: Utilidades y funciones auxiliares

## Cómo Jugar
1. Al iniciar el juego, se te pedirá que ingreses el número de filas y columnas para la cuadrícula.
2. Haz clic en los cuadrados para revelar sus colores.
3. Intenta encontrar todas las parejas de colores en el menor tiempo posible.
4. Si fallas al encontrar una pareja, los cuadrados se voltearán de nuevo.
5. El juego termina cuando todas las parejas han sido encontradas.

## Contribuciones 🤝

Las contribuciones son bienvenidas. Para problemas, ideas o nuevas características, por favor abre un issue o un pull request.

## Contacto 📫

¿Necesitas un diseño web personalizado? Contáctame:

[![Gmail](https://img.shields.io/badge/Email%20personal-white?style=for-the-badge&logo=gmail&logoColor=white&label=israelcolladom%40gmail.com&labelColor=black&color=%23EA4335)](mailto:israelcolladom@gmail.com)

## Licencia 📜

Este proyecto está bajo la licencia [MIT](LICENSE).
