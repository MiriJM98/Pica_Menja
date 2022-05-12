import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    login = () => {
        let formData = new URLSearchParams();
        formData.append("email", this.state.email);
        formData.append("password", this.state.password);
        axios.post("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/login", formData,
        ).then(resposta => {
            console.log(resposta);
            sessionStorage.setItem("token", resposta.data.result);
            sessionStorage.setItem("id_usuari", resposta.data.id_usuari);
            sessionStorage.setItem("token_valid", resposta.data.token_valid);
            console.log(sessionStorage.getItem("token"));
            console.log(sessionStorage.getItem("id_usuari"));
            this.descarrega();
        }).catch(error => {
            console.log(error);
            sessionStorage.setItem("token", "");
            sessionStorage.setItem("id_usuari", "");
            sessionStorage.setItem("admin", "");
            // alert("Email o password incorrectes!");
            document.getElementById("errors").style.display = "block";
        })
    }

    descarrega = () => {
        const config = {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
        };
        const usuari = sessionStorage.getItem("id_usuari");
        axios.get('http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/usuaris/' + usuari, config)
            .then(response => {
                sessionStorage.setItem("admin", response.data.administrador);
                window.location.assign("/");
                console.log(sessionStorage.getItem("admin"));
            })
            .catch(function (error) {
                //Mostrar error
                console.log(error);
            })
    }

    canviParam = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div id="divLogin" className="row justify-content-center">
                <div id="dadesLogin">
                    <h1 className="row justify-content-center">Inicia sessió</h1>
                    <p><label className="row justify-content-center">Email</label></p>
                    <p><input type="text" id="email" name="email" onChange={this.canviParam} /></p>
                    <p><label className="row justify-content-center">Password</label></p>
                    <p><input type="password" id="password" name="password" onChange={this.canviParam} /></p>
                    <p><a href="/registre" id="linkFormulari" className="row justify-content-center">No tens compte? Regístra't!</a></p>
                    <p><button type="button" id="botoLogin" onClick={this.login}>Login</button></p>
                    <p id="errors" style={{display: 'none' }}>Error. Email o password incorrectes.</p>
                </div>
            </div>
        )
    }
}