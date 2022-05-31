import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import traduccions from "./traduccions.json";

export default class Registre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom_usuari: "",
            llinatges: "",
            telefon: "",
            direccio: "",
            data_naixement: "",
            email: "",
            password: "",
        }
    }

    registre = (e) => {
        let missatge = traduccions[sessionStorage.getItem("id_idioma")][0].error + "\n";
        // VALIDACIONS DELS CAMPS DEL FORMULARI
        // Nom usuari
        if (this.state.nom_usuari === "" || this.state.nom_usuari.length < 2) {
            document.getElementById("nom_usuari").style.borderColor = "red";
            missatge += traduccions[sessionStorage.getItem("id_idioma")][0].errorRegisNom + "\n";
        } else {
            document.getElementById("nom_usuari").style.borderColor = "green";
        }

        // Llinatges
        if (this.state.llinatges === "" || this.state.llinatges.length < 3) {
            document.getElementById("llinatges").style.borderColor = "red";
            missatge += traduccions[sessionStorage.getItem("id_idioma")][0].errorRegisLlinat + "\n";
        } else {
            document.getElementById("llinatges").style.borderColor = "green";
        }

        // Telèfon
        if (this.state.telefon === "" || this.state.telefon.length === 9 || this.state.telefon.length === 11) {
            document.getElementById("telefon").style.borderColor = "green";
        } else {
            document.getElementById("telefon").style.borderColor = "red";
            missatge += traduccions[sessionStorage.getItem("id_idioma")][0].errorRegisTel + "\n";
        }

        // Data naixement
        if (this.state.data_naixement === "") {
            document.getElementById("data_naixement").style.borderColor = "red";
            missatge += traduccions[sessionStorage.getItem("id_idioma")][0].errorRegisData + "\n";
        } else {
            document.getElementById("data_naixement").style.borderColor = "green";
        }

        // Direcció
        if (this.state.direccio === "" || this.state.direccio.length < 8) {
            document.getElementById("direccio").style.borderColor = "red";
            missatge += traduccions[sessionStorage.getItem("id_idioma")][0].errorRegisDireccio + "\n";
        } else {
            document.getElementById("direccio").style.borderColor = "green";
        }

        // Email
        if (this.state.email === "" || this.state.email.length < 6) {
            document.getElementById("email").style.borderColor = "red";
            missatge += traduccions[sessionStorage.getItem("id_idioma")][0].errorRegisEmail + "\n";
        } else {
            document.getElementById("email").style.borderColor = "green";
        }

        // Password
        if (this.state.password === "" || this.state.password.length < 8) {
            document.getElementById("password").style.borderColor = "red";
            missatge += traduccions[sessionStorage.getItem("id_idioma")][0].errorRegisPass + "\n";
        } else {
            document.getElementById("password").style.borderColor = "green";
        }

        // Mostrar alerta
        if (this.state.email === "" || this.state.nom_usuari === "" || this.state.llinatges === "" || this.state.telefon === "" || this.state.data_naixement === "" || this.state.direccio === "" || this.state.administrador === "" || this.state.password === "") {
            document.getElementById("errors").style.display = "block";
            alert(missatge);
            return e.preventDefault();
        }

        let formData = new URLSearchParams();
        formData.append("nom_usuari", this.state.nom_usuari);
        formData.append("llinatges", this.state.llinatges);
        formData.append("telefon", this.state.telefon);
        formData.append("direccio", this.state.direccio);
        formData.append("data_naixement", this.state.data_naixement);
        formData.append("email", this.state.email);
        formData.append("password", this.state.password);
        axios.post("https://picamenja.com/PicaMenja/public/api/usuaris", formData,
        ).then(resposta => {
            console.log(resposta);
            alert("Usuari creat amb èxit!");
            window.location.assign("/login");
        }
        ).catch(error => {
            console.log(error);
        })
    }

    canviParam = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div id="divRegistre" >
                <div id="dadesRegistre">
                    <h1 className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].titolRegistre}</h1>
                    <p><label className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].nom}:</label></p>
                    <p><input type="text" id="nom_usuari" name="nom_usuari" onChange={this.canviParam} /></p>
                    <p><label className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].llinatges}:</label></p>
                    <p><input type="text" id="llinatges" name="llinatges" onChange={this.canviParam} /></p>
                    <p><label className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].telefon}:</label></p>
                    <p><input type="text" id="telefon" name="telefon" onChange={this.canviParam} /></p>
                    <p><label className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].direccio}:</label></p>
                    <p><input type="text" id="direccio" name="direccio" onChange={this.canviParam} /></p>
                    <p><label className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].datanaix}:</label></p>
                    <p><input type="date" id="data_naixement" name="data_naixement" onChange={this.canviParam} /></p>
                    <p><label className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].email}:</label></p>
                    <p><input type="text" id="email" name="email" onChange={this.canviParam} /></p>
                    <p><label className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].password}:</label></p>
                    <p><input type="password" id="password" name="password" onChange={this.canviParam} /></p>
                    <p><a href="/login" id="linkFormulari" className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].missatgeregistre}</a></p>
                    <p><button type="button" id="botoRegistre" onClick={this.registre}>{traduccions[sessionStorage.getItem("id_idioma")][0].botoregistre}</button></p>
                    <p id="errors" style={{ display: 'none' }}>{traduccions[sessionStorage.getItem("id_idioma")][0].errorRegistre}</p>
                </div>
            </div>
        )
    }
}