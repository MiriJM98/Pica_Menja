import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import traduccions from "./traduccions.json";

export default class Inici extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imatges: [],
        }

    }

    componentDidMount() {
        axios.get("https://picamenja.com/PicaMenja/public/api/restaurants/fotos")
            .then(response => {
                // console.log(response.data);
                response.data.forEach(restaurant => {
                    console.log(restaurant.imatge);
                    this.setState({
                        imatges: restaurant.nom
                    })
                    // console.log(this.state.imatges);
                    // let nom = restaurant.nom;
                    // let imatge = restaurant.imatge;
                    // let display = {
                    //     src: imatge,
                    //     headerText: nom,
                    //     subText: "",
                    //     image: imatge
                    // };
                    // this.setState({ imatges: this.state.imatges.concat(display) });
                    // console.log(this.state.imatges.concat(display));
                });
            })
            .catch(function (error) {
                console.log("ERROR --> " + error.response.data.error);
                if (error.response.status === 401) {
                    // window.location.assign("/login");
                }
            })
    }

    render() {
        return (
            <div>
                <h1 className="row justify-content-center mt-4">{traduccions[sessionStorage.getItem("id_idioma")][0].inici}</h1>
                <h2 className="row justify-content-center">Restaurants</h2>
                {/* <ReactImagesCarousel images={this.state.sliderData} sliderBg="#000000" paginationBg="#000000" /> */}
                {/* {console.log(this.state.imatges)} */}
            </div>
        )
    }
}