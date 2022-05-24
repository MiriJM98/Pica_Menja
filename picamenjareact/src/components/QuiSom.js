import React, { Component } from "react";
import { Image } from "react-bootstrap";
import traduccions from "./traduccions.json";

export default class QuiSom extends Component {

    render() {
        return (
            <div id="quisom">
                <h1 className="row justify-content-center mt-4">{traduccions[sessionStorage.getItem("id_idioma")][0].quisom}</h1>
                <hr />
                <div id="frase">
                    <h2 className="mt-3">{traduccions[sessionStorage.getItem("id_idioma")][0].titolquisom}</h2>
                    <p className="mt-3">{traduccions[sessionStorage.getItem("id_idioma")][0].frase1qs}</p>
                    <p className="mt-3">{traduccions[sessionStorage.getItem("id_idioma")][0].frase2qs}</p>
                    <p className="mt-3">{traduccions[sessionStorage.getItem("id_idioma")][0].frase3qs}</p>
                </div>
                <div>
                    <p className="mt-4" id="mesGran">No et preocupis, Pica & Menja té la solució per a tu.</p>
                </div>
                <div id="frase" className="mt-4">
                    <p>Explora i descobreix la varietat de restaurants que hi ha i escull entre ells el lloc on anar.</p>
                    <p>Ja sigui menjar xinès, índia, mediterrània o més tipus que podràs valorar i donar la teva opinió si et registres a la web.</p>
                    <p>Només registrant-te gaudeix dels teus privilegis per fer una selecció més exquisida veient les valoracions i comentaris de les persones que s'han delectat dels restaurants de Ca'n Picafort.</p>
                </div>
                <h3>Objectiu</h3>
                <div id="frase">
                    <p>El principal objectiu de Pica & Menja és donar facilitats als nostres usuaris a l'hora d'escollir un restaurant adaptat als seus gustos,
                        que puguin compartir la seva experiència valorant i comentant a través del web. Una manera d'enriquir la nostra informació gràcies a la vostra col·laboració.
                    </p>
                </div>
                <hr />
                <h2>Sobre mí</h2>
                <div id="contenedor">
                    <div className="sobreMi">
                        <p><Image src={process.env.PUBLIC_URL + '/foto_admin.webP'} alt="Foto cap de projecte" style={{ width: 150, height: 150, borderRadius: 150 }} /></p>
                    </div>
                    <div className="texte ms-4"><p className="mt-4">
                        Sóc na <strong>Míriam Jiménez Molina</strong>, creadora de la pàgina web.
                        Vaix nèixer a Manacor (Mallorca, Illes Balears) al 1998 i visc a Ca'n Picafort.</p>
                        <p className="mt-1 mb-4">
                            Actualment estic estudiant el Grau Superior d'Aplicacions Web al CIFP Pau Casesnoves, trobat a Inca.
                            Aquesta pàgina web és el meu projecte final de grau.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}