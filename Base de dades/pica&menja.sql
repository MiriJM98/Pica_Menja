CREATE DATABASE picamenja;
USE picamenja;

-- CREACIÓ DE TAULES --

CREATE TABLE idiomes (id_idioma int AUTO_INCREMENT PRIMARY KEY, idioma varchar(15) NOT NULL);

CREATE TABLE tipus (id_tipus int AUTO_INCREMENT PRIMARY KEY, tipus_ca varchar(20) NOT NULL, tipus_es varchar(20) NOT NULL, tipus_en varchar(20) NOT NULL, tipus_de varchar(20) NOT NULL);

CREATE TABLE serveis (id_servei int AUTO_INCREMENT PRIMARY KEY, servei_ca varchar(35) NOT NULL, servei_es varchar(35) NOT NULL, servei_en varchar(35) NOT NULL, servei_de varchar(35) NOT NULL);

CREATE TABLE usuaris (id_usuari int AUTO_INCREMENT PRIMARY KEY, nom_usuari varchar(20) NOT NULL, llinatges varchar(30) NOT NULL, telefon varchar(20) NOT NULL, 
direccio varchar(50) NOT NULL, data_naixement date NOT NULL, email varchar(40) NOT NULL, password varchar(64), administrador boolean default 0, 
token varchar(60), token_valid_fins datetime, foto_perfil text);

CREATE TABLE restaurants (id_restaurant int AUTO_INCREMENT PRIMARY KEY, nom varchar(30) NOT NULL, telefon varchar(27) NOT NULL, 
pagina_web varchar(100) NOT NULL,  ubicacio varchar(100) NOT NULL, horari_ca varchar(150) NOT NULL, horari_es varchar(150) NOT NULL, 
horari_en varchar(150) NOT NULL, horari_de varchar(150) NOT NULL, descripcio_ca text NOT NULL, descripcio_es text NOT NULL, 
descripcio_en text NOT NULL, descripcio_de text NOT NULL, imatge text, carta text, rang_preus varchar(10), iframe text, id_tipus int NOT NULL);

CREATE TABLE valoracions (id_valoracio int AUTO_INCREMENT PRIMARY KEY, valoracio int(4) NOT NULL, comentari text, data DATE, id_usuari int NOT NULL, id_restaurant int NOT NULL);

CREATE TABLE fotos (id_restaurant int NOT NULL, id_foto int NOT NULL, foto text);

-- TAULA RELACIONS M:N --

CREATE TABLE restaurants_serveis (id_restaurant int NOT NULL, id_servei INT NOT NULL);

-- ALTER TABLE --

ALTER TABLE restaurants_serveis 
ADD PRIMARY KEY (id_restaurant, id_servei);

ALTER TABLE fotos
ADD PRIMARY KEY (id_restaurant, id_foto);

-- FOREIGN KEYS --

ALTER TABLE restaurants ADD FOREIGN KEY (id_tipus) REFERENCES tipus (id_tipus);

ALTER TABLE valoracions ADD FOREIGN KEY (id_usuari) REFERENCES usuaris (id_usuari);
ALTER TABLE valoracions ADD FOREIGN KEY (id_restaurant) REFERENCES restaurants (id_restaurant);

ALTER TABLE restaurants_serveis ADD FOREIGN KEY (id_restaurant) REFERENCES restaurants (id_restaurant);
ALTER TABLE restaurants_serveis ADD FOREIGN KEY (id_servei) REFERENCES serveis (id_servei);

ALTER TABLE fotos ADD FOREIGN KEY (id_restaurant) REFERENCES restaurants (id_restaurant);

-- INSERTS DE LES TAULES --

-- INSERTS PER LA TAULA IDIOMES --

INSERT INTO idiomes (id_idioma, idioma) values (1, "Català");
INSERT INTO idiomes (id_idioma, idioma) values (2, "Español");
INSERT INTO idiomes (id_idioma, idioma) values (3, "English");
INSERT INTO idiomes (id_idioma, idioma) values (4, "Deutsch");

-- INSERTS PER A LA TAULA TIPUS --

INSERT INTO tipus (id_tipus, tipus_ca, tipus_es, tipus_en, tipus_de) VALUES (1, "Mediterrani", "Mediterráneo", "Mediterranean", "Mediterran");
INSERT INTO tipus (id_tipus, tipus_ca, tipus_es, tipus_en, tipus_de) VALUES (2, "Italià", "Italiano", "Italian", "Italienisch");
INSERT INTO tipus (id_tipus, tipus_ca, tipus_es, tipus_en, tipus_de) VALUES (3, "Xinès", "Chino", "Chinese", "Chinesisch");
INSERT INTO tipus (id_tipus, tipus_ca, tipus_es, tipus_en, tipus_de) VALUES (4, "Menjar ràpid", "Comida rápida", "Fast food", "Fastfood");
INSERT INTO tipus (id_tipus, tipus_ca, tipus_es, tipus_en, tipus_de) VALUES (5, "Japonès", "Japonés", "Japanese", "Japanisch");
INSERT INTO tipus (id_tipus, tipus_ca, tipus_es, tipus_en, tipus_de) VALUES (6, "Americà", "Americano", "American", "Amerikanisch");
INSERT INTO tipus (id_tipus, tipus_ca, tipus_es, tipus_en, tipus_de) VALUES (7, "Argentí", "Argentino", "Argentine", "Argentinien");
INSERT INTO tipus (id_tipus, tipus_ca, tipus_es, tipus_en, tipus_de) VALUES (8, "Indi", "Indio", "Indian", "Indisch");
INSERT INTO tipus (id_tipus, tipus_ca, tipus_es, tipus_en, tipus_de) VALUES (9, "Mexicà", "Mexicano", "Mexican", "Mexikanisch");
INSERT INTO tipus (id_tipus, tipus_ca, tipus_es, tipus_en, tipus_de) VALUES (10, "Uruguaià", "Uruguayo", "Uruguayan", "Uruguayisch");
INSERT INTO tipus (id_tipus, tipus_ca, tipus_es, tipus_en, tipus_de) VALUES (11, "Rostidor", "Asador", "Grill", "Rotisserie");
INSERT INTO tipus (id_tipus, tipus_ca, tipus_es, tipus_en, tipus_de) VALUES (12, "Oriental", "Oriental", "Oriental", "Orientalisch");

