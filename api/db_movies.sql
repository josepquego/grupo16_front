-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-07-2024 a las 17:46:14
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_movies`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `idPelicula` int(11) NOT NULL,
  `titulo` varchar(100) DEFAULT '',
  `duracion` varchar(10) DEFAULT '',
  `genero` varchar(50) DEFAULT '',
  `imagen` varchar(200) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`idPelicula`, `titulo`, `duracion`, `genero`, `imagen`) VALUES
(1, 'El Padrino', '3h 5m', 'Accion', 'aclamada_2.jpg'),
(4, 'Pelicula2', '1h 45min', 'Comedia', 'aclamada_6.jpg'),
(5, 'Pelicula3', '1h 12min', 'Terror', 'aclamada_12.jpg'),
(6, 'Pelicula 4', '2h 12min', 'Comedia', 'aclamada_12.jpg'),
(7, 'Pelicula 5', '1h 45min', 'Drama', 'aclamada_9.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `idUsuario` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `fechaNacimiento` varchar(20) NOT NULL,
  `pais` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`idUsuario`, `nombre`, `apellido`, `email`, `pass`, `fechaNacimiento`, `pais`) VALUES
(1, 'Julie', 'Vera', 'julie@gmail.com', 'Movie1234', '', 'Argentina'),
(2, 'Josep', 'Quego', 'josep@gmail.com', 'Movie1234', '', 'Argentina'),
(3, 'Cristian', 'Del Carlo', 'cristian@gmail.com', 'Movie1234', '', 'Argentina'),
(4, 'Hernan', 'Peralta', 'hernan@gmail.com', 'Movie1234', '', 'Argentina'),
(5, 'Nombre', 'Apellido', 'puebas@email.com', '1234', '2024-07-11', 'AR');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`idPelicula`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `idPelicula` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
