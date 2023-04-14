-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-03-2023 a las 17:54:28
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `agenciadeviajes`
--
CREATE DATABASE IF NOT EXISTS `agenciadeviajes` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `agenciadeviajes`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `destinations`
--
-- Creación: 24-03-2023 a las 14:59:44
-- Última actualización: 24-03-2023 a las 15:07:22
--

CREATE TABLE `destinations` (
  `destination_id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `ranking` int(11) NOT NULL,
  `season` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- RELACIONES PARA LA TABLA `destinations`:
--

--
-- Volcado de datos para la tabla `destinations`
--

INSERT INTO `destinations` (`destination_id`, `name`, `ranking`, `season`) VALUES
(6, 'Salta', 8, 'Verano'),
(7, 'Bariloche', 9, 'Invierno'),
(8, 'Córdoba', 8, 'Otoño'),
(9, 'Iguazú', 7, 'Primavera'),
(10, 'Tucumán', 6, 'Invierno'),
(11, 'Chalten', 8, 'Primavera'),
(16, 'Tierra del Fuego', 8, 'Verano'),
(17, 'Mendoza', 9, 'Primavera'),
(18, 'Catamarca', 8, 'Verano'),
(19, 'Chaco', 8, 'Verano');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--
-- Creación: 24-03-2023 a las 14:59:44
-- Última actualización: 24-03-2023 a las 16:40:25
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `descripcionImagen` varchar(256) NOT NULL,
  `imgURL` varchar(256) NOT NULL,
  `destination_id` int(11) NOT NULL,
  `staying` int(11) NOT NULL,
  `price` float NOT NULL,
  `offer` int(11) NOT NULL,
  `checkIn` date NOT NULL,
  `checkOut` date NOT NULL,
  `lodging` varchar(50) NOT NULL,
  `vehicle_id` int(11) NOT NULL,
  `tour` varchar(256) NOT NULL,
  `tour2` varchar(256) NOT NULL,
  `creationDate` date NOT NULL DEFAULT current_timestamp(),
  `dueDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- RELACIONES PARA LA TABLA `products`:
--   `destination_id`
--       `destinations` -> `destination_id`
--   `vehicle_id`
--       `vehicles` -> `vehicle_id`
--

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`product_id`, `descripcionImagen`, `imgURL`, `destination_id`, `staying`, `price`, `offer`, `checkIn`, `checkOut`, `lodging`, `vehicle_id`, `tour`, `tour2`, `creationDate`, `dueDate`) VALUES
(19, 'Salta es una ciudad del noroeste de Argentina, capital de la provincia homónima. Se encuentra ubicada en el sector norte del Valle de Lerma. Su superficie aproximada es de 120 km². Es también la ciudad más poblada de la provincia, la segunda del NOA y la s', 'img-1679672990105.jpg', 6, 10, 30000, 10, '2023-03-31', '2023-04-09', 'Salta la Linda', 9, 'Tren de las Nubes', 'Salinas Grandes', '2023-03-24', '2023-05-24'),
(20, 'La ciudad de Mendoza en el pasado fue conocida a nivel nacional como «la ciudad más limpia del país.El clima, en las partes más bajas, es continental semiárido. Esto implica la existencia de veranos muy secos e inviernos más húmedos.', 'img-1679673338341.jpg', 17, 15, 50000, 5, '2023-04-01', '2023-04-14', 'Hospedaje los Viñedos', 10, 'Dique Potrerillos', 'Aconcagua', '2023-03-24', '2023-05-24'),
(21, 'La ciudad de Ushuaia, capital de la Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur, se ubica en las costas del canal Beagle, rodeada por la cadena montañosa Martial. Es considerada la más austral del mundo y presenta un relieve irregula', 'img-1679674275082.jpg', 16, 9, 60000, 5, '2023-07-01', '2023-07-08', 'Hotel del fin del mundo', 10, 'Tren del fin del mundo', 'Cerro castor', '2023-03-24', '2023-08-01'),
(22, 'El Chaltén es un municipio del oeste de la provincia de Santa Cruz, Argentina. Está ubicada en el sur de la cordillera de los Andes, en el extremo sudoeste de la Patagonia argentina, al pie del Cerro Fitz Roy -o Chaltén- y a orillas del Río de las Vueltas.', 'img-1679674495869.jpg', 11, 10, 80000, 10, '2023-05-01', '2023-05-09', 'Hotel Traco', 11, 'Glaciar Huemul', 'Laguna Torre', '2023-03-24', '2023-07-01'),
(23, 'Es dueña de un encanto natural, ofrece la magia de los contrastes y la diversidad en sus paisajes: llanuras y montañas, climas secos y húmedos, selvas exuberantes y tierras áridas, modernas ciudades, apacibles pueblos y ruinas indígenas.', 'img-1679674683717.webp', 10, 14, 30000, 10, '2023-06-01', '2023-06-13', 'Hosteria La casita de tucumán', 12, 'Tafí del Valle', 'La casita de Tucuman', '2023-03-24', '2023-09-24'),
(24, 'Ven a renovar tus energías en una aventura que quedará en tu memoria. Visitarás el lado argentino de las Cataratas del Iguazú y sentirás de cerca la intensidad de la naturaleza.', 'img-1679674929990.jpg', 9, 4, 15000, 10, '2023-05-01', '2023-05-03', 'Hotel cataratas', 9, 'Tour en barco por Gran Aventura y Cataratas Argentinas', 'Recorrido por las ruinas de San Ignacio y las minas de Wanda', '2023-03-24', '2023-08-01'),
(25, 'La Provincia de Córdoba es un destino ideal para experimentar las más diversas sensaciones que a un viajero le puedan provocar placer. Con una indeleble impronta cultural e histórica, nuestro territorio combina tradición, modernidad y una excepcional rique', 'img-1679675406225.jpg', 8, 10, 45000, 10, '2023-06-01', '2023-06-09', 'Hotel Cumbrecita', 11, 'Cerro Uritorco', 'El champaquí', '2023-03-24', '2023-07-01'),
(26, 'La ciudad de San Carlos de Bariloche es una de las ciudades argentinas más bellas de los Andes Patagónicos, el destino está preparado para animarse al kayak, rafting, canopy, bicicleta, cabalgatas, buceo, y caminatas.', 'img-1679675580695.jpg', 7, 20, 80000, 5, '2023-07-01', '2023-07-19', 'Hotel 7 lagos', 11, 'Tarde en Parque Nacional Nahuel Huapi', 'Senderismo Cerro Tronador', '2023-03-24', '2023-10-01'),
(27, 'La provincia ostenta entre sus atractivos naturales a varias montañas que forman la ruta de los \"Seismiles\", todos picos de más de 6000 metros de altura con nieves eternas. A estos se suman lagunas de altura y los volcanes más elevados del mundo, los que a', 'img-1679675844182.JPG', 18, 10, 60000, 10, '2023-05-01', '2023-05-09', 'Hotel Catamarca', 11, 'Trekking al Manchao', 'Ruta al Adobe', '2023-03-24', '2023-10-01'),
(28, 'La provincia de Chaco, se encuentra en el norte de la República Argentina. Tiene una superficie de 99.633 kilómetros cuadrados y una población de 1.053.466 habitantes según el Censo 2010. La Provincia cuenta actualmente con 25 departamentos.', 'img-1679676025398.jpg', 19, 10, 50000, 10, '2023-05-01', '2023-05-09', 'Hotel Pantanos', 11, 'Museos de las esculturas', 'El impenetrable', '2023-03-24', '2023-10-01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userproducts`
--
-- Creación: 24-03-2023 a las 16:41:46
-- Última actualización: 24-03-2023 a las 16:46:40
--

CREATE TABLE `userproducts` (
  `user_products_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `process_date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- RELACIONES PARA LA TABLA `userproducts`:
--   `user_id`
--       `users` -> `user_id`
--   `product_id`
--       `products` -> `product_id`
--

--
-- Volcado de datos para la tabla `userproducts`
--

INSERT INTO `userproducts` (`user_products_id`, `product_id`, `user_id`, `process_date`) VALUES
(6, 19, 13, '2023-03-24'),
(7, 20, 14, '2023-03-24'),
(8, 21, 15, '2023-03-24'),
(9, 22, 16, '2023-03-24'),
(10, 23, 17, '2023-03-24'),
(11, 24, 18, '2023-03-24'),
(12, 25, 21, '2023-03-24'),
(14, 20, 13, '2023-03-24'),
(15, 28, 19, '2023-03-24'),
(16, 22, 22, '2023-03-24'),
(17, 27, 21, '2023-03-24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--
-- Creación: 24-03-2023 a las 14:59:44
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `country` varchar(50) NOT NULL,
  `phoneNumber` bigint(20) DEFAULT NULL,
  `password` varchar(256) NOT NULL,
  `profile` varchar(50) NOT NULL,
  `avatar` varchar(256) NOT NULL,
  `registration_date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- RELACIONES PARA LA TABLA `users`:
--

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `country`, `phoneNumber`, `password`, `profile`, `avatar`, `registration_date`) VALUES
(13, 'Guillermo', 'guille@gmail.com', 'Argentina', 2245178652, '$2a$10$4M2ZdmU3/QXgrjLinBGn6.LlSNyI8qbBplPOmZpBE8Az./HUgiYiS', 'Administrador', 'img-1676081055384.jpg', '2023-03-24'),
(14, 'Facundo', 'facu@gmail.com', 'Argentina', 2215372818, '$2a$10$wqEI5d5w7dhTUgBSQLuBfeCIbpynmVJEWBcz.yEslgS.dD2w89.tO', 'Administrador', 'el_pato_lucas.jpg', '2023-03-24'),
(15, 'Roberto', 'robert@gmail.com', 'Argentina', 2236569887, '$2a$10$LTSo74856sNZvv2dHHGvc.89vHCxy08Tp2GekgAkjNQ7g8hdYnyh6', 'Administrador', 'el_pato_lucas.jpg', '2023-03-24'),
(16, 'Magali', 'maga@gmail.com', 'Argentina', 2236569887, '$2a$10$k8z2AGY2E7DbwBtIexHMtu1ilcrS8scUg4QAXL6cLeqBBffXjd.qq', 'Administrador', 'el_pato_lucas.jpg', '2023-03-24'),
(17, 'Florencia', 'flor@gmail.com', 'Argentina', 2245178652, '$2a$10$cy/5MolIZDhZJ53gt5PPWeEB0gK5Db6VGbeSrXCms.tUCfZgrAnrG', 'Administrador', 'el_pato_lucas.jpg', '2023-03-24'),
(18, 'Damian', 'dami@gmail.com', 'Argentina', 2236569887, '$2a$10$VG6msgOf8W9AsvYRA0ZWGO0OrBRCNB/9CsFImFxMSN8l3NkXtOwoy', 'Cliente', 'el_pato_lucas.jpg', '2023-03-24'),
(19, 'Diego', 'diego@gmail.com', 'Argentina', 2215369874, '$2a$10$K3Z7lRx.XVII/d7/z77Ei.fWZ8Z/BiXy85mjlbkvQtLnZXPo6BY.a', 'Cliente', 'gerald.png', '2023-03-24'),
(20, 'Agostina', 'agos@gmail.com', 'Argentina', 2245332158, '$2a$10$GLDbXx.pkqXDDNhnNaJhkesTuhTMrQ22Ei7rrYlm7ybO2MRRBoRky', 'Cliente', 'helga.jpg', '2023-03-24'),
(21, 'Maximiliano', 'maxi@gmail.com', 'Argentina', 2215369874, '$2a$10$Kc/dkcpOnOwwNa0GHb28xOpTKKKcpd2W2HVexPD/lYllAVsbyx3m6', 'Cliente', 'arnold.png', '2023-03-24'),
(22, 'Luis', 'luis@gmail.com', 'Argentina', 2235688751, '$2a$10$ve1NvW5koisdmYGLEmAt4e1.ydUUvAoUaBPAjoFdW1OSZf1RyJZyu', 'Cliente', 'otto.jpg', '2023-03-24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehicles`
--
-- Creación: 24-03-2023 a las 14:59:44
-- Última actualización: 24-03-2023 a las 15:12:30
--

CREATE TABLE `vehicles` (
  `vehicle_id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `type` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- RELACIONES PARA LA TABLA `vehicles`:
--

--
-- Volcado de datos para la tabla `vehicles`
--

INSERT INTO `vehicles` (`vehicle_id`, `name`, `type`, `brand`) VALUES
(9, 'Combi', 'Combi', 'Mercedes Benz'),
(10, 'Megane', 'Auto', 'Renault'),
(11, 'Partner', 'Camioneta', 'Peugeot'),
(12, 'Twingo', 'Auto', 'Renault');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `destinations`
--
ALTER TABLE `destinations`
  ADD PRIMARY KEY (`destination_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `destionation_id` (`destination_id`),
  ADD KEY `vehicle_id` (`vehicle_id`);

--
-- Indices de la tabla `userproducts`
--
ALTER TABLE `userproducts`
  ADD PRIMARY KEY (`user_products_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id_2` (`product_id`),
  ADD KEY `user_id_2` (`user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indices de la tabla `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`vehicle_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `destinations`
--
ALTER TABLE `destinations`
  MODIFY `destination_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `userproducts`
--
ALTER TABLE `userproducts`
  MODIFY `user_products_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `vehicle_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`destination_id`) REFERENCES `destinations` (`destination_id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`vehicle_id`);

--
-- Filtros para la tabla `userproducts`
--
ALTER TABLE `userproducts`
  ADD CONSTRAINT `userproducts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `userproducts_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