-- INSERTS PER A LA TAULA SERVEIS --

INSERT INTO serveis (id_servei, servei_ca, servei_es, servei_en, servei_de) VALUES (1, "Banys", "Aseos", "Toilets", "Toiletten");
INSERT INTO serveis (id_servei, servei_ca, servei_es, servei_en, servei_de) VALUES (2, "Ideal per nins", "Ideal para niños", "Perfect for children", "Ideal für Kinder");
INSERT INTO serveis (id_servei, servei_ca, servei_es, servei_en, servei_de) VALUES (3, "Wifi gratuït", "Wifi gratis", "Free Wifi", "Kostenloses Wifi");
INSERT INTO serveis (id_servei, servei_ca, servei_es, servei_en, servei_de) VALUES (4, "Bar", "Bar", "Bar", "Bar");
INSERT INTO serveis (id_servei, servei_ca, servei_es, servei_en, servei_de) VALUES (5, "Trones", "Tronas", "High chairs", "Hochstühle");
INSERT INTO serveis (id_servei, servei_ca, servei_es, servei_en, servei_de) VALUES (6, "Accés per a cadira de rodes", "Acceso para silla de ruedas", "Wheelchair accessible", "Zugang für Rollstühle");
INSERT INTO serveis (id_servei, servei_ca, servei_es, servei_en, servei_de) VALUES (7, "Terrassa", "Terraza", "Terrace", "Terrasse");
INSERT INTO serveis (id_servei, servei_ca, servei_es, servei_en, servei_de) VALUES (8, "Per emportar", "Para llevar", "To take away", "Zum Mitnehmen");
INSERT INTO serveis (id_servei, servei_ca, servei_es, servei_en, servei_de) VALUES (9, "A domicili", "A domicilio", "At home", "Zu hause");
INSERT INTO serveis (id_servei, servei_ca, servei_es, servei_en, servei_de) VALUES (10, "Menjar allà", "Comer allí", "Eating there", "Dort essen");
INSERT INTO serveis (id_servei, servei_ca, servei_es, servei_en, servei_de) VALUES (11, "Entrega sense contacte", "Entrega sin contacto", "Non-contact delivery", "Kontaktlose Zustellung");
INSERT INTO serveis (id_servei, servei_ca, servei_es, servei_en, servei_de) VALUES (12, "S'accepten reserves", "Se aceptan reservas", "Reservations accepted", "Reservierungen angenommen");

-- INSERTS PER A LA TAULA USUARIS --

INSERT INTO usuaris (id_usuari, nom_usuari, llinatges, telefon, direccio, data_naixement, email, password, administrador, foto_perfil, token, token_valid_fins) VALUES (1, "Míriam", "Jiménez Molina", "622955522", "Calle El Cano, 9, Can Picafort, 07458", "1998-06-24", "miriamjimenez@paucasesnovescifp.cat", null, 1, null, null, null);
INSERT INTO usuaris (id_usuari, nom_usuari, llinatges, telefon, direccio, data_naixement, email, password, administrador, foto_perfil, token, token_valid_fins) VALUES (2, "Miri", "No admin", "622955522", "Calle El Cano, 9, Can Picafort, 07458", "1998-06-24", "miriuchijm98@gmail.com", null, null, null, null, null);

-- INSERTS PER A LA TAULA RESTAURANTS --

INSERT INTO restaurants(
    id_restaurant,
    nom,
    telefon,
    pagina_web,
    ubicacio,
    horari_ca,
    horari_es,
    horari_en,
    horari_de,
    descripcio_ca,
    descripcio_es,
    descripcio_en,
    descripcio_de,
    imatge,
    carta,
    rang_preus,
    id_tipus
)
VALUES(
    1,
    "Marisco",
    "971 85 00 44",
    "https://restaurantemarisco.es/",
    "C/ Isabel Garau 55, Can Picafort, 07458",
    "Dijous a Dimarts, 13:00-16:00, 19:00-23:00",
    "Jueves a Martes, 13:00-16:00, 19:00-23:00",
    "Thursday to Tuesday, 13:00-16:00, 19:00-23:00",
    "Donnerstag bis Dienstag, 13:00-16:00, 19:00-23:00",
    "Un restaurant amb un ambient elegant i familiar que ofereix arrossos, paelles i cuina mallorquina.",
    "Un restaurante con un ambiente elegante y familiar que ofrece arroces, paellas y cocina mallorquina.",
    "A restaurant with an elegant and familiar atmosphere that offers rice dishes, paellas and Majorcan cuisine.",
    "Ein Restaurant mit eleganter, familiärer Atmosphäre, das Reisgerichte, Paellas und mallorquinische Küche anbietet.",
    null,
    null,
    "€€",
    1
);

