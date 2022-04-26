<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Rutes</title>
    <style>
        * {
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
        }

        body {
            font-family: Helvetica;
            -webkit-font-smoothing: antialiased;
            background-color: #1a202c;
        }

        h1 {
            text-align: center;
            font-size: 26px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: white;
            padding: 30px 0;
        }

        .table-wrapper {
            margin: auto;
            box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2);
        }

        .fl-table {
            border-radius: 5px;
            font-size: 14px;
            border: none;
            border-collapse: collapse;
            width: fit-content;
            white-space: nowrap;
            background-color: white;
            margin: auto;
        }

        .fl-table td,
        .fl-table th {
            text-align: center;
            padding: 8px;
        }

        .fl-table td {
            border-right: 1px solid #f8f8f8;
            font-size: 15px;
        }

        .fl-table thead th {
            color: #ffffff;
            background: #4FC3A1;
        }


        .fl-table thead th:nth-child(odd) {
            color: #ffffff;
            background: #324960;
        }

        .fl-table tr:nth-child(even) {
            background: #F8F8F8;
        }

        /* Responsive */

        @media (max-width: 767px) {
            .fl-table {
                display: block;
                width: 100%;
            }

            .table-wrapper:before {
                content: "Scroll horizontally >";
                display: block;
                text-align: right;
                font-size: 15px;
                color: white;
                padding: 0 0 10px;
            }

            .fl-table thead,
            .fl-table tbody,
            .fl-table thead th {
                display: block;
            }

            .fl-table thead th:last-child {
                border-bottom: none;
            }

            .fl-table thead {
                float: left;
            }

            .fl-table tbody {
                width: auto;
                position: relative;
                overflow-x: auto;
            }

            .fl-table td,
            .fl-table th {
                padding: 20px .625em .625em .625em;
                height: 60px;
                vertical-align: middle;
                box-sizing: border-box;
                overflow-x: hidden;
                overflow-y: auto;
                width: 120px;
                font-size: 15px;
                text-overflow: ellipsis;
            }

            .fl-table thead th {
                text-align: left;
                border-bottom: 1px solid #f7f7f9;
            }

            .fl-table tbody tr {
                display: table-cell;
            }

            .fl-table tbody tr:nth-child(odd) {
                background: none;
            }

            .fl-table tr:nth-child(even) {
                background: transparent;
            }

            .fl-table tr td:nth-child(odd) {
                background: #F8F8F8;
                border-right: 1px solid #E6E4E4;
            }

            .fl-table tr td:nth-child(even) {
                border-right: 1px solid #E6E4E4;
            }

            .fl-table tbody td {
                display: block;
                text-align: center;
            }
        }
    </style>
</head>

