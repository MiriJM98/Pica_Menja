-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-05-2022 a las 09:25:14
-- Versión del servidor: 8.0.27
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `picamenjaproves`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentaris`
--

CREATE TABLE `comentaris` (
  `id_comentari` int NOT NULL,
  `comentari` text,
  `data` date DEFAULT NULL,
  `id_usuari` int NOT NULL,
  `id_restaurant` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `comentaris`
--

INSERT INTO `comentaris` (`id_comentari`, `comentari`, `data`, `id_usuari`, `id_restaurant`) VALUES
(1, 'Un restaurante maravilloso. Me encantó el arroz brut.', '2022-04-06', 2, 1),
(2, 'Un restaurante muy elegante y con productos de primera calidad. Pienso repetir.', '2022-04-07', 3, 1),
(3, 'Italiano exquisito. Merece la pena.', '2022-04-07', 2, 2),
(4, 'La pasta estaba deliciosa.', '2022-04-07', 3, 2),
(5, 'Me gustó mucho. El pollo agridulce estaba buenísimo y el personal fue muy atento.', '2022-04-07', 2, 3),
(6, 'No soy aficionado del chino pero he de admitir que estaba bueno. Recomendado.', '2022-04-02', 3, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fotos`
--

CREATE TABLE `fotos` (
  `id_restaurant` int NOT NULL,
  `id_foto` int NOT NULL,
  `foto` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `fotos`
--

INSERT INTO `fotos` (`id_restaurant`, `id_foto`, `foto`) VALUES
(1, 1, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant1_1650976310.jpg'),
(1, 2, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant2_1650976340.png'),
(1, 3, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant3_1650976602.jpg'),
(1, 4, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant4_1650976608.jpg'),
(1, 5, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant5_1650976613.jpg'),
(1, 6, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant6_1650976619.jpg'),
(1, 7, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant7_1650976641.jpg'),
(1, 8, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant8_1650976648.jpg'),
(1, 9, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant9_1650976662.jpg'),
(1, 10, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant10_1650976689.jpg'),
(1, 11, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant11_1650976698.jpg'),
(1, 12, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant12_1650976704.jpg'),
(1, 13, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant13_1650976711.jpg'),
(1, 14, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant14_1650976716.jpg'),
(2, 15, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant15_1650976878.jpg'),
(2, 16, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant16_1650976920.jpg'),
(2, 17, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant17_1650976930.jpg'),
(2, 18, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant18_1650976938.jpg'),
(2, 19, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant19_1650976945.jpg'),
(2, 20, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant20_1650976952.jpg'),
(2, 22, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant22_1650976975.jpg'),
(2, 23, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant23_1650976982.jpg'),
(2, 24, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant24_1650976988.jpg'),
(3, 25, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant25_1650977130.jpg'),
(3, 26, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant26_1650977144.jpg'),
(3, 27, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant27_1650977149.jpg'),
(3, 28, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant28_1650977154.jpg'),
(3, 29, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant29_1650977160.jpg'),
(3, 30, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant30_1650977166.jpg'),
(3, 31, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant31_1650977171.jpg'),
(3, 32, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant32_1650977178.jpg'),
(3, 33, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant33_1650977186.jpg'),
(3, 34, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant34_1650977192.jpg'),
(3, 35, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant35_1650977198.jpg'),
(3, 36, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant36_1650977205.jpg'),
(4, 37, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant37_1650977647.png'),
(4, 38, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant38_1650977653.jpg'),
(4, 39, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant39_1650977658.jpg'),
(4, 40, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant40_1650977664.png'),
(4, 41, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant41_1650977671.png'),
(4, 42, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant42_1650977678.png'),
(4, 43, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant43_1650977685.png'),
(4, 44, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant44_1650977690.png'),
(4, 45, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant45_1650977696.png'),
(4, 46, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant46_1650977702.png'),
(4, 47, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant47_1650977707.jpg'),
(5, 48, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant48_1650978649.png'),
(5, 49, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant49_1650978655.jpg'),
(5, 50, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant50_1650978661.png'),
(5, 51, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant51_1650978666.png'),
(5, 52, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant52_1650978674.png'),
(5, 53, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant53_1650978679.png'),
(5, 54, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant54_1650978685.png'),
(5, 55, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant55_1650978692.png'),
(5, 56, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant56_1650978697.png'),
(5, 57, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant57_1650978703.png'),
(5, 58, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant58_1650978709.png'),
(5, 59, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant59_1650978715.png'),
(5, 60, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant60_1650978721.png'),
(6, 61, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant61_1650978768.png'),
(6, 62, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant62_1650978785.jpg'),
(6, 63, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant63_1650978791.jpg'),
(6, 64, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant64_1650978796.jpg'),
(6, 65, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant65_1650978802.jpg'),
(6, 66, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant66_1650978807.jpg'),
(6, 67, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant67_1650978812.jpg'),
(6, 68, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant68_1650978816.jpg'),
(7, 69, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant69_1650978889.jpg'),
(7, 70, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant70_1650978894.jpg'),
(7, 71, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant71_1650978898.png'),
(7, 72, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant72_1650978903.png'),
(7, 73, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant73_1650978908.png'),
(7, 74, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant74_1650978916.png'),
(7, 75, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant75_1650978922.png'),
(7, 76, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant76_1650978927.png'),
(7, 77, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant77_1650978932.jpg'),
(8, 78, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant78_1650981776.png'),
(8, 79, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant79_1650981782.png'),
(8, 80, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant80_1650981787.jpg'),
(8, 81, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant81_1650981792.jpg'),
(8, 82, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant82_1650981796.jpg'),
(8, 83, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant83_1650981801.png'),
(8, 84, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant84_1650981807.png'),
(8, 85, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant85_1650981811.png'),
(9, 86, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant86_1650981842.jpg'),
(9, 87, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant87_1650981847.jpg'),
(9, 88, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant88_1650981852.jpg'),
(9, 89, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant89_1650981857.jpg'),
(9, 90, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant90_1650981862.jpg'),
(9, 91, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant91_1650981867.jpg'),
(9, 92, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant92_1650981873.jpg'),
(9, 93, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant93_1650981878.jpg'),
(9, 94, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant94_1650981887.jpg'),
(9, 95, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant95_1650981891.png'),
(10, 96, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant96_1650981973.jpg'),
(10, 97, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant97_1650981979.jpg'),
(10, 98, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant98_1650981984.jpg'),
(10, 99, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant99_1650981989.jpg'),
(10, 100, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant100_1650981994.jpg'),
(10, 101, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant101_1650981999.jpg'),
(10, 102, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant102_1650982004.jpg'),
(10, 103, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant103_1650982009.jpg'),
(10, 104, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant104_1650982014.jpg'),
(10, 105, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant105_1650982019.jpg'),
(11, 106, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant106_1650982052.jpg'),
(11, 107, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant107_1650982057.jpg'),
(11, 108, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant108_1650982062.jpg'),
(11, 109, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant109_1650982067.jpg'),
(11, 110, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant110_1650982073.jpg'),
(11, 111, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant111_1650982077.jpg'),
(11, 112, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant112_1650982082.jpg'),
(12, 113, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant113_1650982108.jpg'),
(12, 114, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant114_1650982113.jpg'),
(12, 115, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant115_1650982118.jpg'),
(12, 116, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant116_1650982125.jpg'),
(12, 117, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant117_1650982130.jpg'),
(12, 118, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant118_1650982135.jpg'),
(12, 119, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant119_1650982140.jpg'),
(12, 120, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant120_1650982145.jpg'),
(12, 121, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant121_1650982151.jpg'),
(12, 122, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant122_1650982156.jpg'),
(12, 123, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant123_1650982162.jpg'),
(12, 124, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant124_1650982167.jpg'),
(12, 125, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant125_1650982173.jpg'),
(13, 126, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant126_1650982232.jpg'),
(13, 127, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant127_1650982237.jpg'),
(13, 128, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant128_1650982241.jpg'),
(13, 129, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant129_1650982247.jpg'),
(13, 130, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant130_1650982252.jpg'),
(13, 131, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant131_1650982256.jpg'),
(14, 132, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant132_1650982288.jpg'),
(14, 133, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant133_1650982293.jpg'),
(14, 134, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant134_1650982297.jpg'),
(14, 135, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant135_1650982302.jpg'),
(14, 136, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant136_1650982306.png'),
(14, 137, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant137_1650982311.png'),
(15, 138, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant138_1650982387.jpg'),
(15, 139, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant139_1650982392.jpg'),
(15, 140, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant140_1650982396.jpg'),
(15, 141, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant141_1650982402.jpg'),
(15, 142, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant142_1650982406.jpg'),
(15, 143, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant143_1650982412.jpg'),
(15, 144, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant144_1650982417.jpg'),
(15, 145, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant145_1650982421.jpg'),
(15, 146, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant146_1650982426.jpg'),
(15, 147, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant147_1650982431.jpg'),
(16, 148, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant148_1650982579.jpg'),
(16, 149, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant149_1650982584.jpg'),
(16, 150, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant150_1650982589.jpg'),
(16, 151, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant151_1650982627.png'),
(16, 152, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant152_1650982634.png'),
(16, 153, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant153_1650982641.png'),
(16, 154, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant154_1650982646.png'),
(16, 155, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant155_1650982651.png'),
(16, 156, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant156_1650982656.png'),
(16, 157, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant157_1650982661.png'),
(16, 158, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant158_1650982796.png'),
(17, 159, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant159_1650982871.jpg'),
(17, 160, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant160_1650982881.jpg'),
(17, 161, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant161_1650982885.jpg'),
(17, 162, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant162_1650982890.jpg'),
(17, 163, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant163_1650982895.jpg'),
(17, 164, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant164_1650982900.jpg'),
(17, 165, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant165_1650982905.png'),
(17, 166, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant166_1650982948.png'),
(17, 167, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant167_1650982952.png'),
(17, 168, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant168_1650983210.png'),
(18, 169, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant169_1650983248.jpg'),
(18, 170, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant170_1650983256.jpg'),
(18, 171, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant171_1650983261.jpg'),
(18, 172, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant172_1650983266.jpg'),
(18, 173, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant173_1650983270.jpg'),
(18, 174, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant174_1650983274.jpg'),
(19, 175, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant175_1650983301.png'),
(19, 176, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant176_1650983307.png'),
(19, 177, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant177_1650983311.png'),
(19, 178, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant178_1650983315.png'),
(19, 179, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant179_1650983320.png'),
(19, 180, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant180_1650983328.png'),
(19, 181, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant181_1650983332.jpg'),
(19, 182, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant182_1650983337.jpg'),
(19, 183, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant183_1650983342.png'),
(20, 7, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant7_1650976641.jpg'),
(20, 184, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant184_1650983362.png'),
(20, 185, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant185_1650983366.png'),
(20, 186, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant186_1650983370.png'),
(20, 187, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant187_1650983374.png'),
(20, 188, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant188_1650983378.png'),
(20, 189, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant189_1650983383.png'),
(20, 190, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant190_1650983388.png'),
(20, 191, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant191_1650983392.png'),
(20, 192, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant192_1650983396.png'),
(21, 193, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idiomes`
--

CREATE TABLE `idiomes` (
  `id_idioma` int NOT NULL,
  `idioma` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `idiomes`
--

INSERT INTO `idiomes` (`id_idioma`, `idioma`) VALUES
(1, 'Català'),
(2, 'Español'),
(3, 'English'),
(4, 'Deutsch');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restaurants`
--

CREATE TABLE `restaurants` (
  `id_restaurant` int NOT NULL,
  `nom` varchar(30) NOT NULL,
  `telefon` varchar(27) NOT NULL,
  `pagina_web` varchar(100) NOT NULL,
  `ubicacio` varchar(100) NOT NULL,
  `horari_ca` varchar(150) NOT NULL,
  `horari_es` varchar(150) NOT NULL,
  `horari_en` varchar(150) NOT NULL,
  `horari_de` varchar(150) NOT NULL,
  `descripcio_ca` text NOT NULL,
  `descripcio_es` text NOT NULL,
  `descripcio_en` text NOT NULL,
  `descripcio_de` text NOT NULL,
  `imatge` text,
  `carta` text,
  `rang_preus` varchar(10) DEFAULT NULL,
  `id_tipus` int NOT NULL,
  `iframe` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `restaurants`
--

INSERT INTO `restaurants` (`id_restaurant`, `nom`, `telefon`, `pagina_web`, `ubicacio`, `horari_ca`, `horari_es`, `horari_en`, `horari_de`, `descripcio_ca`, `descripcio_es`, `descripcio_en`, `descripcio_de`, `imatge`, `carta`, `rang_preus`, `id_tipus`, `iframe`) VALUES
(1, 'Marisco', '971 85 00 44', 'https://restaurantemarisco.es/', 'C/ Isabel Garau 55, Can Picafort, 07458', 'Dijous a Dimarts, 13:00-16:00, 19:00-23:00', 'Jueves a Martes, 13:00-16:00, 19:00-23:00', 'Thursday to Tuesday, 13:00-16:00, 19:00-23:00', 'Donnerstag bis Dienstag, 13:00-16:00, 19:00-23:00', 'Un restaurant amb un ambient elegant i familiar que ofereix arrossos, paelles i cuina mallorquina.', 'Un restaurante con un ambiente elegante y familiar que ofrece arroces, paellas y cocina mallorquina.', 'A restaurant with an elegant and familiar atmosphere that offers rice dishes, paellas and Majorcan cuisine.', 'Ein Restaurant mit eleganter, familiärer Atmosphäre, das Reisgerichte, Paellas und mallorquinische Küche anbietet.', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/fotosportada/restaurant1_1653050288.png', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/cartes/carta_restaurant1_1650985835.pdf', '€€', 1, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.892525883192!2d3.157915615376204!3d39.76452137944622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1296320d929dd3eb%3A0x3aea4f83e7756d00!2sRestaurante%20Marisco!5e0!3m2!1ses!2ses!4v1652882388432!5m2!1ses!2ses'),
(2, 'Mamma Mia', '646 44 11 85', 'https://es-es.facebook.com/pizzeriamammamiacanpicafort/', 'Passeig Colón, 95, 07458 Can Picafort, Illes Balears', '13:00-15:30, 19:00-22:30. Dijous tancat.', '13:00-15:30, 19:00-22:30. Jueves cerrado.', '13:00-15:30, 19:00-22:30. Thursday closed.', '13:00-15:30, 19:00-22:30. Donnerstags geschlossen.', 'Restaurant amb un ambient acollidor i informal ideal per a famílies i nens que ofereix cuina italiana.', 'Restaurante con un ambiente acogedor e informal ideal para familias y niños que ofrece cocina italiana.', 'Restaurant with a cozy and informal atmosphere ideal for families and children offering Italian cuisine.', 'Restaurant mit gemütlicher und ungezwungener Atmosphäre, ideal für Familien und Kinder, mit italienischer Küche.', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/fotosportada/restaurant2_1652871421.png', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/cartes/carta_restaurant2_1650985907.pdf', '€€', 2, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.7918548875346!2d3.1503497150424193!3d39.76678150283464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129632717c804caf%3A0x8ac6d9077dc39476!2sPizzeria%20Mamma%20Mia!5e0!3m2!1ses!2ses!4v1652884623129!5m2!1ses!2ses'),
(3, 'Hong Kong', '971 85 15 86', 'https://www.facebook.com/Restaurante-Hong-Kong-287339104633516/', 'Passeig Colón, 155, 07458 Can Picafort, Illes Balears', '12:15-15:30, 19:00-23:30. Dimecres tancat.', '12:15-15:30, 19:00-23:30. Miércoles cerrado.', '12:15-15:30, 19:00-23:30. Wednesday closed.', '12:15-15:30, 19:00-23:30. Mittwoch geschlossen.', 'Restaurant acollidor i informal ideal per a nens que ofereix un menjar xinès saludable.', 'Restaurante acogedor e informal ideal para niños que ofrece una comida china saludable.', 'Cozy and informal restaurant ideal for children offering healthy Chinese food.', 'Gemütliches und informelles Restaurant, ideal für Kinder, das gesunde chinesische Gerichte anbietet.', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/fotosportada/restaurant3_1653050344.jpg', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/cartes/carta_restaurant3_1650985933.pdf', '€-€€', 3, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.6662123125952!2d3.145867315042517!3d39.769602102665374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1296327751ba6a3f%3A0x5dd9f57e12a424e9!2sRestaurante%20Hong%20Kong!5e0!3m2!1ses!2ses!4v1652884676320!5m2!1ses!2ses'),
(4, 'El Gaucho', '680 84 56 04', 'https://el-gaucho-asador.negocio.site/', 'Carrer Silenci, 16, 07458 Can Picafort, Illes Balears', '12:00-24:00. Dimecres tancat.', '12:00-24:00. Miércoles cerrado.', '12:00-24:00. Wednesday closed.', '12:00-24:00. Mittwoch geschlossen.', 'Un rostidor acollidor situat a primera línia de platja que ofereix delicioses carns a la brasa que pots gaudir mentre veus el mar.', 'Un asador acogedor situado a primera línea de playa que ofrece deliciosas carnes a la brasa que puedes disfrutar mientras ves el mar.', 'A cozy grill located on the beachfront that offers delicious grilled meats that you can enjoy while watching the sea.', 'Ein gemütlicher Grill direkt am Strand, der köstliches Fleisch vom Grill anbietet, das Sie genießen können, während Sie das Meer beobachten.', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/fotosportada/restaurant4_1653050389.png', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/cartes/carta_restaurant4_1650985953.pdf', '€€', 7, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.6623991763313!2d3.147420615042519!3d39.76968770266013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129632713f62ba23%3A0xea5aa24b73f7600d!2sEl%20Gaucho%20Asador!5e0!3m2!1ses!2ses!4v1652884705513!5m2!1ses!2ses'),
(5, 'Vinicius', '971 85 07 06', 'https://restaurantevinicius.com/', 'Av. Josep Trias, 27, 07458 Can Picafort, Illes Balears', 'Dimarts a divendres 12.00-16.00, 19.-24.00. Dissabte i diumenge 12.00-24.00. Dilluns tancat.', 'Martes a viernes 12:00-16:00, 19:-24:00. Sábado y domingo 12:00-24:00. Lunes cerrado.', 'Tuesday to Friday 12:00-16:00, 19:-24:00. Saturday and Sunday 12:00-24:00. Monday closed.', 'Dienstag bis Freitag 12:00-16:00 Uhr, 19:-24:00 Uhr. Samstag und Sonntag 12:00-24:00 Uhr. Montag geschlossen.', 'Restaurant acollidor i informal ideal per a famílies i grups amb una àmplia varietat de menjar mediterrani.', 'Restaurante acogedor e informal ideal para familias y grupos con una amplia variedad de comida mediterránea.', 'Cozy and informal restaurant ideal for families and groups with a wide variety of Mediterranean food.', 'Gemütliches und informelles Restaurant, ideal für Familien und Gruppen, mit einer großen Auswahl an mediterranen Gerichten.', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/fotosportada/restaurant5_1650986674.png', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/cartes/carta_restaurant5_1650985973.pdf', '€€-€€€', 1, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.7930753738665!2d3.1453341150424494!3d39.766754102836245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1296327a7ae77faf%3A0xbd14f0352827bf46!2sRestaurante%20Vinicius!5e0!3m2!1ses!2ses!4v1652884728823!5m2!1ses!2ses'),
(6, 'Burger King', '971 85 26 81', 'https://www.burgerking.es/', 'Carrer del Passeig de Colón, Passeig Colón, 135, 07458 Can Picafort, Illes Balears', 'Dilluns a diumenge 12:30-22:00.', 'Lunes a domingo 12:30-22:00.', 'Monday to Sunday 12:30-22:00.', 'Montag bis Sonntag 12:30-22:00.', 'Coneguda cadena de menjar ràpid que serveix hamburgueses a la graella, patates fregides i batuts.', 'Conocida cadena de comida rápida que sirve hamburguesas a la parrilla, patatas fritas y batidos.', 'Cozy and informal restaurant ideal for families and groups with a wide variety of Mediterranean food.', 'Gemütliches und informelles Restaurant, ideal für Familien und Gruppen, mit einer großen Auswahl an mediterranen Gerichten.', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/fotosportada/restaurant6_1650986684.png', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/cartes/carta_restaurant6_1650985992.pdf', '€', 4, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.7297828786836!2d3.147191515042455!3d39.76817500275101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12962c9e90ad3a0d%3A0xfe3396df8146341c!2sBurger%20King!5e0!3m2!1ses!2ses!4v1652884768143!5m2!1ses!2ses'),
(7, 'Sa Mexicana', '697 45 43 31', 'https://sa-mexicana.negocio.site/?utm_source=gmb&utm_medium=referral', 'Av. Diagonal, n9, 07458 Can Picafort, Illes Balears', 'Dilluns a diumenge 11:00-16:00, 19:00-23:30.', 'Lunes a domingo 11:00-16:00, 19:00-23:30.', 'Monday to Sunday 11:00-16:00, 19:00-23:30.', 'Montag bis Sonntag 11:00-16:00, 19:00-23:30.', 'Restaurant acollidor i informal ideal per a nens que disposa de menjar mexicà.', 'Restaurante acogedor e informal ideal para niños que dispone de comida mexicana.', 'Cozy and informal restaurant ideal for children with Mexican food.', 'Gemütliches und informelles Restaurant mit mexikanischer Küche, ideal für Kinder.', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/fotosportada/restaurant7_1653049880.jpg', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/cartes/carta_restaurant7_1650986018.pdf', '€-€€', 9, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.1235474619857!2d3.1638991150422178!3d39.75933440328162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129633968256427b%3A0x62ebea11427473!2sSa%20mexicana%20(Son%20Baulo)!5e0!3m2!1ses!2ses!4v1652884794544!5m2!1ses!2ses'),
(8, 'Can Montevideo', '971 85 29 43', 'https://es-es.facebook.com/canmontevideopizzas/', 'Carrer Ran de Mar, 14, 07458 Can Picafort, Illes Balears', '9:00-23:00. Dilluns tancat.', '9:00-23:00. Lunes cerrado.', '9:00-23:00. Monday closed.', '9:00-23:00. Montag geschlossen.', 'Restaurant acollidor i informal que ofereix tipus de cuina uruguaiana i saludable.', 'Restaurante acogedor e informal que ofrece tipo de cocina uruguaya y saludable.', 'Friendly and informal restaurant offering Uruguayan and healthy cuisine.', 'Gemütliches und informelles Restaurant mit uruguayischer und gesunder Küche.', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/fotosportada/restaurant8_1650986751.png', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/cartes/carta_restaurant8_1650986031.pdf', '€', 10, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.7955341617076!2d3.147445015042453!3d39.76669890283975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12963270f7443815%3A0x8cfc1ae5a11c20c4!2sCan%20Montevideo!5e0!3m2!1ses!2ses!4v1652884825143!5m2!1ses!2ses'),
(9, 'L\'Incanto', '971 85 20 68', 'https://www.facebook.com/Lincanto-432316333462016/', 'Passeig Colón, 147, 07458 Can Picafort, Illes Balears', '12:30-16:00, 19:00-23:00. Dijous tancat.', '12:30-16:00, 19:00-23:00. Jueves cerrado.', '12:30-16:00, 19:00-23:00. Thursday closed.', '12:30-16:00, 19:00-23:00. Donnerstag geschlossen.', 'Restaurant acollidor i informal on pots trobar pizzes artesanes, pastes, ensalades, escalops...', 'Restaurante acogedor e informal donde puedes encontrar pizzas artesanas, pastas, ensaladas, escalopes...', 'Cozy and informal restaurant where you can find homemade pizzas, pastas, salads, escalopes...', 'Gemütliches und informelles Restaurant, in dem Sie hausgemachte Pizzen, Pasta, Salate, Schnitzel...', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/fotosportada/restaurant9_1650986766.png', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/cartes/carta_restaurant9_1650986046.pdf', '€', 2, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.6881956224365!2d3.1464342150424964!3d39.76910860269504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129632774cdb54ff%3A0xa5878fd9b9b4636c!2sL&#39;Incanto!5e0!3m2!1ses!2ses!4v1652884895801!5m2!1ses!2ses'),
(10, 'Sapori', '971 85 08 96', 'https://saporicanpicafort.com/es/sapori-restaurantes-can-picafort/', 'Passeig Enginyer Antoni Garau, 2, 07458 Can Picafort, Illes Balears', '10:30-23:30.', '10:30-23:30.', '10:30-23:30.', '10:30-23:30.', 'Restaurant mediterrani al passeig de la platja de Can Picafort. Vine a conèixer el nostre concepte gastronòmic amb una àmplia varietat de plats.', 'Restaurante mediterráneo en pleno paseo de la playa de Can Picafort. Ven a conocer nuestro concepto gastronómico con una amplia variedad de platos.', 'Mediterranean restaurant right on the beach promenade of Can Picafort. Come to know our gastronomic concept with a wide variety of dishes.', 'Mediterranes Restaurant direkt an der Strandpromenade von Can Picafort. Kommen Sie und entdecken Sie unser gastronomisches Konzept mit einer großen Auswahl an Gerichten.', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/fotosportada/restaurant10_1653049838.jpg', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/cartes/carta_restaurant10_1650986081.pdf', '€€-€€€', 1, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.8053692846493!2d3.1531853150424456!3d39.766478102852815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129633e6af0f8f55%3A0xb4df9f440d9de899!2sSapori!5e0!3m2!1ses!2ses!4v1652884910248!5m2!1ses!2ses'),
(11, 'El Patrón', '871 53 19 36', 'https://restaurante-el-patron.negocio.site/', 'Carrer José Trias, 9, 07458 Can Picafort, Illes Balears', 'Diumenge a divendres 12.00-16.00, 19.00-23.30. Dissabte 18.00-23.30.', 'Domingo a viernes 12:00-16:00, 19:00-23:30. Sábado 18:00-23:30.', 'Sunday to Friday 12:00-16:00, 19:00-23:30. Saturday 18:00-23:30.', 'Sonntag bis Freitag 12:00-16:00, 19:00-23:30. Samstag 18:00-23:30.', 'Restaurant acollidor i informal que compta amb una cuina mediterrània excel·lent.', 'Restaurante acogedor e informal que cuenta con una excelente cocina mediterránea.', 'Cozy and informal restaurant with excellent Mediterranean cuisine.', 'Gemütliches und informelles Restaurant mit ausgezeichneter mediterraner Küche.', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/fotosportada/restaurant11_1650986792.png', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/cartes/carta_restaurant11_1650986100.pdf', '€€-€€€', 1, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.732924309767!2d3.146791615376296!3d39.76810447944582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1296339542e7c769%3A0xb62ca6aa03a14935!2sRestaurante%20El%20patron!5e0!3m2!1ses!2ses!4v1652946488011!5m2!1ses!2ses'),
(12, 'Mónaco', '971 85 03 74', 'https://www.facebook.com/monacorestaurante/', 'Avinguda de José Trias, 20, 07458 Can Picafort, Illes Balears', '12:00-23:00. Dimarts tancat.', '12:00-23:00. Martes cerrado.', '12:00-23:00. Tuesday closed.', '12:00-23:00. Dienstag geschlossen.', 'Restaurant situat a la zona de vianants de Can Picafort, on podràs gaudir d\'un ambient agradable, mentre menges una de les nostres especialitats, amb carns o pasta.', 'Restaurante situado en la zona peatonal de Can Picafort, donde podrás disfrutar de un ambiente agradable, mientras comes una de nuestras especialidades, en carnes o pasta.', 'Restaurant located in the pedestrian area of Can Picafort, where you can enjoy a pleasant atmosphere while you eat one of our specialities, meat or pasta.', 'In der Fußgängerzone von Can Picafort gelegenes Restaurant, wo Sie in angenehmer Atmosphäre eine unserer Spezialitäten, Fleisch oder Pasta, genießen können.', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/fotosportada/restaurant12_1653049933.jpg', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/cartes/carta_restaurant12_1650986114.pdf', '€€-€€€', 1, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.7500995787386!2d3.1462794150424647!3d39.76771890277836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1296327098032907%3A0x755dd72279b39c41!2sRESTAURANTE%20M%C3%93NACO!5e0!3m2!1ses!2ses!4v1652946527546!5m2!1ses!2ses'),
(13, 'El Puerto', '971 85 09 42', 'https://www.facebook.com/elpuertocanpicafort/', 'Carrer Cervantes, 22, 07458 Can Picafort, Illes Balears', 'Divendres 11:30-24:00. Dissabte 8.30-24.00. Diumenge 8:30-19:00. Dilluns a dijous tancat.', 'Viernes 11:30-24:00. Sábado 8:30-24:00. Domingo 8:30-19:00. Lunes a jueves cerrado.', 'Friday 11:30-24:00. Saturday 8:30-24:00. Sunday 8:30-19:00. Monday to Thursday closed.', 'Freitag 11:30-24:00 Uhr. Samstag 8:30-24:00 Uhr. Sonntag 8:30-19:00. Montag bis Donnerstag geschlossen.', 'Restaurant de menjar mediterrani situat al passeig de la platja de Ca\'n Picafort.', 'Restaurante de comida mediterránea situado en pleno paseo de la playa de Ca\'n Picafort.', 'Mediterranean food restaurant located right on the beach promenade in Ca\'n Picafort.', 'Das Restaurant mit mediterraner Küche liegt direkt an der Strandpromenade von Ca\'n Picafort.', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/fotosportada/restaurant13_1650986819.png', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/cartes/carta_restaurant13_1650986127.pdf', '€€-€€€', 1, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.844811767992!2d3.154825315042391!3d39.76559260290594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12963272dda64327%3A0x30a4bd0e01414cb4!2sEl%20Puerto!5e0!3m2!1ses!2ses!4v1652946556071!5m2!1ses!2ses'),
(14, 'Alibaba Kebab & Doner', '643 07 86 37', 'https://alibaba-kebab-doner.business.site/?utm_source=gmb&utm_medium=referral', 'Av. Josep Trias, nr 5, 07458 Can Picafort, Illes Balears', 'Dilluns a diumenge 11:50-23:00.', 'Lunes a domingo 11:50-23:00.', 'Monday to Sunday 11:50-23:00.', 'Montag bis Sonntag 11:50-23:00 Uhr.', 'Restaurant informal ubicat a prop del passeig de la platja de Ca\'n Picafort on pots menjar exquisits kebabs.', 'Restaurante informal ubicado cerca del paseo de la playa de Ca\'n Picafort donde puedes comer exquisitos kebabs.', 'Informal restaurant located near the beach promenade of Ca\'n Picafort where you can eat delicious kebabs.', 'Informelles Restaurant in der Nähe der Strandpromenade von Ca\'n Picafort, in dem man leckere Kebabs essen kann.', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/fotosportada/restaurant14_1653050557.jpg', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/cartes/carta_restaurant14_1650986144.pdf', '€', 12, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.7077777267123!2d3.1475372150425067!3d39.768669002721204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129633a3885e5c6f%3A0xffb7bc1d6fdb34a4!2sAlibaba%20kebab%20%26%20doner!5e0!3m2!1ses!2ses!4v1652946574594!5m2!1ses!2ses'),
(15, 'La Pinta', '971 85 11 82', 'https://www.la-pinta.com/', 'Passeig Colón, 159, 07458 Can Picafort, Illes Balears', '18:00-24:00. Dijous tancat.', '18:00-24:00. Jueves cerrado.', '18:00-24:00. Thursday closed.', '18:00-24:00. Donnerstag geschlossen.', 'Restaurant elegant i acollidor amb una exquisida carta de cuina mediterrània.', 'Restaurante elegante y acogedor con una exquisita carta de cocina mediterránea.', 'Elegant and comfortable restaurant with an exquisite menu of Mediterranean cuisine.', 'Elegantes und gemütliches Restaurant mit einer exquisiten Speisekarte der mediterranen Küche.', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/fotosportada/restaurant15_1653050459.jpg', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/cartes/carta_restaurant15_1650986160.pdf', '€€-€€€', 1, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.6605549701217!2d3.1456993150425396!3d39.769729102657585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12963279e30eaaab%3A0x1d9c3e17c0ff362b!2sLa%20Pinta%20Bar-Restaurant!5e0!3m2!1ses!2ses!4v1652946609335!5m2!1ses!2ses'),
(16, 'Sabores de India', '680 34 75 47', 'https://sabores-de-india1.webnode.es/', 'Carrer José Trias, 07458 Can Picafort, Illes Balears', 'Dilluns a diumenge 12:00-23:00.', 'Lunes a domingo 12:00-23:00.', 'Monday to Sunday 12:00-23:00.', 'Montag bis Sonntag 12:00-23:00 Uhr.', 'Restaurant informal on pots gaudir d\'una carta suculenta amb els sabors típics de l\'Índia.', 'Restaurante informal en el cual puedes disfrutar de una suculenta carta con los sabores típicos de la India.', 'Casual restaurant where you can enjoy a succulent menu with typical Indian flavours.', 'Informelles Restaurant, in dem Sie ein saftiges Menü mit typisch indischen Aromen genießen können.', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/fotosportada/restaurant16_1650986864.png', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/cartes/carta_restaurant16_1650986175.pdf', '€€-€€€', 8, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.764683294919!2d3.144759215042464!3d39.76739150279797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1296327a68c84d3d%3A0x99224a6132f2b93e!2sSabores%20De%20India!5e0!3m2!1ses!2ses!4v1652946630843!5m2!1ses!2ses'),
(17, 'SushiYoko II', '971 85 24 47', 'https://mallorcafoodies.com/restaurante/sushi-yoko-can-picafort/', 'Passeig Colón, 143, 07458 Can Picafort, Illes Balears', 'Dilluns a diumenge 12:00-16:00, 19:30-23:30.', 'Lunes a domingo 12:00-16:00, 19:30-23:30.', 'Monday to Sunday 12:00-16:00, 19:30-23:30.', 'Montag bis Sonntag 12:00-16:00, 19:30-23:30.', 'Si voleu gaudir d\'un bon sushi autèntic o de menjar japonès a bon preu a Can Picafort, el restaurant japonès Sushi Yoko és una molt bona opció. Podràs delectar el teu paladar amb delícies japoneses.', 'Si quieres disfrutar de un buen sushi auténtico o de comida japonesa a buen precio en Can Picafort, el restaurante japonés Sushi Yoko es una muy buena opción. Podrás deleitar tu paladar con delicias japonesas.', 'If you want to enjoy a good authentic sushi or Japanese food at a good price in Can Picafort, the Japanese restaurant Sushi Yoko is a very good option. You will be able to delight your palate with Japanese delicacies.', 'Wenn Sie in Can Picafort ein gutes, authentisches Sushi oder japanisches Essen zu einem guten Preis genießen möchten, ist das japanische Restaurant Sushi Yoko eine sehr gute Wahl. Sie werden Ihren Gaumen mit japanischen Köstlichkeiten verwöhnen können.', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/fotosportada/restaurant17_1653050134.jpg', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/cartes/carta_restaurant17_1650986187.pdf', '€', 5, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.70018277822!2d3.1467110150424764!3d39.768839502711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1296338e22d6ca9d%3A0xab8f18bb6a56824!2sSUSHIYOKO%20ll!5e0!3m2!1ses!2ses!4v1652946664057!5m2!1ses!2ses'),
(18, 'Luz de Luna', '971 85 08 26', 'http://s332524457.mialojamiento.es/lunachina/index.php/luz-de-luna.html', 'Passeig Colón, 53, 07458 Can Picafort, Illes Balears', '12:30-16:00, 19:00-23:30. Dimarts tancat.', '12:30-16:00, 19:00-23:30. Martes cerrado.', '12:30-16:00, 19:00-23:30. Closed on Tuesdays.', '12:30-16:00, 19:00-23:30. Dienstags geschlossen.', 'Plats típics de menjar xinès en un local familiar amb amplis finestrals i una terrassa amb vistes al mar.', 'Platos típicos de comida china en un local familiar con amplios ventanales y una terraza con vistas al mar.', 'Typical Chinese cuisine in a family restaurant with large windows and a terrace overlooking the sea.', 'Typische chinesische Gerichte in einem Familienrestaurant mit großen Fenstern und einer Terrasse mit Blick aufs Meer.', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/fotosportada/restaurant18_1650986894.jpg', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/cartes/carta_restaurant18_1650986204.pdf', '€', 3, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.8676974264417!2d3.1543724150423533!3d39.76507880293693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12963272ea006193%3A0x661243a2a53b17dd!2sRestaurante%20Chino%20LUZ%20DE%20LUNA!5e0!3m2!1ses!2ses!4v1652946684621!5m2!1ses!2ses'),
(19, 'El Molino', '971 85 02 49', 'https://es.restaurantguru.com/El-Molino-Can-Picafort', 'Carrer Badia, 8, 07458 Can Picafort, Illes Balears', '19:00-01:30. Dilluns tancat.', '19:00-01:30. Lunes cerrado.', '19:00-01:30. Monday closed.', '19:00-01:30. Montag geschlossen.', 'Rostidor acollidor i informal que ofereix una carta exquisida de carns a la brasa.', 'Asador acogedor e informal que ofrece una carta exquisita de carnes a la brasa.', 'Welcoming and informal grill that offers an exquisite menu of grilled meats.', 'Gemütlicher und informeller Grill, der eine exquisite Speisekarte mit gegrilltem Fleisch bietet.', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/fotosportada/restaurant19_1650986904.png', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/cartes/carta_restaurant19_1650986214.pdf', '€€-€€€', 11, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.098388727622!2d3.164142115042213!3d39.7598993032477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12963210ed1208cd%3A0x12f5701f23ff2bc8!2sEl%20Molino!5e0!3m2!1ses!2ses!4v1652946703880!5m2!1ses!2ses'),
(20, 'Dakota Tex Mex', '971 89 42 63', 'https://dakotatexmex.com/', 'Av. Josep Trias, 16, 07458 Can Picafort, Illes Balears', 'Dilluns a diumenge 12:30-22:30.', 'Lunes a domingo 12:30-22:30.', 'Monday to Sunday 12:30-22:30.', 'Montag bis Sonntag 12:30-22:30 Uhr.', 'Dakota és una cadena de restaurants inspirats en la temàtica americana situats als llocs més emblemàtics del nord de Mallorca i que es defineix per la seva atractiva decoració i els plats deliciosos.', 'Dakota es una cadena de restaurantes inspirados en la temática americana situados en los lugares más emblemáticos del norte de Mallorca y que se define por su atractiva decoración y sus deliciosos platos.', 'Dakota is a chain of American-inspired restaurants located in the most emblematic places in the north of Mallorca and is defined by its attractive décor and delicious dishes.', 'Das Dakota ist eine Kette von amerikanisch inspirierten Restaurants, die sich an den bekanntesten Orten im Norden Mallorcas befinden und sich durch ihr attraktives Dekor und ihre köstlichen Gerichte auszeichnen.', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/fotosportada/restaurant20_1650986915.png', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/cartes/carta_restaurant20_1650986611.pdf', '€€-€€€', 6, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.7425003271414!2d3.146185115042481!3d39.767889502768156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1296335b248b7577%3A0xf3e68eb1aab9d5d5!2sDakota%20Tex%20Mex%20-%20Can%20Picafort!5e0!3m2!1ses!2ses!4v1652946724724!5m2!1ses!2ses'),
(21, 'San Remo', '971 85 10 01', 'https://sanremo.com', 'Av Josep Trias, 07458 Illes Balears', '13:00-23:00. Dilluns tancat.', '13:00-23:00. Lunes cerrado.', '13:00-23:00. Monday closed.', '13:00-23:00.', 'Una fantàstica gelateria que a més ofereix plats de cuina mediterrània.', 'Una fantástica heladería.', 'Nice ice creams.', 'Hola', '[object File]', NULL, '€€', 1, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restaurants_serveis`
--

CREATE TABLE `restaurants_serveis` (
  `id_restaurant` int NOT NULL,
  `id_servei` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `restaurants_serveis`
--

INSERT INTO `restaurants_serveis` (`id_restaurant`, `id_servei`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(1, 2),
(2, 2),
(3, 2),
(5, 2),
(6, 2),
(7, 2),
(8, 2),
(9, 2),
(11, 2),
(12, 2),
(13, 2),
(14, 2),
(17, 2),
(18, 2),
(20, 2),
(5, 3),
(10, 3),
(13, 3),
(15, 3),
(18, 3),
(2, 4),
(3, 4),
(4, 4),
(5, 4),
(11, 4),
(15, 4),
(18, 4),
(4, 5),
(5, 5),
(10, 5),
(11, 5),
(15, 5),
(19, 5),
(3, 6),
(4, 6),
(5, 6),
(7, 6),
(8, 6),
(9, 6),
(10, 6),
(12, 6),
(13, 6),
(15, 6),
(16, 6),
(17, 6),
(19, 6),
(1, 7),
(2, 7),
(3, 7),
(4, 7),
(5, 7),
(6, 7),
(7, 7),
(8, 7),
(9, 7),
(10, 7),
(11, 7),
(12, 7),
(13, 7),
(14, 7),
(15, 7),
(16, 7),
(17, 7),
(19, 7),
(20, 7),
(1, 8),
(2, 8),
(5, 8),
(7, 8),
(8, 8),
(9, 8),
(10, 8),
(11, 8),
(12, 8),
(13, 8),
(14, 8),
(16, 8),
(17, 8),
(18, 8),
(5, 9),
(6, 9),
(7, 9),
(14, 9),
(1, 10),
(2, 10),
(3, 10),
(4, 10),
(5, 10),
(6, 10),
(7, 10),
(8, 10),
(9, 10),
(10, 10),
(11, 10),
(12, 10),
(13, 10),
(14, 10),
(15, 10),
(16, 10),
(17, 10),
(18, 10),
(19, 10),
(20, 10),
(5, 11),
(14, 11),
(1, 12),
(2, 12),
(3, 12),
(4, 12),
(5, 12),
(10, 12),
(11, 12),
(12, 12),
(15, 12),
(16, 12),
(18, 12),
(19, 12),
(20, 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `serveis`
--

CREATE TABLE `serveis` (
  `id_servei` int NOT NULL,
  `servei_ca` varchar(35) NOT NULL,
  `servei_es` varchar(35) NOT NULL,
  `servei_en` varchar(35) NOT NULL,
  `servei_de` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `serveis`
--

INSERT INTO `serveis` (`id_servei`, `servei_ca`, `servei_es`, `servei_en`, `servei_de`) VALUES
(1, 'Banys', 'Aseos', 'Toilets', 'Toiletten'),
(2, 'Ideal per nins', 'Ideal para niños', 'Perfect for children', 'Ideal für Kinder'),
(3, 'Wifi gratuït', 'Wifi gratis', 'Free Wifi', 'Kostenloses Wifi'),
(4, 'Bar', 'Bar', 'Bar', 'Bar'),
(5, 'Trones', 'Tronas', 'High chairs', 'Hochstühle'),
(6, 'Accés per a cadira de rodes', 'Acceso para silla de ruedas', 'Wheelchair accessible', 'Zugang für Rollstühle'),
(7, 'Terrassa', 'Terraza', 'Terrace', 'Terrasse'),
(8, 'Per emportar', 'Para llevar', 'To take away', 'Zum Mitnehmen'),
(9, 'A domicili', 'A domicilio', 'At home', 'Zu hause'),
(10, 'Menjar allà', 'Comer allí', 'Eating there', 'Dort essen'),
(11, 'Entrega sense contacte', 'Entrega sin contacto', 'Non-contact delivery', 'Kontaktlose Zustellung'),
(12, 'S\'accepten reserves', 'Se aceptan reservas', 'Reservations accepted', 'Reservierungen angenommen');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipus`
--

CREATE TABLE `tipus` (
  `id_tipus` int NOT NULL,
  `tipus_ca` varchar(20) NOT NULL,
  `tipus_es` varchar(20) NOT NULL,
  `tipus_en` varchar(20) NOT NULL,
  `tipus_de` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `tipus`
--

INSERT INTO `tipus` (`id_tipus`, `tipus_ca`, `tipus_es`, `tipus_en`, `tipus_de`) VALUES
(1, 'Mediterrani', 'Mediterráneo', 'Mediterranean', 'Mediterran'),
(2, 'Italià', 'Italiano', 'Italian', 'Italienisch'),
(3, 'Xinès', 'Chino', 'Chinese', 'Chinesisch'),
(4, 'Menjar ràpid', 'Comida rápida', 'Fast food', 'Fastfood'),
(5, 'Japonès', 'Japonés', 'Japanese', 'Japanisch'),
(6, 'Americà', 'Americano', 'American', 'Amerikanisch'),
(7, 'Argentí', 'Argentino', 'Argentine', 'Argentinien'),
(8, 'Indi', 'Indio', 'Indian', 'Indisch'),
(9, 'Mexicà', 'Mexicano', 'Mexican', 'Mexikanisch'),
(10, 'Uruguaià', 'Uruguayo', 'Uruguayan', 'Uruguayisch'),
(11, 'Rostidor', 'Asador', 'Grill', 'Rotisserie'),
(12, 'Oriental', 'Oriental', 'Oriental', 'Orientalisch');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `traduccions`
--

CREATE TABLE `traduccions` (
  `id_traduccio` int NOT NULL,
  `catala` varchar(40) NOT NULL,
  `espanyol` varchar(40) NOT NULL,
  `english` varchar(40) NOT NULL,
  `deutsch` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `traduccions`
--

INSERT INTO `traduccions` (`id_traduccio`, `catala`, `espanyol`, `english`, `deutsch`) VALUES
(1, 'Inici', 'Inicio', 'Home', 'Startseite'),
(2, 'Qui som', 'Quienes somos', 'Who we are', 'Wer wir sind'),
(3, 'Restaurants', 'Restaurantes', 'Restaurants', 'Restaurants'),
(4, 'Suggeriments', 'Sugerencias', 'Suggestions', 'Vorschläge'),
(5, 'Inicia sessió', 'Inicia sesión', 'Login', 'Einloggen'),
(6, 'Registra\'t', 'Regístrate', 'Sign up', 'Register'),
(7, 'Perfil', 'Perfil', 'Profile', 'Profil'),
(8, 'Cancel·lar', 'Cancelar', 'Cancel', 'Abbrechen'),
(9, 'Editar', 'Editar', 'Edit', 'Editieren'),
(10, 'Objectiu', 'Objetivo', 'Objective', 'Zielsetzung'),
(11, 'Pàgina', 'Página', 'Page', 'Seite'),
(12, 'Registre', 'Registro', 'Register', 'Register'),
(13, 'Formulari', 'Formulario', 'Form', 'Bilden'),
(14, 'Tancar sessió', 'Cerrar sesión', 'Logout', 'Ausloggen'),
(15, 'Cercar', 'Buscar', 'Search', 'Suche'),
(16, 'Guardar', 'Guardar', 'Save', 'Speichern Sie'),
(17, 'Esborrar', 'Borrar', 'Delete', 'Löschen'),
(18, 'Nom', 'Nombre', 'Name', 'Name'),
(19, 'Descripció', 'Descripción', 'Description', 'Beschreibung'),
(20, 'Telèfon', 'Teléfono', 'Telephone', 'Telefonnummer'),
(21, 'Correu', 'Correo', 'Email', 'Email'),
(22, 'Tipus', 'Tipo', 'Type', 'Typ'),
(23, 'Servei', 'Servicio', 'Service', 'Service'),
(24, 'Usuari', 'Usuario', 'User', 'Benutzer'),
(25, 'Català', 'Catalán', 'Catalan', 'Katalanisch'),
(26, 'Espanyol', 'Español', 'Spanish', 'Spanisch'),
(27, 'Anglès', 'Inglés', 'English', 'Englisch'),
(28, 'Alemany', 'Alemán', 'German', 'Deutsch');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuaris`
--

CREATE TABLE `usuaris` (
  `id_usuari` int NOT NULL,
  `nom_usuari` varchar(20) NOT NULL,
  `llinatges` varchar(30) NOT NULL,
  `telefon` varchar(20) NOT NULL,
  `direccio` varchar(50) NOT NULL,
  `data_naixement` date NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(64) DEFAULT NULL,
  `administrador` tinyint(1) DEFAULT NULL,
  `token` varchar(60) DEFAULT NULL,
  `token_valid_fins` datetime DEFAULT NULL,
  `foto_perfil` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuaris`
--

INSERT INTO `usuaris` (`id_usuari`, `nom_usuari`, `llinatges`, `telefon`, `direccio`, `data_naixement`, `email`, `password`, `administrador`, `token`, `token_valid_fins`, `foto_perfil`) VALUES
(1, 'Míriam', 'Jiménez Molina', '622955522', 'Calle El Cano, 9, Can Picafort, 07458', '1998-06-24', 'miriamjimenez@paucasesnovescifp.cat', '$2y$10$3dmIx.dksiGWS7BAsg4.h.HzzmKuXdT0rzmoIDYVqdHnyvpo89KjS', 1, 'UTRqVm5oTHdxQ3JKNFFkUzduZGpPTXoxZVZlZEpBZ0NNejNRV0QxSQ==', '2022-05-23 13:18:29', 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/usuaris/usuari1_1652254502.png'),
(2, 'Miri', 'Jiménez No Admin', '622955522', 'Calle El Cano, 9, Can Picafort, 07458', '1998-06-24', 'miriuchijm98@gmail.com', '$2y$10$I4l5l7qu8.ft96WHnN7lIuwMdY40uFWX.TzVdRVqKt0uwhRMzhQQi', 0, 'YldsdWY2bDhRZ3YxMnhmdTJMajdya0J2c0ExMXN0dVdvWjBGOHN3Tw==', '2022-05-22 18:53:02', 'null'),
(3, 'Nerea', 'Estacio Marmolejo', '660098275', 'Paseo de Vigo 10, 25489 Fuenlabrada', '1997-10-14', 'nereaesm@gmail.com', '$2y$10$GnNNjJ3bWIi0Vr09qyo7E.GY78JJPp8s3XFPPGc6B03qIWJp7DPX2', 0, 'MzA1TUNsT3BRQnB4WnFSakxNN2dZWHYweW1XVXkzWm1uZFRtaDRvZw==', '2022-05-13 11:39:20', 'null'),
(4, 'María', 'Hernández Molina', '666666666', 'Calle Magallanes, 07458 Ca\'n Picafort', '1994-04-22', 'mariahm@gmail.com', '$2y$10$MiH5ZP16WJT5Wx9JF9k20eGWG7uckny7BkGcaetB/utulJ/RFOq.e', 0, 'NTJMVjNXblJvdDk2SzVPamhjaVVHTHlIemhQek9XSUkyYUNRNVl4MQ==', '2022-05-13 11:36:09', 'null');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valoracions`
--

CREATE TABLE `valoracions` (
  `id_valoracio` int NOT NULL,
  `valoracio` int NOT NULL,
  `id_usuari` int NOT NULL,
  `id_restaurant` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `valoracions`
--

INSERT INTO `valoracions` (`id_valoracio`, `valoracio`, `id_usuari`, `id_restaurant`) VALUES
(1, 5, 2, 1),
(2, 5, 3, 1),
(3, 5, 2, 2),
(4, 4, 3, 2),
(5, 4, 2, 3),
(6, 3, 3, 3),
(7, 4, 2, 4),
(8, 5, 3, 4),
(9, 5, 2, 5),
(10, 5, 3, 5),
(11, 4, 2, 6),
(12, 2, 3, 6);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentaris`
--
ALTER TABLE `comentaris`
  ADD PRIMARY KEY (`id_comentari`),
  ADD KEY `id_usuari` (`id_usuari`),
  ADD KEY `id_restaurant` (`id_restaurant`);

--
-- Indices de la tabla `fotos`
--
ALTER TABLE `fotos`
  ADD PRIMARY KEY (`id_restaurant`,`id_foto`);

--
-- Indices de la tabla `idiomes`
--
ALTER TABLE `idiomes`
  ADD PRIMARY KEY (`id_idioma`);

--
-- Indices de la tabla `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id_restaurant`),
  ADD KEY `id_tipus` (`id_tipus`);

--
-- Indices de la tabla `restaurants_serveis`
--
ALTER TABLE `restaurants_serveis`
  ADD PRIMARY KEY (`id_restaurant`,`id_servei`),
  ADD KEY `id_servei` (`id_servei`);

--
-- Indices de la tabla `serveis`
--
ALTER TABLE `serveis`
  ADD PRIMARY KEY (`id_servei`);

--
-- Indices de la tabla `tipus`
--
ALTER TABLE `tipus`
  ADD PRIMARY KEY (`id_tipus`);

--
-- Indices de la tabla `traduccions`
--
ALTER TABLE `traduccions`
  ADD PRIMARY KEY (`id_traduccio`);

--
-- Indices de la tabla `usuaris`
--
ALTER TABLE `usuaris`
  ADD PRIMARY KEY (`id_usuari`);

--
-- Indices de la tabla `valoracions`
--
ALTER TABLE `valoracions`
  ADD PRIMARY KEY (`id_valoracio`),
  ADD KEY `id_usuari` (`id_usuari`),
  ADD KEY `id_restaurant` (`id_restaurant`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentaris`
--
ALTER TABLE `comentaris`
  MODIFY `id_comentari` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `idiomes`
--
ALTER TABLE `idiomes`
  MODIFY `id_idioma` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id_restaurant` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `serveis`
--
ALTER TABLE `serveis`
  MODIFY `id_servei` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `tipus`
--
ALTER TABLE `tipus`
  MODIFY `id_tipus` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `traduccions`
--
ALTER TABLE `traduccions`
  MODIFY `id_traduccio` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `usuaris`
--
ALTER TABLE `usuaris`
  MODIFY `id_usuari` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `valoracions`
--
ALTER TABLE `valoracions`
  MODIFY `id_valoracio` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentaris`
--
ALTER TABLE `comentaris`
  ADD CONSTRAINT `comentaris_ibfk_1` FOREIGN KEY (`id_usuari`) REFERENCES `usuaris` (`id_usuari`),
  ADD CONSTRAINT `comentaris_ibfk_2` FOREIGN KEY (`id_restaurant`) REFERENCES `restaurants` (`id_restaurant`),
  ADD CONSTRAINT `comentaris_ibfk_3` FOREIGN KEY (`id_usuari`) REFERENCES `usuaris` (`id_usuari`),
  ADD CONSTRAINT `comentaris_ibfk_4` FOREIGN KEY (`id_restaurant`) REFERENCES `restaurants` (`id_restaurant`);

--
-- Filtros para la tabla `fotos`
--
ALTER TABLE `fotos`
  ADD CONSTRAINT `fotos_ibfk_1` FOREIGN KEY (`id_restaurant`) REFERENCES `restaurants` (`id_restaurant`) ON DELETE CASCADE,
  ADD CONSTRAINT `fotos_ibfk_2` FOREIGN KEY (`id_restaurant`) REFERENCES `restaurants` (`id_restaurant`) ON DELETE CASCADE;

--
-- Filtros para la tabla `restaurants`
--
ALTER TABLE `restaurants`
  ADD CONSTRAINT `restaurants_ibfk_1` FOREIGN KEY (`id_tipus`) REFERENCES `tipus` (`id_tipus`),
  ADD CONSTRAINT `restaurants_ibfk_2` FOREIGN KEY (`id_tipus`) REFERENCES `tipus` (`id_tipus`);

--
-- Filtros para la tabla `restaurants_serveis`
--
ALTER TABLE `restaurants_serveis`
  ADD CONSTRAINT `restaurants_serveis_ibfk_1` FOREIGN KEY (`id_restaurant`) REFERENCES `restaurants` (`id_restaurant`),
  ADD CONSTRAINT `restaurants_serveis_ibfk_2` FOREIGN KEY (`id_servei`) REFERENCES `serveis` (`id_servei`),
  ADD CONSTRAINT `restaurants_serveis_ibfk_3` FOREIGN KEY (`id_restaurant`) REFERENCES `restaurants` (`id_restaurant`),
  ADD CONSTRAINT `restaurants_serveis_ibfk_4` FOREIGN KEY (`id_servei`) REFERENCES `serveis` (`id_servei`);

--
-- Filtros para la tabla `valoracions`
--
ALTER TABLE `valoracions`
  ADD CONSTRAINT `valoracions_ibfk_1` FOREIGN KEY (`id_usuari`) REFERENCES `usuaris` (`id_usuari`),
  ADD CONSTRAINT `valoracions_ibfk_2` FOREIGN KEY (`id_restaurant`) REFERENCES `restaurants` (`id_restaurant`),
  ADD CONSTRAINT `valoracions_ibfk_3` FOREIGN KEY (`id_usuari`) REFERENCES `usuaris` (`id_usuari`),
  ADD CONSTRAINT `valoracions_ibfk_4` FOREIGN KEY (`id_restaurant`) REFERENCES `restaurants` (`id_restaurant`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
