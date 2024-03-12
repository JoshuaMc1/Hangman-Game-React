-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 12, 2024 at 06:47 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hangman_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(250) NOT NULL,
  `points` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `words`
--

CREATE TABLE `words` (
  `id` int NOT NULL,
  `word` varchar(250) NOT NULL,
  `clue` text NOT NULL,
  `difficulty` varchar(50) NOT NULL DEFAULT 'easy',
  `time` int NOT NULL DEFAULT '120'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `words`
--

INSERT INTO `words` (`id`, `word`, `clue`, `difficulty`, `time`) VALUES
(1, 'casa', 'Lugar donde vives', 'easy', 150),
(2, 'perro', 'Animal peludo y doméstico', 'easy', 150),
(3, 'gato', 'Animal peludo y doméstico que caza ratones', 'easy', 150),
(4, 'mesa', 'Mueble con una superficie plana y patas', 'easy', 150),
(5, 'silla', 'Mueble con un asiento y un respaldo para una persona', 'easy', 150),
(6, 'cama', 'Mueble donde duermes', 'easy', 150),
(7, 'flor', 'Parte de la planta que tiene colores y olor', 'easy', 150),
(8, 'arbol', 'Planta grande con un tronco y ramas', 'easy', 150),
(9, 'nube', 'Forma blanca que se ve en el cielo', 'easy', 150),
(10, 'sol', 'Astro que da luz y calor a la Tierra', 'easy', 150),
(11, 'ciudad', 'Lugar grande donde vive mucha gente', 'medium', 200),
(12, 'rio', 'Corriente de agua natural que desemboca en el mar', 'medium', 200),
(13, 'montaña', 'Elevación grande de tierra', 'medium', 200),
(14, 'mar', 'Gran masa de agua salada que cubre la mayor parte de la Tierra', 'medium', 200),
(15, 'lago', 'Gran masa de agua dulce rodeada de tierra', 'medium', 200),
(16, 'oceano', 'Gran masa de agua salada que rodea a los continentes', 'medium', 200),
(17, 'pais', 'Territorio con un gobierno propio', 'medium', 200),
(18, 'continente', 'Gran extensión de tierra que separa a los océanos', 'medium', 200),
(19, 'planeta', 'Astro que gira alrededor de una estrella', 'medium', 200),
(20, 'estrella', 'Astro que emite luz y calor', 'medium', 200),
(21, 'amor', 'Sentimiento de afecto hacia otra persona', 'hard', 250),
(22, 'amistad', 'Relación de afecto entre dos personas', 'hard', 250),
(23, 'paz', 'Estado de tranquilidad y silencio', 'hard', 250),
(24, 'felicidad', 'Sentimiento de alegría y satisfacción', 'hard', 250),
(25, 'esperanza', 'Confianza en que algo bueno va a suceder', 'hard', 250),
(26, 'sueño', 'Imaginación que se tiene mientras se duerme', 'hard', 200),
(27, 'libertad', 'Capacidad de hacer lo que uno quiere', 'hard', 250),
(28, 'justicia', 'Principio moral que indica que se debe dar a cada uno lo que le corresponde', 'hard', 250),
(29, 'igualdad', 'Condición de ser iguales', 'hard', 250),
(30, 'respeto', 'Consideración hacia otra persona', 'hard', 250),
(31, 'computadora', 'Máquina electrónica que puede realizar cálculos y procesar información', 'hard', 300),
(32, 'telefono', 'Aparato que permite hablar con otra persona a distancia', 'hard', 300),
(33, 'internet', 'Red global de computadoras que permite compartir información', 'hard', 300),
(34, 'television', 'Aparato que permite ver imágenes y escuchar sonidos a distancia', 'hard', 300),
(35, 'libro', 'Conjunto de hojas escritas que se encuadernan juntas', 'hard', 300),
(36, 'musica', 'Arte que consiste en la combinación de sonidos', 'hard', 300),
(37, 'pelicula', 'Obra cinematográfica', 'hard', 300),
(38, 'deporte', 'Actividad física que se realiza para competir o para divertirse', 'hard', 300),
(39, 'juego', 'Actividad que se realiza para divertirse', 'hard', 300),
(40, 'arte', 'Actividad humana que tiene como fin la creación de obras que expresan ideas, emociones o sensaciones', 'hard', 300),
(41, 'amistad', 'Relación de afecto entre dos personas', 'medium', 200),
(47, 'sueño', 'Imaginación que se tiene mientras se duerme', 'hard', 250),
(49, 'paz', 'Estado de tranquilidad y silencio', 'hard', 205),
(50, 'felicidad', 'Sentimiento de alegría y satisfacción', 'hard', 205),
(56, 'amarillo', 'Color similar al oro', 'easy', 60),
(57, 'jardin', 'Espacio exterior ajardinado', 'easy', 60),
(58, 'computadora', 'Dispositivo electrónico para procesar información', 'easy', 60),
(59, 'plato', 'Utensilio para servir alimentos', 'easy', 60),
(60, 'escuela', 'Centro de enseñanza', 'easy', 60),
(61, 'pera', 'Fruto de forma parecida a la manzana', 'easy', 60),
(62, 'madera', 'Material obtenido de los árboles', 'easy', 60),
(63, 'familia', 'Grupo de personas emparentadas entre sí', 'easy', 60),
(64, 'chocolate', 'Dulce preparado con cacao', 'easy', 60),
(65, 'Aventura', 'Experiencia emocionante', 'medium', 45),
(66, 'Escarabajo', 'Insecto que suele encontrarse en el suelo', 'medium', 50),
(67, 'Jirafa', 'Animal con cuello largo', 'medium', 55),
(68, 'Elefante', 'Animal grande con trompa', 'medium', 60),
(69, 'Computadora', 'Dispositivo electrónico para procesamiento de datos', 'medium', 65),
(70, 'Girasol', 'Planta con flor grande que sigue al sol', 'medium', 70),
(71, 'Helicoptero', 'Aeronave con hélices', 'medium', 75),
(72, 'Pistola', 'Arma de fuego', 'medium', 80),
(73, 'Cascada', 'Agua que cae desde una altura', 'medium', 85),
(74, 'Guitarra', 'Instrumento musical de cuerdas', 'medium', 90),
(75, 'Desierto', 'Lugar árido con poca vegetación', 'medium', 95),
(76, 'Estrella', 'Cuerpo celeste luminoso en el cielo', 'medium', 100),
(77, 'Galleta', 'Dulce horneado para comer', 'medium', 105),
(78, 'Orquesta', 'Grupo de músicos que tocan juntos', 'medium', 110),
(79, 'Cascabel', 'Objeto que suena al moverse', 'medium', 115),
(80, 'Esquizofrenia', 'Trastorno mental caracterizado por pensamientos y percepciones anormales', 'hard', 120),
(81, 'Monasterio', 'Edificio donde viven monjes', 'hard', 125),
(82, 'Tabernaculo', 'Lugar de adoración religiosa', 'hard', 130),
(83, 'Zarcillos', 'Ramas delgadas que las plantas usan para trepar', 'hard', 135),
(84, 'Paralelepipedo', 'Figura geométrica con seis caras', 'hard', 140),
(85, 'Acetabulo', 'Cavidad en forma de copa', 'hard', 145),
(86, 'Heterocigoto', 'Organismo con dos alelos diferentes', 'hard', 150),
(87, 'Espaguetis', 'Tipo de pasta larga y delgada', 'hard', 155),
(88, 'Cacofonia', 'Sonido desagradable', 'hard', 160),
(89, 'Azulejos', 'Piezas de cerámica para cubrir superficies', 'hard', 165),
(90, 'Electroencefalografia', 'Registro gráfico de la actividad eléctrica cerebral', 'hard', 170),
(91, 'Hidroavion', 'Avión capaz de despegar y aterrizar en agua', 'hard', 175),
(92, 'Oximoron', 'Figura retórica que combina dos conceptos opuestos', 'hard', 180),
(93, 'Onomatopeya', 'Palabra que imita un sonido', 'hard', 185),
(94, 'Arteriosclerosis', 'Enfermedad que afecta a las arterias', 'hard', 190),
(95, 'Zooplancton', 'Organismos animales microscópicos que flotan en el agua', 'hard', 195),
(96, 'Xilofono', 'Instrumento musical de percusión', 'hard', 200),
(97, 'Quimera', 'Criatura mitológica con partes de diferentes animales', 'hard', 205),
(98, 'Querubin', 'Ángel joven en la iconografía cristiana', 'hard', 210),
(99, 'Esdrujula', 'Palabra cuya sílaba tónica es la antepenúltima', 'hard', 215),
(100, 'Catarata', 'Caída de agua muy grande', 'medium', 120),
(101, 'Bicicleta', 'Vehículo de dos ruedas', 'medium', 125),
(102, 'Calabaza', 'Fruto de la calabacera', 'medium', 130),
(103, 'Dinosaurio', 'Reptil prehistórico de gran tamaño', 'medium', 135),
(104, 'Eclipse', 'Fenómeno astronómico', 'medium', 140),
(105, 'Dificultad', 'Grado de complejidad de algo', 'hard', 220),
(106, 'Excepcional', 'Que se aparta de lo ordinario', 'hard', 225),
(107, 'Filosofia', 'Estudio de la naturaleza y la realidad', 'hard', 230),
(108, 'Generosidad', 'Calidad de generoso', 'hard', 235),
(109, 'Hospitalidad', 'Calidad de hospitalario', 'hard', 240),
(110, 'Imprescindible', 'Que no se puede prescindir de ello', 'hard', 245),
(111, 'Jubilacion', 'Retiro del trabajo activo', 'hard', 250),
(112, 'Kilometraje', 'Número total de kilómetros recorridos', 'hard', 255),
(113, 'Laberintico', 'Que tiene muchas callejuelas o pasadizos', 'hard', 260),
(114, 'Mecanizacion', 'Introducción de maquinaria en un proceso', 'hard', 265),
(115, 'Necesariamente', 'De manera necesaria', 'hard', 270),
(116, 'Obstaculizar', 'Poner obstáculos', 'hard', 275),
(117, 'Pertinente', 'Que tiene relación con algo', 'hard', 280),
(118, 'Quincuagesimo', 'Que ocupa el lugar número cincuenta en una serie', 'hard', 285),
(119, 'Revolucionario', 'Que produce o promueve una revolución', 'hard', 290);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `words`
--
ALTER TABLE `words`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `words`
--
ALTER TABLE `words`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