<body>
    <h1>RUTES DE L'APLICACIÓ</h1>
    <div class="table-wrapper">
        <table class="fl-table">
            <thead>
                <tr>
                    <th>TAULA</th>
                    <th>MÈTODE HTTP</th>
                    <th>URI</th>
                    <th>DESCRIPCIÓ</th>
                    <th>PARÀMETRES</th>
                </tr>
            </thead>
            <!--LOGIN I LOGOUT-->
            <tbody>
                <tr>
                    <td></td>
                    <td>POST</td>
                    <td>/login</td>
                    <td>Fer login a l'aplicació</td>
                    <td>email_usuari, password</td>
                </tr>
                <tr>
                    <td></td>
                    <td>POST</td>
                    <td>/logout</td>
                    <td>Fer logout de l'aplicació</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <!--TAULA COMENTARIS-->
                <tr>
                    <td>Comentaris</td>
                    <td>GET</td>
                    <td>/comentaris</td>
                    <td>Llista de tots els comentaris de la base de dades</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Comentaris</td>
                    <td>GET</td>
                    <td>/comentaris/{id_comentari}</td>
                    <td>Retorna un comentari donat el seu ID</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Comentaris</td>
                    <td>POST</td>
                    <td>/comentaris</td>
                    <td>Crea un nou comentari a la base de dades</td>
                    <td>comentari, data, id_usuari, id_restaurant</td>
                </tr>
                <tr>
                    <td>Comentaris</td>
                    <td>PUT</td>
                    <td>/comentaris/{id_comentari}</td>
                    <td>Modifica un comentari donat el seu ID</td>
                    <td>comentari, data, id_usuari, id_restaurant</td>
                </tr>
                <tr>
                    <td>Comentaris</td>
                    <td>DELETE</td>
                    <td>/comentaris/{id_comentari}</td>
                    <td>Borra un comentari donat el seu ID</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Comentaris</td>
                    <td>GET</td>
                    <td>/comentaris/restaurant/{id_restaurant}</td>
                    <td>Mostra tots els comentaris d'un restaurant per el seu ID</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <!--TAULA FOTOS-->
                <tr>
                    <td>Fotos</td>
                    <td>GET</td>
                    <td>/fotos</td>
                    <td>Llista de totes les fotos de la base de dades</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Fotos</td>
                    <td>GET</td>
                    <td>/fotos/{id}</td>
                    <td>Retorna una foto per el seu ID</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Fotos</td>
                    <td>POST</td>
                    <td>/fotos</td>
                    <td>Crea una nova foto</td>
                    <td>id_restaurant, id_foto</td>
                </tr>
                <tr>
                    <td>Fotos</td>
                    <td>DELETE</td>
                    <td>/fotos/{id}</td>
                    <td>Esborra una foto</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Fotos</td>
                    <td>POST</td>
                    <td>/fotos/imatge/{id_foto}</td>
                    <td>Puja i associa una foto a un restaurant</td>
                    <td>foto</td>
                </tr>
                <tr>
                    <td>Fotos</td>
                    <td>GET</td>
                    <td>/fotos/restaurant/{id}</td>
                    <td>Mostra totes les fotos d'un restaurant per el seu ID</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <!--TAULA IDIOMES-->
                <tr>
                    <td>Idiomes</td>
                    <td>GET</td>
                    <td>/idiomes</td>
                    <td>Llista de tots els idiomes de la base de dades</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Idiomes</td>
                    <td>GET</td>
                    <td>/idiomes/{id_idioma}</td>
                    <td>Retorna un idioma donat el seu ID</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <!--TAULA RESTAURANTS_SERVEIS-->
                <tr>
                    <td>Restaurants_serveis</td>
                    <td>POST</td>
                    <td>/restaurants_serveis</td>
                    <td>Associa un servei a un restaurant</td>
                    <td>id_restaurant, id_servei</td>
                </tr>
                <tr>
                    <td>Restaurants_serveis</td>
                    <td>DELETE</td>
                    <td>/restaurants_serveis/{id_restaurant}/{id_servei}</td>
                    <td>Esborra un servei d'un restaurant</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Restaurants_serveis</td>
                    <td>GET</td>
                    <td>/restaurants_serveis/restaurants/{id_servei}</td>
                    <td>Torna tots els restaurants que ofereixen<br/> un servei en concret donat el seu ID</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Restaurants_serveis</td>
                    <td>GET</td>
                    <td>/restaurants_serveis</td>
                    <td>Crea una nova modalitat a la base de dades</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Restaurants_serveis</td>
                    <td>GET</td>
                    <td>/restaurants_serveis/serveisCa/{id_restaurant}</td>
                    <td>Donat l'ID d'un restaurant torna <br/> tots els serveis que ofereix en català</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Restaurants_serveis</td>
                    <td>GET</td>
                    <td>/restaurants_serveis/serveisEs/{id_restaurant}</td>
                    <td>Donat l'ID d'un restaurant torna <br/> tots els serveis que ofereix en castellà</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Restaurants_serveis</td>
                    <td>GET</td>
                    <td>/restaurants_serveis/serveisEn/{id_restaurant}</td>
                    <td>Donat l'ID d'un restaurant torna <br/> tots els serveis que ofereix en anglès</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Restaurants_serveis</td>
                    <td>GET</td>
                    <td>/restaurants_serveis/serveisDe/{id_restaurant}</td>
                    <td>Donat l'ID d'un restaurant torna <br/> tots els serveis que ofereix en alemany</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <!--TAULA MUNICIPIS-->
                <tr>
                    <td>Municipis</td>
                    <td>GET</td>
                    <td>/municipis</td>
                    <td>Retorna tots els municipis</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Municipis</td>
                    <td>GET</td>
                    <td>/municipis{id}</td>
                    <td>Retorna un municipi en concret</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Municipis</td>
                    <td>POST</td>
                    <td>/municipis</td>
                    <td>Crea un nou municipi</td>
                    <td>nom_municipi, illa</td>
                </tr>
                <tr>
                    <td>Municipis</td>
                    <td>PUT</td>
                    <td>/municipis{id}</td>
                    <td>Modifica algun atribut de municipis</td>
                    <td>nom_municipi, illa</td>
                </tr>
                <tr>
                    <td>Municipis</td>
                    <td>DELETE</td>
                    <td>/municipis{id}</td>
                    <td>Esborra un municipi</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <!--TAULA OBRES-->
                <tr>
                    <td>Obres</td>
                    <td>GET</td>
                    <td>/obres</td>
                    <td>Llistat de totes les obres de la base de dades</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Obres</td>
                    <td>GET</td>
                    <td>/obres{id}</td>
                    <td>Retorna una obra donat el seu ID</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Obres</td>
                    <td>POST</td>
                    <td>/obres</td>
                    <td>Crea una nova obra a la base de dades</td>
                    <td>id_autor, id_exposicio, id_modalitat, titol, any_data, fotografia, <br> descripcio_obra_es, descripcio_obra_ca, descripcio_obra_en</td>
                </tr>
                <tr>
                    <td>Obres</td>
                    <td>PUT</td>
                    <td>/obres{id}</td>
                    <td>Modifica una obra donat el seu ID</td>
                    <td>id_autor, id_exposicio, id_modalitat, titol, any_data, fotografia, <br> descripcio_obra_es, descripcio_obra_ca, descripcio_obra_en</td>
                </tr>
                <tr>
                    <td>Obres</td>
                    <td>DELETE</td>
                    <td>/obres{id}</td>
                    <td>Borra una obra donat el seu ID</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Obres</td>
                    <td>POST</td>
                    <td>/obres{id}/imatge</td>
                    <td>Inserta una fotografia de l'obra a la base de dades</td>
                    <td>fotografia</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <!--TAULA SERVEIS-->
                <tr>
                    <td>Serveis</td>
                    <td>GET</td>
                    <td>/serveis</td>
                    <td>Retorna tots els serveis</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Serveis</td>
                    <td>GET</td>
                    <td>/serveis{id}</td>
                    <td>Retorna un servei en concret</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Serveis</td>
                    <td>POST</td>
                    <td>/serveis</td>
                    <td>Crea un nou servei</td>
                    <td>nom_servei, descripcio_servei_es, <br/>descripcio_servei_ca, descripcio_servei_en</td>
                </tr>
                <tr>
                    <td>Serveis</td>
                    <td>PUT</td>
                    <td>/serveis{id}</td>
                    <td>Modifica algun atribut de serveis</td>
                    <td>nom_servei, descripcio_servei_es, <br/>descripcio_servei_ca, descripcio_servei_en</td>
                </tr>
                <tr>
                    <td>Serveis</td>
                    <td>DELETE</td>
                    <td>/serveis{id}</td>
                    <td>Esborra un servei</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <!--TAULA TIPUS-->
                <tr>
                    <td>Tipus</td>
                    <td>GET</td>
                    <td>/tipus</td>
                    <td>Retorna tots els tipus</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Tipus</td>
                    <td>GET</td>
                    <td>/tipus{id}</td>
                    <td>Retorna un tipus en concret</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Tipus</td>
                    <td>POST</td>
                    <td>/tipus</td>
                    <td>Crea un nou tipus</td>
                    <td>nom_tipus, descripcio_tipus_es, <br/>descripcio_tipus_ca, descripcio_tipus_en</td>
                </tr>
                <tr>
                    <td>Tipus</td>
                    <td>PUT</td>
                    <td>/tipus{id}</td>
                    <td>Modifica algun atribut de tipus</td>
                    <td>nom_tipus, descripcio_tipus_es,<br/> descripcio_tipus_ca, descripcio_tipus_en</td>
                </tr>
                <tr>
                    <td>Tipus</td>
                    <td>DELETE</td>
                    <td>/tipus{id}</td>
                    <td>Esborra un tipus</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <!--TAULA USUARIS-->
                <tr>
                    <td>Usuaris</td>
                    <td>GET</td>
                    <td>/usuaris</td>
                    <td>Retorna tots els usuaris</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Usuaris</td>
                    <td>GET</td>
                    <td>/usuaris{id}</td>
                    <td>Retorna un usuari en concret</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Usuaris</td>
                    <td>POST</td>
                    <td>/usuaris</td>
                    <td>Crea un nou usuari</td>
                    <td>nom_usuari, cognoms, email_usuari, <br/>telefon_usuari, password, registrat_desde</td>
                </tr>
                <tr>
                    <td>Usuaris</td>
                    <td>PUT</td>
                    <td>/usuaris{id}</td>
                    <td>Modifica un usuari</td>
                    <td>nom_usuari, cognoms, email_usuari, <br/>telefon_usuari, password, registrat_desde</td>
                </tr>
                <tr>
                    <td>Usuaris</td>
                    <td>DELETE</td>
                    <td>/usuaris{id}</td>
                    <td>Esborra un usuari</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <!--TAULA VALORACIONS-->
                <tr>
                    <td>Valoracions</td>
                    <td>GET</td>
                    <td>/valoracions</td>
                    <td>Retorna totes les valoracions</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Valoracions</td>
                    <td>GET</td>
                    <td>/valoracions{id}</td>
                    <td>Retorna una valoració en concret</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Valoracions</td>
                    <td>POST</td>
                    <td>/valoracions</td>
                    <td>Crea una nova valoració</td>
                    <td>id_usuari, id_espai, puntuacio</td>
                </tr>
                <tr>
                    <td>Valoracions</td>
                    <td>PUT</td>
                    <td>/valoracions{id}</td>
                    <td>Modifica algun atribut de una valoració</td>
                    <td>id_usuari, id_espai, puntuacio</td>
                </tr>
                <tr>
                    <td>Valoracions</td>
                    <td>DELETE</td>
                    <td>/valoracions{id}</td>
                    <td>Esborra una valoració</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Valoracions</td>
                    <td>GET</td>
                    <td>/valoracions/espai/{idEspai}</td>
                    <td>Retorna totes les valoracions d'un espai en concret</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
</body>
</html>