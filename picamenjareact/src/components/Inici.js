import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
// import { Carousel } from '@sefailyasoz/react-carousel';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import traduccions from "./traduccions.json";

export default class Inici extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imatges: [],
        }
    }

    // componentDidMount() {
    //     const config = {
    //         headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
    //     };
    //     axios.get("http://localhost/PROJECTE_PICA_MENJA/Pica_Menja/PicaMenja/public/api/restaurants", config)
    //         .then(response => {
    //             console.log(response.data);
    //             response.data.forEach(restaurant => {
    //                 let nom = restaurant.nom;
    //                 let imatge = restaurant.imatge;
    //                 let display = {
    //                     src: imatge,
    //                     headerText: nom,
    //                     subText: "",
    //                     image: imatge
    //                 };
    //                 this.setState({ imatges: this.state.imatges.concat(display) });
    //                 console.log(this.state.imatges.concat(display));
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
            <div>
                <h1 className="row justify-content-center mt-4">{traduccions[sessionStorage.getItem("id_idioma")][0].inici}</h1>
                {/* <h2 className="row justify-content-center">Restaurants</h2> */}
                {/* <Carousel
                    data={this.state.imatges}
                    autoPlay={true}
                    rightItem={<FaArrowRight />}
                    leftItem={<FaArrowLeft />}
                    animationDuration={3000}
                    headerTextType="black"
                    subTextType="white"
                    size="normal"
                /> */}
            </div>
        )
    }
}