INSERT INTO restaurants(
    id_restaurant,
    nom,
    telefon,
    pagina_web,
    ubicacio,
    horari_ca,
    horari_es,
    horari_en,
    horari_de,
    descripcio_ca,
    descripcio_es,
    descripcio_en,
    descripcio_de,
    imatge,
    carta,
    rang_preus,
    id_tipus
)
VALUES(
    2,
    "Mamma Mia",
    "646 44 11 85",
    "https://es-es.facebook.com/pizzeriamammamiacanpicafort/",
    "Passeig Colón, 95, 07458 Can Picafort, Illes Balears",
    "13:00-15:30, 19:00-22:30. Dijous tancat.",
    "13:00-15:30, 19:00-22:30. Jueves cerrado.",
    "13:00-15:30, 19:00-22:30. Thursday closed.",
    "13:00-15:30, 19:00-22:30. Donnerstags geschlossen.",
    "Restaurant amb un ambient acollidor i informal ideal per a famílies i nens que ofereix cuina italiana.",
    "Restaurante con un ambiente acogedor e informal ideal para familias y niños que ofrece cocina italiana.",
    "Restaurant with a cozy and informal atmosphere ideal for families and children offering Italian cuisine.",
    "Restaurant mit gemütlicher und ungezwungener Atmosphäre, ideal für Familien und Kinder, mit italienischer Küche.",
    null,
    null,
    "€€",
    2
);

INSERT INTO restaurants(
    id_restaurant,
    nom,
    telefon,
    pagina_web,
    ubicacio,
    horari_ca,
    horari_es,
    horari_en,
    horari_de,
    descripcio_ca,
    descripcio_es,
    descripcio_en,
    descripcio_de,
    imatge,
    carta,
    rang_preus,
    id_tipus
)
VALUES(
    3,
    "Hong Kong",
    "971 85 15 86",
    "https://www.facebook.com/Restaurante-Hong-Kong-287339104633516/",
    "Passeig Colón, 155, 07458 Can Picafort, Illes Balears",
    "12:15-15:30, 19:00-23:30. Dimecres tancat.",
    "12:15-15:30, 19:00-23:30. Miércoles cerrado.",
    "12:15-15:30, 19:00-23:30. Wednesday closed.",
    "12:15-15:30, 19:00-23:30. Mittwoch geschlossen.",
    "Restaurant acollidor i informal ideal per a nens que ofereix un menjar xinès saludable.",
    "Restaurante acogedor e informal ideal para niños que ofrece una comida china saludable.",
    "Cozy and informal restaurant ideal for children offering healthy Chinese food.",
    "Gemütliches und informelles Restaurant, ideal für Kinder, das gesunde chinesische Gerichte anbietet.",
    null,
    null,
    "€-€€",
    3
);

INSERT INTO restaurants(
    id_restaurant,
    nom,
    telefon,
    pagina_web,
    ubicacio,
    horari_ca,
    horari_es,
    horari_en,
    horari_de,
    descripcio_ca,
    descripcio_es,
    descripcio_en,
    descripcio_de,
    imatge,
    carta,
    rang_preus,
    id_tipus
)
VALUES(
    4,
    "El Gaucho",
    "680 84 56 04",
    "https://el-gaucho-asador.negocio.site/",
    "Carrer Silenci, 16, 07458 Can Picafort, Illes Balears",
    "12:00-24:00. Dimecres tancat.",
    "12:00-24:00. Miércoles cerrado.",
    "12:00-24:00. Wednesday closed.",
    "12:00-24:00. Mittwoch geschlossen.",
    "Un rostidor acollidor situat a primera línia de platja que ofereix delicioses carns a la brasa que pots gaudir mentre veus el mar.",
    "Un asador acogedor situado a primera línea de playa que ofrece deliciosas carnes a la brasa que puedes disfrutar mientras ves el mar.",
    "A cozy grill located on the beachfront that offers delicious grilled meats that you can enjoy while watching the sea.",
    "Ein gemütlicher Grill direkt am Strand, der köstliches Fleisch vom Grill anbietet, das Sie genießen können, während Sie das Meer beobachten.",
    null,
    null,
    "€€",
    7
);

