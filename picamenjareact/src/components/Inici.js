import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import traduccions from "./traduccions.json";

class Inici extends Component {

    componentDidMount() {
        this.descarrega();
    }

    // FUNCIÓ PER RECARREGAR EL COMPONENT
    handleRefresh = () => {
        this.setState({});
    };

    descarrega = () => {
        if (sessionStorage.getItem("token") !== "" && sessionStorage.getItem("token") !== null) {
            const config = {
                headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") }
            };
            const usuari = sessionStorage.getItem("id_usuari");
            axios.get('https://picamenja.com/PicaMenja/public/api/usuaris/' + usuari, config)
                .then(response => {
                    //console.log(response);
                    this.setState({
                        id_usuari: response.data.id_usuari,
                        nom_usuari: response.data.nom_usuari,
                        foto_perfil: response.data.foto_perfil,
                    });
                })
                .catch(function (error) {
                    // Mostrar error
                    console.log(error);
                    if (error.response.status === 401 || error.response.status === 403) {
                        sessionStorage.setItem("token", "");
                        sessionStorage.setItem("admin", "");
                        sessionStorage.setItem("id_usuari", "");
                        alert(traduccions[sessionStorage.getItem("id_idioma")][0].expirat);
                        window.location.assign("/");
                        this.handleRefresh();
                    }
                })
        }
    }
    render() {
        return (
            <div id='carouselFotos'>
                <Carousel style={{ textAlign: "center" }} autoPlay={true} width={"100%"} height={"100%"} interval={2000}
                    infiniteLoop={true} showThumbs={false} autoFocus={true} showStatus={false}>
                    <div id='fotos'>
                        <h2 id='h2Rest'>Marisco</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant1_1654180660.webp" alt='Marisco' />
                    </div>
                    <div id='fotos'>
                        <h2 id='h2Rest'>Mamma Mia</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant2_1654180680.webp" alt='Mamma Mia' />
                    </div>
                    <div id='fotos'>
                        <h2 id='h2Rest'>Hong Kong</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant3_1654180696.webp" alt='Hong Kong' />
                    </div>
                    <div id='fotos'>
                        <h2 id='h2Rest'>El Gaucho</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant4_1654180716.webp" alt='El Gaucho' />
                    </div>
                    <div id='fotos'>
                        <h2 id='h2Rest'>Vinicius</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant5_1654180731.webp" alt='Vinicius' />
                    </div>
                    <div id='fotos'>
                        <h2 id='h2Rest'>Burger King</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant6_1654180749.webp" alt='Burger King' />
                    </div>
                    <div id='fotos'>
                        <h2 id='h2Rest'>Sa Mexicana</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant7_1654180764.webp" alt='Sa Mexicana' />
                    </div>
                    <div id='fotos'>
                        <h2 id='h2Rest'>Can Montevideo</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant8_1654180780.webp" alt='Can Montevideo' />
                    </div>
                    <div id='fotos'>
                        <h2 id='h2Rest'>L'Incanto</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant9_1654180800.webp" alt="L'incanto" />
                    </div>
                    <div id='fotos'>
                        <h2 id='h2Rest'>Sapori</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant10_1654180820.webp" alt='Sapori' />
                    </div>
                    <div id='fotos'>
                        <h2 id='h2Rest'>El Patrón</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant11_1654180838.webp" alt='El Patrón' />
                    </div>
                    <div id='fotos'>
                        <h2 id='h2Rest'>Mónaco</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant12_1654180855.webp" alt='Mónaco' />
                    </div>
                    <div id='fotos'>
                        <h2 id='h2Rest'>El Puerto</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant13_1654180871.webp" alt='El Puerto' />
                    </div>
                    <div id='fotos'>
                        <h2 id='h2Rest'>Alibaba Kebab</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant14_1654180888.webp" alt='Alibaba Kebab' />
                    </div>
                    <div id='fotos'>
                        <h2 id='h2Rest'>La Pinta</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant15_1654180902.webp" alt='La Pinta' />
                    </div>
                    <div id='fotos'>
                        <h2 id='h2Rest'>Sabores de India</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant16_1654180916.webp" alt='Sabores de India' />
                    </div>
                    <div id='fotos'>
                        <h2 id='h2Rest'>SushiYoko II</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant17_1654180938.webp" alt='SushiYoko II' />
                    </div>
                    <div id='fotos'>
                        <h2 id='h2Rest'>Luz de Luna</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant18_1654180955.webp" alt='Luz de Luna' />
                    </div>
                    <div id='fotos'>
                        <h2 id='h2Rest'>El Molino</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant19_1654180974.webp" alt='El Molino' />
                    </div>
                    <div id='fotos'>
                        <h2 id='h2Rest'>Dakota Tex Mex</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant20_1654180991.webp" alt='Dakota Tex Mex' />
                    </div>

                </Carousel>
            </div>
        );
    }
};

export default Inici;