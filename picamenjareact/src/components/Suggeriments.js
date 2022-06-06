import React, { Component } from "react";
import traduccions from "./traduccions.json";

export default class Suggeriments extends Component {

    canviParam = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="row justify-content-center mb-3">
                <h1 className="row justify-content-center mt-4 mb-4">{traduccions[sessionStorage.getItem("id_idioma")][0].suggeriments}</h1>
                <div id="divSuggeriments">
                    <h2 className="row justify-content-center mt-4 mb-4">{traduccions[sessionStorage.getItem("id_idioma")][0].opinio}</h2>
                    <p>
                        <label htmlFor="nomS" className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].nom}</label>
                    </p>
                    <p>
                        <input type="text" id="nomS" name="nomS" onChange={this.canviParam} />
                    </p>
                    <p>
                        <label htmlFor="llinatgesS" className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].llinatges}</label>
                    </p>
                    <p>
                        <input type="text" id="llinatgesS" name="llinatgesS" onChange={this.canviParam} />
                    </p>
                    <p>
                        <label htmlFor="emailS" className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].email}</label>
                    </p>
                    <p>
                        <input type="text" id="emailS" name="emailS" onChange={this.canviParam} />
                    </p>
                    <p>
                        <label htmlFor="radio" className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].form1}</label>
                    </p>
                    <p>
                        <input type="radio" id="radioS" name="radioP" onChange={this.canviParam} />{traduccions[sessionStorage.getItem("id_idioma")][0].si}
                        <input type="radio" id="radioN" name="radioP" onChange={this.canviParam} className="ms-2" />{traduccions[sessionStorage.getItem("id_idioma")][0].no}
                    </p>
                    <p>
                        <label htmlFor="radio" className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].form2}</label>
                    </p>
                    <p>
                        <input type="radio" id="radioS" name="radioI" onChange={this.canviParam} />{traduccions[sessionStorage.getItem("id_idioma")][0].si}
                        <input type="radio" id="radioN" name="radioI" onChange={this.canviParam} className="ms-2" />{traduccions[sessionStorage.getItem("id_idioma")][0].no}
                    </p>
                    <p>
                        <label htmlFor="radio" className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].form3}</label>
                    </p>
                    <p>
                        <input type="radio" id="radioS" name="radioR" onChange={this.canviParam} />{traduccions[sessionStorage.getItem("id_idioma")][0].si}
                        <input type="radio" id="radioN" name="radioR" onChange={this.canviParam} className="ms-2" />{traduccions[sessionStorage.getItem("id_idioma")][0].no}
                    </p>
                    <p>
                        <label htmlFor="radio" className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].form4}</label>
                    </p>
                    <p>
                        <input type="radio" id="radioS" name="radioC" onChange={this.canviParam} />{traduccions[sessionStorage.getItem("id_idioma")][0].si}
                        <input type="radio" id="radioN" name="radioC" onChange={this.canviParam} className="ms-2" />{traduccions[sessionStorage.getItem("id_idioma")][0].no}
                    </p>
                    <p>
                        <label htmlFor="radio" className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].form5}</label>
                    </p>
                    <p>
                        <input type="radio" id="radioS" name="radioM" onChange={this.canviParam} />{traduccions[sessionStorage.getItem("id_idioma")][0].si}
                        <input type="radio" id="radioN" name="radioM" onChange={this.canviParam} className="ms-2" />{traduccions[sessionStorage.getItem("id_idioma")][0].no}
                    </p>
                    <p>
                        <label htmlFor="radio" className="row justify-content-center">{traduccions[sessionStorage.getItem("id_idioma")][0].form6}</label>
                    </p>
                    <p>
                        <textarea name="millores" id="millores" rows="4" cols="60"></textarea>
                    </p>
                    <p>
                        <button type="button" id="botoLogin" onClick={this.login}>{traduccions[sessionStorage.getItem("id_idioma")][0].enviar}</button>
                    </p>
                    {/* <p id="errors" style={{ display: 'none' }}>{traduccions[sessionStorage.getItem("id_idioma")][0].errorLogin}</p> */}
                </div>
            </div>
        )
    }
}