INSERT INTO restaurants(
    id_restaurant,
    nom,
    telefon,
    pagina_web,
    ubicacio,
    horari_ca,
    horari_es,
    horari_en,
    horari_de,
    descripcio_ca,
    descripcio_es,
    descripcio_en,
    descripcio_de,
    imatge,
    carta,
    rang_preus,
    id_tipus
)
VALUES(
    5,
    "Vinicius",
    "971 85 07 06",
    "https://restaurantevinicius.com/",
    "Av. Josep Trias, 27, 07458 Can Picafort, Illes Balears",
    "Dimarts a divendres 12.00-16.00, 19.-24.00. Dissabte i diumenge 12.00-24.00. Dilluns tancat.",
    "Martes a viernes 12:00-16:00, 19:-24:00. Sábado y domingo 12:00-24:00. Lunes cerrado.",
    "Tuesday to Friday 12:00-16:00, 19:-24:00. Saturday and Sunday 12:00-24:00. Monday closed.",
    "Dienstag bis Freitag 12:00-16:00 Uhr, 19:-24:00 Uhr. Samstag und Sonntag 12:00-24:00 Uhr. Montag geschlossen.",
    "Restaurant acollidor i informal ideal per a famílies i grups amb una àmplia varietat de menjar mediterrani.",
    "Restaurante acogedor e informal ideal para familias y grupos con una amplia variedad de comida mediterránea.",
    "Cozy and informal restaurant ideal for families and groups with a wide variety of Mediterranean food.",
    "Gemütliches und informelles Restaurant, ideal für Familien und Gruppen, mit einer großen Auswahl an mediterranen Gerichten.",
    null,
    null,
    "€€-€€€",
    1
);

INSERT INTO restaurants(
    id_restaurant,
    nom,
    telefon,
    pagina_web,
    ubicacio,
    horari_ca,
    horari_es,
    horari_en,
    horari_de,
    descripcio_ca,
    descripcio_es,
    descripcio_en,
    descripcio_de,
    imatge,
    carta,
    rang_preus,
    id_tipus
)
VALUES(
    6,
    "Burger King",
    "971 85 26 81",
    "https://www.burgerking.es/",
    "Carrer del Passeig de Colón, Passeig Colón, 135, 07458 Can Picafort, Illes Balears",
    "Dilluns a diumenge 12:30-22:00.",
    "Lunes a domingo 12:30-22:00.",
    "Monday to Sunday 12:30-22:00.",
    "Montag bis Sonntag 12:30-22:00.",
    "Coneguda cadena de menjar ràpid que serveix hamburgueses a la graella, patates fregides i batuts.",
    "Conocida cadena de comida rápida que sirve hamburguesas a la parrilla, patatas fritas y batidos.",
    "Cozy and informal restaurant ideal for families and groups with a wide variety of Mediterranean food.",
    "Gemütliches und informelles Restaurant, ideal für Familien und Gruppen, mit einer großen Auswahl an mediterranen Gerichten.",
    null,
    null,
    "€",
    4
);

INSERT INTO restaurants(
    id_restaurant,
    nom,
    telefon,
    pagina_web,
    ubicacio,
    horari_ca,
    horari_es,
    horari_en,
    horari_de,
    descripcio_ca,
    descripcio_es,
    descripcio_en,
    descripcio_de,
    imatge,
    carta,
    rang_preus,
    id_tipus
)
VALUES(
    7,
    "Sa Mexicana",
    "697 45 43 31",
    "https://sa-mexicana.negocio.site/?utm_source=gmb&utm_medium=referral",
    "Av. Diagonal, n9, 07458 Can Picafort, Illes Balears",
    "Dilluns a diumenge 11:00-16:00, 19:00-23:30.",
    "Lunes a domingo 11:00-16:00, 19:00-23:30.",
    "Monday to Sunday 11:00-16:00, 19:00-23:30.",
    "Montag bis Sonntag 11:00-16:00, 19:00-23:30.",
    "Restaurant acollidor i informal ideal per a nens que disposa de menjar mexicà.",
    "Restaurante acogedor e informal ideal para niños que dispone de comida mexicana.",
    "Cozy and informal restaurant ideal for children with Mexican food.",
    "Gemütliches und informelles Restaurant mit mexikanischer Küche, ideal für Kinder.",
    null,
    null,
    "€",
    9
);

INSERT INTO restaurants(
    id_restaurant,
    nom,
    telefon,
    pagina_web,
    ubicacio,
    horari_ca,
    horari_es,
    horari_en,
    horari_de,
    descripcio_ca,
    descripcio_es,
    descripcio_en,
    descripcio_de,
    imatge,
    carta,
    rang_preus,
    id_tipus
)
VALUES(
    8,
    "Can Montevideo",
    "971 85 29 43",
    "https://es-es.facebook.com/canmontevideopizzas/",
    "Carrer Ran de Mar, 14, 07458 Can Picafort, Illes Balears",
    "9.00-23.00. Dilluns tancat.",
    "9:00-23:00. Lunes cerrado.",
    "9:00-23:00. Monday closed.",
    "9:00-23:00. Montag geschlossen.",
    "Restaurant acollidor i informal que ofereix tipus de cuina uruguaiana i saludable.",
    "Restaurante acogedor e informal que ofrece tipo de cocina uruguaya y saludable.",
    "Friendly and informal restaurant offering Uruguayan and healthy cuisine.",
    "Gemütliches und informelles Restaurant mit uruguayischer und gesunder Küche.",
    null,
    null,
    "€",
    10
);

