import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import traduccions from "./traduccions.json";

class Inici extends Component {
    render() {
        return (
            <div id='carouselFotos'>
                <h1>{traduccions[sessionStorage.getItem("id_idioma")][0].restaurants}</h1>
                <Carousel style={{ textAlign: "center" }} autoPlay={true} interval={2000} width={"65%"} infiniteLoop={true} showThumbs={false} autoFocus={true}>
                    <div id='fotos'>
                        <h2>Marisco</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant1_1654180660.webp" alt='Marisco' />
                    </div>
                    <div id='fotos'>
                        <h2>Mamma Mia</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant2_1654180680.webp" alt='Mamma Mia' />
                    </div>
                    <div id='fotos'>
                        <h2>Hong Kong</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant3_1654180696.webp" alt='Hong Kong' />
                    </div>
                    <div id='fotos'>
                        <h2>El Gaucho</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant4_1654180716.webp" alt='El Gaucho' />
                    </div>
                    <div id='fotos'>
                        <h2>Vinicius</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant5_1654180731.webp" alt='Vinicius' />
                    </div>
                    <div id='fotos'>
                        <h2>Burger King</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant6_1654180749.webp" alt='Burger King' />
                    </div>
                    <div id='fotos'>
                        <h2>Sa Mexicana</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant7_1654180764.webp" alt='Sa Mexicana' />
                    </div>
                    <div id='fotos'>
                        <h2>Can Montevideo</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant8_1654180780.webp" alt='Can Montevideo' />
                    </div>
                    <div id='fotos'>
                        <h2>L'Incanto</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant9_1654180800.webp" alt="L'incanto" />
                    </div>
                    <div id='fotos'>
                        <h2>Sapori</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant10_1654180820.webp" alt='Sapori' />
                    </div>
                    <div id='fotos'>
                        <h2>El Patrón</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant11_1654180838.webp" alt='El Patrón' />
                    </div>
                    <div id='fotos'>
                        <h2>Mónaco</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant12_1654180855.webp" alt='Mónaco' />
                    </div>
                    <div id='fotos'>
                        <h2>El Puerto</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant13_1654180871.webp" alt='El Puerto' />
                    </div>
                    <div id='fotos'>
                        <h2>Alibaba Kebab</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant14_1654180888.webp" alt='Alibaba Kebab' />
                    </div>
                    <div id='fotos'>
                        <h2>La Pinta</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant15_1654180902.webp" alt='La Pinta' />
                    </div>
                    <div id='fotos'>
                        <h2>Sabores de India</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant16_1654180916.webp" alt='Sabores de India' />
                    </div>
                    <div id='fotos'>
                        <h2>SushiYoko II</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant17_1654180938.webp" alt='SushiYoko II' />
                    </div>
                    <div id='fotos'>
                        <h2>Luz de Luna</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant18_1654180955.webp" alt='Luz de Luna' />
                    </div>
                    <div id='fotos'>
                        <h2>El Molino</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant19_1654180974.webp" alt='El Molino' />
                    </div>
                    <div id='fotos'>
                        <h2>Dakota Tex Mex</h2>
                        <img src="https://picamenja.com/PicaMenja/public/fotosportada/restaurant20_1654180991.webp" alt='Dakota Tex Mex' />
                    </div>

                </Carousel>
            </div>
        );
    }
};

export default Inici;