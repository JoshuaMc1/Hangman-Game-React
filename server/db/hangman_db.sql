-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 11, 2024 at 04:06 AM
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

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `points`) VALUES
(1, 'JoshuaMc1', '$2a$10$GDk4IBSNrSu9H8Q0A69vgeAqT/o9lxbqenxLLU1YqT2QHPDVdxz/.', 500),
(4, 'admin', '$2a$10$iXkw6JgAKiGmwxbfFPcVtO/BtDGgRFhUaDQ73xq4GI8.f14BnoESa', 0),
(5, 'monadel1', '$2a$10$EDqKUzbzbHHh6IMjA8vj6ej7ZvEtioMRAZ4dzJ4njwaYEcVoY/M.y', 0),
(6, 'JuanPerez', '$2a$10$6lx2Tb4D.GVoxW5xtAK5See94kIHmo5kZIAdqdJrd1MrteoQb5.fG', 0),
(7, 'EGARCIA', '$2a$10$FCb2KACNSF58QBurEXiM9OiuggsvOLzK8h4PSzedGcA5HfI25.PRC', 0);

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
(8, 'árbol', 'Planta grande con un tronco y ramas', 'easy', 150),
(9, 'nube', 'Forma blanca que se ve en el cielo', 'easy', 150),
(10, 'sol', 'Astro que da luz y calor a la Tierra', 'easy', 150),
(11, 'ciudad', 'Lugar grande donde vive mucha gente', 'medium', 200),
(12, 'río', 'Corriente de agua natural que desemboca en el mar', 'medium', 200),
(13, 'montaña', 'Elevación grande de tierra', 'medium', 200),
(14, 'mar', 'Gran masa de agua salada que cubre la mayor parte de la Tierra', 'medium', 200),
(15, 'lago', 'Gran masa de agua dulce rodeada de tierra', 'medium', 200),
(16, 'océano', 'Gran masa de agua salada que rodea a los continentes', 'medium', 200),
(17, 'país', 'Territorio con un gobierno propio', 'medium', 200),
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
(32, 'teléfono', 'Aparato que permite hablar con otra persona a distancia', 'hard', 300),
(33, 'internet', 'Red global de computadoras que permite compartir información', 'hard', 300),
(34, 'televisión', 'Aparato que permite ver imágenes y escuchar sonidos a distancia', 'hard', 300),
(35, 'libro', 'Conjunto de hojas escritas que se encuadernan juntas', 'hard', 300),
(36, 'música', 'Arte que consiste en la combinación de sonidos', 'hard', 300),
(37, 'película', 'Obra cinematográfica', 'hard', 300),
(38, 'deporte', 'Actividad física que se realiza para competir o para divertirse', 'hard', 300),
(39, 'juego', 'Actividad que se realiza para divertirse', 'hard', 300),
(40, 'arte', 'Actividad humana que tiene como fin la creación de obras que expresan ideas, emociones o sensaciones', 'hard', 300),
(41, 'amistad', 'Relación de afecto entre dos personas', 'medium', 200),
(42, 'libertad', 'Capacidad de hacer lo que uno quiere', 'hard', 250),
(43, 'música', 'Arte que consiste en la combinación de sonidos', 'hard', 300),
(44, 'esperanza', 'Confianza en que algo bueno va a suceder', 'hard', 250),
(45, 'montaña', 'Elevación grande de tierra', 'medium', 200),
(46, 'planeta', 'Astro que gira alrededor de una estrella', 'medium', 200),
(47, 'sueño', 'Imaginación que se tiene mientras se duerme', 'hard', 250),
(48, 'computadora', 'Máquina electrónica que puede realizar cálculos y procesar información', 'hard', 300),
(49, 'paz', 'Estado de tranquilidad y silencio', 'hard', 205),
(50, 'felicidad', 'Sentimiento de alegría y satisfacción', 'hard', 205),
(51, 'justicia', 'Principio moral que indica que se debe dar a cada uno lo que le corresponde', 'hard', 250),
(52, 'igualdad', 'Condición de ser iguales', 'hard', 250),
(53, 'respeto', 'Consideración hacia otra persona', 'hard', 250),
(54, 'libro', 'Conjunto de hojas escritas que se encuadernan juntas', 'hard', 300),
(55, 'película', 'Obra cinematográfica', 'hard', 300);

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