INSERT INTO restaurants(
    id_restaurant,
    nom,
    telefon,
    pagina_web,
    ubicacio,
    horari_ca,
    horari_es,
    horari_en,
    horari_de,
    descripcio_ca,
    descripcio_es,
    descripcio_en,
    descripcio_de,
    imatge,
    carta,
    rang_preus,
    id_tipus
)
VALUES(
    9,
    "L'Incanto",
    "971 85 20 68",
    "https://www.facebook.com/Lincanto-432316333462016/",
    "Passeig Colón, 147, 07458 Can Picafort, Illes Balears",
    "12:30-16:00, 19:00-23:00. Dijous tancat.",
    "12:30-16:00, 19:00-23:00. Jueves cerrado.",
    "12:30-16:00, 19:00-23:00. Thursday closed.",
    "12:30-16:00, 19:00-23:00. Donnerstag geschlossen.",
    "Restaurant acollidor i informal on pots trobar pizzes artesanes, pastes, ensalades, escalops...",
    "Restaurante acogedor e informal donde puedes encontrar pizzas artesanas, pastas, ensaladas, escalopes...",
    "Cozy and informal restaurant where you can find homemade pizzas, pastas, salads, escalopes...",
    "Gemütliches und informelles Restaurant, in dem Sie hausgemachte Pizzen, Pasta, Salate, Schnitzel...",
    null,
    null,
    "€",
    2
);

INSERT INTO restaurants(
    id_restaurant,
    nom,
    telefon,
    pagina_web,
    ubicacio,
    horari_ca,
    horari_es,
    horari_en,
    horari_de,
    descripcio_ca,
    descripcio_es,
    descripcio_en,
    descripcio_de,
    imatge,
    carta,
    rang_preus,
    id_tipus
)
VALUES(
    10,
    "Sapori",
    "971 85 08 96",
    "https://saporicanpicafort.com/es/sapori-restaurantes-can-picafort/",
    "Passeig Enginyer Antoni Garau, 2, 07458 Can Picafort, Illes Balears",
    "10:30-23:30.",
    "10:30-23:30.",
    "10:30-23:30.",
    "10:30-23:30.",
    "Restaurant mediterrani al passeig de la platja de Can Picafort. Vine a conèixer el nostre concepte gastronòmic amb una àmplia varietat de plats.",
    "Restaurante mediterráneo en pleno paseo de la playa de Can Picafort. Ven a conocer nuestro concepto gastronómico con una amplia variedad de platos.",
    "Mediterranean restaurant right on the beach promenade of Can Picafort. Come to know our gastronomic concept with a wide variety of dishes.",
    "Mediterranes Restaurant direkt an der Strandpromenade von Can Picafort. Kommen Sie und entdecken Sie unser gastronomisches Konzept mit einer großen Auswahl an Gerichten.",
    null,
    null,
    "€€-€€€",
    1
);

INSERT INTO restaurants(
    id_restaurant,
    nom,
    telefon,
    pagina_web,
    ubicacio,
    horari_ca,
    horari_es,
    horari_en,
    horari_de,
    descripcio_ca,
    descripcio_es,
    descripcio_en,
    descripcio_de,
    imatge,
    carta,
    rang_preus,
    id_tipus
)
VALUES(
    11,
    "El Patrón",
    "871 53 19 36",
    "https://restaurante-el-patron.negocio.site/",
    "Carrer José Trias, 9, 07458 Can Picafort, Illes Balears",
    "Diumenge a divendres 12.00-16.00, 19.00-23.30. Dissabte 18.00-23.30.",
    "Domingo a viernes 12:00-16:00, 19:00-23:30. Sábado 18:00-23:30.",
    "Sunday to Friday 12:00-16:00, 19:00-23:30. Saturday 18:00-23:30.",
    "Sonntag bis Freitag 12:00-16:00, 19:00-23:30. Samstag 18:00-23:30.",
    "Restaurant acollidor i informal que compta amb una cuina mediterrània excel·lent.",
    "Restaurante acogedor e informal que cuenta con una excelente cocina mediterránea.",
    "Cozy and informal restaurant with excellent Mediterranean cuisine.",
    "Gemütliches und informelles Restaurant mit ausgezeichneter mediterraner Küche.",
    null,
    null,
    "€€-€€€",
    1
);

INSERT INTO restaurants(
    id_restaurant,
    nom,
    telefon,
    pagina_web,
    ubicacio,
    horari_ca,
    horari_es,
    horari_en,
    horari_de,
    descripcio_ca,
    descripcio_es,
    descripcio_en,
    descripcio_de,
    imatge,
    carta,
    rang_preus,
    id_tipus
)
VALUES(
    12,
    "Mónaco",
    "971 85 03 74",
    "https://www.facebook.com/monacorestaurante/",
    "Avinguda de José Trias, 20, 07458 Can Picafort, Illes Balears",
    "12:00-23:00. Dimarts tancat.",
    "12:00-23:00. Martes cerrado.",
    "12:00-23:00. Tuesday closed.",
    "12:00-23:00. Dienstag geschlossen.",
    "Restaurant situat a la zona de vianants de Can Picafort, on podràs gaudir d'un ambient agradable, mentre menges una de les nostres especialitats, amb carns o pasta.",
    "Restaurante situado en la zona peatonal de Can Picafort, donde podrás disfrutar de un ambiente agradable, mientras comes una de nuestras especialidades, en carnes o pasta.",
    "Restaurant located in the pedestrian area of Can Picafort, where you can enjoy a pleasant atmosphere while you eat one of our specialities, meat or pasta.",
    "In der Fußgängerzone von Can Picafort gelegenes Restaurant, wo Sie in angenehmer Atmosphäre eine unserer Spezialitäten, Fleisch oder Pasta, genießen können.",
    null,
    null,
    "€€-€€€",
    1
);

