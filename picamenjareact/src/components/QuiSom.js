import axios from "axios";
import React, { Component } from "react";
import { Image } from "react-bootstrap";
import traduccions from "./traduccions.json";

export default class QuiSom extends Component {

    componentDidMount() {
        this.descarrega();
    }

    // FUNCIÓ PER RECARREGAR EL COMPONENT
    handleRefresh = () => {
        this.setState({});
    };

    descarrega = () => {
        if (sessionStorage.getItem("token") !== "" && sessionStorage.getItem("token") !== null) {
            const config = {
                headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
            };
            const usuari = sessionStorage.getItem("id_usuari");
            axios.get('https://picamenja.com/PicaMenja/public/api/usuaris/' + usuari, config)
                .then(response => {
                    //console.log(response);
                    this.setState({
                        id_usuari: response.data.id_usuari,
                        nom_usuari: response.data.nom_usuari,
                        foto_perfil: response.data.foto_perfil,
                    });
                })
                .catch(function (error) {
                    // Mostrar error
                    console.log(error);
                    if (error.response.status === 401 || error.response.status === 403) {
                        sessionStorage.setItem("token", "");
                        sessionStorage.setItem("admin", "");
                        sessionStorage.setItem("id_usuari", "");
                        alert(traduccions[sessionStorage.getItem("id_idioma")][0].expirat);
                        window.location.assign("/");
                        this.handleRefresh();
                    }
                })
        }
    }

    render() {
        return (
            <div id="quisom">
                <div>
                    <h1 className="row justify-content-center pt-4">{traduccions[sessionStorage.getItem("id_idioma")][0].quisom}</h1>
                </div>
                <div id="sobrePica">
                    <div id="frase">
                        <h2 id="h1QuiSom" className="mt-3">{traduccions[sessionStorage.getItem("id_idioma")][0].titolquisom}</h2>
                        <p className="mt-3">{traduccions[sessionStorage.getItem("id_idioma")][0].frase1qs}</p>
                        <p className="mt-3">{traduccions[sessionStorage.getItem("id_idioma")][0].frase2qs}</p>
                        <p className="mt-3">{traduccions[sessionStorage.getItem("id_idioma")][0].frase3qs}</p>
                    </div>
                    <div>
                        <p className="mt-4" id="mesGran">{traduccions[sessionStorage.getItem("id_idioma")][0].frase4qs}</p>
                    </div>
                    <div id="frase" className="mt-4">
                        <p>{traduccions[sessionStorage.getItem("id_idioma")][0].frase5qs}</p>
                        <p>{traduccions[sessionStorage.getItem("id_idioma")][0].frase6qs}</p>
                        <p>{traduccions[sessionStorage.getItem("id_idioma")][0].frase7qs}</p>
                    </div>
                    <h3 id="h3QuiSom">{traduccions[sessionStorage.getItem("id_idioma")][0].objectiu}</h3>
                    <div id="frase">
                        <p>{traduccions[sessionStorage.getItem("id_idioma")][0].textobjectiu}</p>
                    </div>
                </div>
                <div id="contenedor">
                    <h2 id="h2SobreMi">{traduccions[sessionStorage.getItem("id_idioma")][0].sobremi}</h2>
                    <div className="sobreMi">
                        <p><Image src={process.env.PUBLIC_URL + '/foto_admin.webp'} alt="Foto cap de projecte" style={{ width: 150, height: 150, borderRadius: 150 }} /></p>
                    </div>
                    <div className="texte ms-4">
                        <p className="mt-4">{traduccions[sessionStorage.getItem("id_idioma")][0].textsobremi}</p>
                        <p className="mt-1 mb-4">{traduccions[sessionStorage.getItem("id_idioma")][0].textsobremi2}</p>
                    </div>
                </div>
            </div>
        )
    }
}