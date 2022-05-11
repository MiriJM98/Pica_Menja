import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

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
        // VALIDACIONS DELS CAMPS DEL FORMULARI
        // Nom usuari
        if (this.state.nom_usuari === "") {
            document.getElementById("nom_usuari").style.borderColor = "red";
        } else {
            document.getElementById("nom_usuari").style.borderColor = "green";
        }

        // Llinatges
        if (this.state.llinatges === "") {
            document.getElementById("llinatges").style.borderColor = "red";
        } else {
            document.getElementById("llinatges").style.borderColor = "green";
        }

        // Telèfon
        if (this.state.telefon === "") {
            document.getElementById("telefon").style.borderColor = "red";
        } else {
            document.getElementById("telefon").style.borderColor = "green";
        }

        // Data naixement
        if (this.state.data_naixement === "") {
            document.getElementById("data_naixement").style.borderColor = "red";
        } else {
            document.getElementById("data_naixement").style.borderColor = "green";
        }

        // Direcció
        if (this.state.direccio === "") {
            document.getElementById("direccio").style.borderColor = "red";
        } else {
            document.getElementById("direccio").style.borderColor = "green";
        }

        // Email
        if (this.state.email === "") {
            document.getElementById("email").style.borderColor = "red";
        } else {
            document.getElementById("email").style.borderColor = "green";
        }

        // Password
        if (this.state.password === "") {
            document.getElementById("password").style.borderColor = "red";
        } else {
            document.getElementById("password").style.borderColor = "green";
        }

        // Mostrar alerta
        if (this.state.email === "" || this.state.nom_usuari === "" || this.state.llinatges === "" || this.state.telefon === "" || this.state.data_naixement === "" || this.state.direccio === "" || this.state.administrador === "" || this.state.password === "") {
            // return alert("Error. S'han d'omplir tots els camps.");
            document.getElementById("errors").style.display = "block";
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
        axios.post("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/usuaris", formData,
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
                    <h1 className="row justify-content-center">Registra't a Pica & Menja</h1>
                    <p><label className="row justify-content-center">Nom: </label></p>
                    <p><input type="text" id="nom_usuari" name="nom_usuari" onChange={this.canviParam} /></p>
                    <p><label className="row justify-content-center">Llinatges: </label></p>
                    <p><input type="text" id="llinatges" name="llinatges" onChange={this.canviParam} /></p>
                    <p><label className="row justify-content-center">Telèfon: </label></p>
                    <p><input type="text" id="telefon" name="telefon" onChange={this.canviParam} /></p>
                    <p><label className="row justify-content-center">Direcció: </label></p>
                    <p><input type="text" id="direccio" name="direccio" onChange={this.canviParam} /></p>
                    <p><label className="row justify-content-center">Data naixement: </label></p>
                    <p><input type="date" id="data_naixement" name="data_naixement" onChange={this.canviParam} /></p>
                    <p><label className="row justify-content-center">Email: </label></p>
                    <p><input type="text" id="email" name="email" onChange={this.canviParam} /></p>
                    <p><label className="row justify-content-center">Password: </label></p>
                    <p><input type="password" id="password" name="password" onChange={this.canviParam} /></p>
                    <p><a href="/login" id="linkFormulari" className="row justify-content-center">Ja tens compte? Inicia sessió!</a></p>
                    <p><button type="button" id="botoRegistre" onClick={this.registre}>Inscriu-te</button></p>
                    <p id="errors" style={{ display: 'none' }}>Error. Tots els camps son obligatoris!</p>
                </div>
            </div>
        )
    }
}