INSERT INTO restaurants(
    id_restaurant,
    nom,
    telefon,
    pagina_web,
    ubicacio,
    horari_ca,
    horari_es,
    horari_en,
    horari_de,
    descripcio_ca,
    descripcio_es,
    descripcio_en,
    descripcio_de,
    imatge,
    carta,
    rang_preus,
    id_tipus
)
VALUES(
    13,
    "El Puerto",
    "971 85 09 42",
    "https://www.facebook.com/elpuertocanpicafort/",
    "Carrer Cervantes, 22, 07458 Can Picafort, Illes Balears",
    "Divendres 11:30-24:00. Dissabte 8.30-24.00. Diumenge 8:30-19:00. Dilluns a dijous tancat.",
    "Viernes 11:30-24:00. Sábado 8:30-24:00. Domingo 8:30-19:00. Lunes a jueves cerrado.",
    "Friday 11:30-24:00. Saturday 8:30-24:00. Sunday 8:30-19:00. Monday to Thursday closed.",
    "Freitag 11:30-24:00 Uhr. Samstag 8:30-24:00 Uhr. Sonntag 8:30-19:00. Montag bis Donnerstag geschlossen.",
    "Restaurant de menjar mediterrani situat al passeig de la platja de Ca'n Picafort.",
    "Restaurante de comida mediterránea situado en pleno paseo de la playa de Ca'n Picafort.",
    "Mediterranean food restaurant located right on the beach promenade in Ca'n Picafort.",
    "Das Restaurant mit mediterraner Küche liegt direkt an der Strandpromenade von Ca'n Picafort.",
    null,
    null,
    "€€-€€€",
    1
);

INSERT INTO restaurants(
    id_restaurant,
    nom,
    telefon,
    pagina_web,
    ubicacio,
    horari_ca,
    horari_es,
    horari_en,
    horari_de,
    descripcio_ca,
    descripcio_es,
    descripcio_en,
    descripcio_de,
    imatge,
    carta,
    rang_preus,
    id_tipus
)
VALUES(
    14,
    "Alibaba Kebab & Doner",
    "643 07 86 37",
    "https://alibaba-kebab-doner.business.site/?utm_source=gmb&utm_medium=referral",
    "Av. Josep Trias, nr 5, 07458 Can Picafort, Illes Balears",
    "Dilluns a diumenge 11:50-23:00.",
    "Lunes a domingo 11:50-23:00.",
    "Monday to Sunday 11:50-23:00.",
    "Montag bis Sonntag 11:50-23:00 Uhr.",
    "Restaurant informal ubicat a prop del passeig de la platja de Ca'n Picafort on pots menjar exquisits kebabs.",
    "Restaurante informal ubicado cerca del paseo de la playa de Ca'n Picafort donde puedes comer exquisitos kebabs.",
    "Informal restaurant located near the beach promenade of Ca'n Picafort where you can eat delicious kebabs.",
    "Informelles Restaurant in der Nähe der Strandpromenade von Ca'n Picafort, in dem man leckere Kebabs essen kann.",
    null,
    null,
    "€",
    12
);

INSERT INTO restaurants(
    id_restaurant,
    nom,
    telefon,
    pagina_web,
    ubicacio,
    horari_ca,
    horari_es,
    horari_en,
    horari_de,
    descripcio_ca,
    descripcio_es,
    descripcio_en,
    descripcio_de,
    imatge,
    carta,
    rang_preus,
    id_tipus
)
VALUES(
    15,
    "La Pinta",
    "971 85 11 82",
    "https://www.la-pinta.com/",
    "Passeig Colón, 159, 07458 Can Picafort, Illes Balears",
    "18:00-24:00. Dijous tancat.",
    "18:00-24:00. Jueves cerrado.",
    "18:00-24:00. Thursday closed.",
    "18:00-24:00. Donnerstag geschlossen.",
    "Restaurant elegant i acollidor amb una exquisida carta de cuina mediterrània.",
    "Restaurante elegante y acogedor con una exquisita carta de cocina mediterránea.",
    "Elegant and comfortable restaurant with an exquisite menu of Mediterranean cuisine.",
    "Elegantes und gemütliches Restaurant mit einer exquisiten Speisekarte der mediterranen Küche.",
    null,
    null,
    "€€-€€€",
    1
);

INSERT INTO restaurants(
    id_restaurant,
    nom,
    telefon,
    pagina_web,
    ubicacio,
    horari_ca,
    horari_es,
    horari_en,
    horari_de,
    descripcio_ca,
    descripcio_es,
    descripcio_en,
    descripcio_de,
    imatge,
    carta,
    rang_preus,
    id_tipus
)
VALUES(
    16,
    "Sabores de India",
    "680 34 75 47",
    "https://sabores-de-india1.webnode.es/",
    "Carrer José Trias, 07458 Can Picafort, Illes Balears",
    "Dilluns a diumenge 12:00-23:00.",
    "Lunes a domingo 12:00-23:00.",
    "Monday to Sunday 12:00-23:00.",
    "Montag bis Sonntag 12:00-23:00 Uhr.",
    "Restaurant informal on pots gaudir d'una carta suculenta amb els sabors típics de l'Índia.",
    "Restaurante informal en el cual puedes disfrutar de una suculenta carta con los sabores típicos de la India.",
    "Casual restaurant where you can enjoy a succulent menu with typical Indian flavours.",
    "Informelles Restaurant, in dem Sie ein saftiges Menü mit typisch indischen Aromen genießen können.",
    null,
    null,
    "€€-€€€",
    8
);

