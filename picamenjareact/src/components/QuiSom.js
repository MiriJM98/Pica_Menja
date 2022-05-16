import React, { Component } from "react";
import { Image } from "react-bootstrap";

export default class QuiSom extends Component {

    render() {
        return (
            <div id="quisom">
                <h1 className="row justify-content-center mt-4">Qui som</h1>
                <section>
                    <Image className="mt-3" src={process.env.PUBLIC_URL + '/foto_admin.png'} style={{ width: 200, height: 200, borderRadius: 150 }} />
                    <div className="mt-4" id="frase">
                        Sóc na <strong>Míriam Jiménez Molina</strong>, creadora de la pàgina web.
                        Vaix nèixer a Manacor (Mallorca, Illes Balears) al 1998 i visc a Ca'n Picafort.</div>
                    <div className="mt-1 mb-4" id="frase">
                        Actualment estic estudiant el Grau Superior d'Aplicacions Web al CIFP Pau Casesnoves, trobat a Inca.
                        Aquesta pàgina web és el meu projecte final de grau.</div>
                </section>
                <section>
                    <h2>Sobre Pica & Menja</h2>
                    <div id="frase">
                        Pica & Menja és una pàgina web dedicada als restaurants que es troben dins el
                        poble Ca'n Picafort, Illes Balears.</div>
                    <div className="mb-5" id="frase">
                        L'objectiu principal de Pica & Menja és donar a conèixer i informar als visitants de la nostra web sobre els
                        restaurants que poden trobar a Ca'n Picafort.</div>
                </section>
            </div>

        )
    }
}