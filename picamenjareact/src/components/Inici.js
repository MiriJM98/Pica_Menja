import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Inici extends Component {
    render() {
        return (
            <>
                {/* <h1 className="row justify-content-center mt-3 mb-3">Pica & Menja</h1> */}
                <div className="parent">
                    <Image src={process.env.PUBLIC_URL + '/logoweb350.png'} 
                    alt="PICA & MENJA" 
                    title="PICA & MENJA"/>
                </div>
            </>
        )
    }
}