INSERT INTO restaurants(
    id_restaurant,
    nom,
    telefon,
    pagina_web,
    ubicacio,
    horari_ca,
    horari_es,
    horari_en,
    horari_de,
    descripcio_ca,
    descripcio_es,
    descripcio_en,
    descripcio_de,
    imatge,
    carta,
    rang_preus,
    id_tipus
)
VALUES(
    17,
    "SushiYoko II",
    "971 85 24 47",
    "https://mallorcafoodies.com/restaurante/sushi-yoko-can-picafort/",
    "Passeig Colón, 143, 07458 Can Picafort, Illes Balears",
    "Dilluns a diumenge 12:00-16:00, 19:30-23:30.",
    "Lunes a domingo 12:00-16:00, 19:30-23:30.",
    "Monday to Sunday 12:00-16:00, 19:30-23:30.",
    "Montag bis Sonntag 12:00-16:00, 19:30-23:30.",
    "Si voleu gaudir d'un bon sushi autèntic o de menjar japonès a bon preu a Can Picafort, el restaurant japonès Sushi Yoko és una molt bona opció. Podràs delectar el teu paladar amb delícies japoneses.",
    "Si quieres disfrutar de un buen sushi auténtico o de comida japonesa a buen precio en Can Picafort, el restaurante japonés Sushi Yoko es una muy buena opción. Podrás deleitar tu paladar con delicias japonesas.",
    "If you want to enjoy a good authentic sushi or Japanese food at a good price in Can Picafort, the Japanese restaurant Sushi Yoko is a very good option. You will be able to delight your palate with Japanese delicacies.",
    "Wenn Sie in Can Picafort ein gutes, authentisches Sushi oder japanisches Essen zu einem guten Preis genießen möchten, ist das japanische Restaurant Sushi Yoko eine sehr gute Wahl. Sie werden Ihren Gaumen mit japanischen Köstlichkeiten verwöhnen können.",
    null,
    null,
    "€",
    5
);

INSERT INTO restaurants(
    id_restaurant,
    nom,
    telefon,
    pagina_web,
    ubicacio,
    horari_ca,
    horari_es,
    horari_en,
    horari_de,
    descripcio_ca,
    descripcio_es,
    descripcio_en,
    descripcio_de,
    imatge,
    carta,
    rang_preus,
    id_tipus
)
VALUES(
    18,
    "Luz de Luna",
    "971 85 08 26",
    "http://s332524457.mialojamiento.es/lunachina/index.php/luz-de-luna.html",
    "Passeig Colón, 53, 07458 Can Picafort, Illes Balears",
    "12:30-16:00, 19:00-23:30. Dimarts tancat.",
    "12:30-16:00, 19:00-23:30. Martes cerrado.",
    "12:30-16:00, 19:00-23:30. Closed on Tuesdays.",
    "12:30-16:00, 19:00-23:30. Dienstags geschlossen.",
    "Plats típics de menjar xinès en un local familiar amb amplis finestrals i una terrassa amb vistes al mar.",
    "Platos típicos de comida china en un local familiar con amplios ventanales y una terraza con vistas al mar.",
    "Typical Chinese cuisine in a family restaurant with large windows and a terrace overlooking the sea.",
    "Typische chinesische Gerichte in einem Familienrestaurant mit großen Fenstern und einer Terrasse mit Blick aufs Meer.",
    null,
    null,
    "€",
    3
);

INSERT INTO restaurants(
    id_restaurant,
    nom,
    telefon,
    pagina_web,
    ubicacio,
    horari_ca,
    horari_es,
    horari_en,
    horari_de,
    descripcio_ca,
    descripcio_es,
    descripcio_en,
    descripcio_de,
    imatge,
    carta,
    rang_preus,
    id_tipus
)
VALUES(
    19,
    "El Molino",
    "971 85 02 49",
    "https://es.restaurantguru.com/El-Molino-Can-Picafort",
    "Carrer Badia, 8, 07458 Can Picafort, Illes Balears",
    "19:00-01:30. Dilluns tancat.",
    "19:00-01:30. Lunes cerrado.",
    "19:00-01:30. Monday closed.",
    "19:00-01:30. Montag geschlossen.",
    "Rostidor acollidor i informal que ofereix una carta exquisida de carns a la brasa.",
    "Asador acogedor e informal que ofrece una carta exquisita de carnes a la brasa.",
    "Welcoming and informal grill that offers an exquisite menu of grilled meats.",
    "Gemütlicher und informeller Grill, der eine exquisite Speisekarte mit gegrilltem Fleisch bietet.",
    null,
    null,
    "€€-€€€",
    11
);

