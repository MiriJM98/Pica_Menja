import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";

export default class Inici extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imatges: [],
        }
    }

    // componentDidMount() {
    //     axios.get("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/restaurants")
    //         .then(response => {
    //             console.log(response);
    //             response.data.forEach(restaurant => {
    //                 // let nom = restaurant.nom;
    //                 // let imatge = restaurant.imatge;
    //             });
    //         })
    //         .catch(function (error) {
    //             console.log("ERROR --> " + error.response.data.error);
    //             if (error.response.status === 401) {
    //                 // window.location.assign("/login");
    //             }
    //         })
    // }

    render() {
        return (
            <h1>Inici</h1>
        )
    }
}