INSERT INTO restaurants(
    id_restaurant,
    nom,
    telefon,
    pagina_web,
    ubicacio,
    horari_ca,
    horari_es,
    horari_en,
    horari_de,
    descripcio_ca,
    descripcio_es,
    descripcio_en,
    descripcio_de,
    imatge,
    carta,
    rang_preus,
    id_tipus
)
VALUES(
    20,
    "Dakota Tex Mex",
    "971 89 42 63",
    "https://dakotatexmex.com/",
    "Av. Josep Trias, 16, 07458 Can Picafort, Illes Balears",
    "Dilluns a diumenge 12:30-22:30.",
    "Lunes a domingo 12:30-22:30.",
    "Monday to Sunday 12:30-22:30.",
    "Montag bis Sonntag 12:30-22:30 Uhr.",
    "Dakota és una cadena de restaurants inspirats en la temàtica americana situats als llocs més emblemàtics del nord de Mallorca i que es defineix per la seva atractiva decoració i els plats deliciosos.",
    "Dakota es una cadena de restaurantes inspirados en la temática americana situados en los lugares más emblemáticos del norte de Mallorca y que se define por su atractiva decoración y sus deliciosos platos.",
    "Dakota is a chain of American-inspired restaurants located in the most emblematic places in the north of Mallorca and is defined by its attractive décor and delicious dishes.",
    "Das Dakota ist eine Kette von amerikanisch inspirierten Restaurants, die sich an den bekanntesten Orten im Norden Mallorcas befinden und sich durch ihr attraktives Dekor und ihre köstlichen Gerichte auszeichnen.",
    null,
    null,
    "€€-€€€",
    6
);

-- INSERTS PER A LA TAULA RESTAURANTS_SERVEIS --

-- SERVEIS DEL RESTAURANT 1 --
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (1, 1);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (1, 2);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (1, 7);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (1, 8);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (1, 10);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (1, 12);

-- SERVEIS DEL RESTAURANT 2 --
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (2, 1);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (2, 2);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (2, 4);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (2, 7);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (2, 8);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (2, 10);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (2, 12);

-- SERVEIS DEL RESTAURANT 3 --
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (3, 1);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (3, 2);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (3, 4);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (3, 6);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (3, 7);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (3, 10);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (3, 12);


-- SERVEIS DEL RESTAURANT 4 --
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (4, 1);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (4, 4);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (4, 5);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (4, 6);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (4, 7);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (4, 10);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (4, 12);

-- SERVEIS DEL RESTAURANT 5 --
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (5, 1);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (5, 2);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (5, 3);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (5, 4);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (5, 5);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (5, 6);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (5, 7);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (5, 8);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (5, 9);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (5, 10);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (5, 11);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (5, 12);

-- SERVEIS DEL RESTAURANT 6 --
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (6, 1);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (6, 2);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (6, 7);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (6, 9);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (6, 10);

-- SERVEIS DEL RESTAURANT 7 --
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (7, 1);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (7, 2);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (7, 6);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (7, 7);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (7, 8);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (7, 9);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (7, 10);

-- SERVEIS DEL RESTAURANT 8 --
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (8, 1);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (8, 2);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (8, 6);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (8, 7);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (8, 8);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (8, 10);

-- SERVEIS DEL RESTAURANT 9 --
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (9, 1);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (9, 2);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (9, 6);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (9, 7);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (9, 8);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (9, 10);

-- SERVEIS DEL RESTAURANT 10 --
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (10, 1);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (10, 3);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (10, 5);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (10, 6);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (10, 7);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (10, 8);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (10, 10);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (10, 12);

-- SERVEIS DEL RESTAURANT 11 --
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (11, 1);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (11, 2);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (11, 4);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (11, 5);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (11, 7);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (11, 8);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (11, 10);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (11, 12);

-- SERVEIS DEL RESTAURANT 12 --
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (12, 1);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (12, 2);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (12, 6);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (12, 7);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (12, 8);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (12, 10);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (12, 12);

-- SERVEIS DEL RESTAURANT 13 --
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (13, 1);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (13, 2);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (13, 3);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (13, 6);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (13, 7);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (13, 8);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (13, 10);

-- SERVEIS DEL RESTAURANT 14 --
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (14, 2);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (14, 7);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (14, 8);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (14, 9);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (14, 10);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (14, 11);

-- SERVEIS DEL RESTAURANT 15 --
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (15, 1);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (15, 3);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (15, 4);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (15, 5);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (15, 6);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (15, 7);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (15, 10);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (15, 12);

-- SERVEIS DEL RESTAURANT 16 --
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (16, 1);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (16, 6);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (16, 7);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (16, 8);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (16, 10);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (16, 12);

-- SERVEIS DEL RESTAURANT 17 --
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (17, 1);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (17, 2);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (17, 6);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (17, 7);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (17, 8);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (17, 10);

-- SERVEIS DEL RESTAURANT 18 --
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (18, 1);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (18, 2);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (18, 3);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (18, 4);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (18, 8);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (18, 10);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (18, 12);

-- SERVEIS DEL RESTAURANT 19 --
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (19, 1);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (19, 5);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (19, 6);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (19, 7);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (19, 10);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (19, 12);

-- SERVEIS DEL RESTAURANT 20 --
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (20, 1);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (20, 2);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (20, 7);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (20, 10);
INSERT INTO restaurants_serveis (id_restaurant, id_servei) VALUES (20, 12);

-- INSERTS PER A LA TAULA FOTOS --

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
(20, 192, 'http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/restaurants/foto_restaurant192_1650983396.png');