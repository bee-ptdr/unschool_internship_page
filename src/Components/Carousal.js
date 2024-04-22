import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Carousal() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1500,
        cssEase: "linear",
        arrows : false

    };
    return (
        <>
            <section className='carousal_sec'>
                <div className="top_bar text-center">
                    <h2>Top Internship Opportunities</h2>
                </div>

                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <img src="./logo/c1.png" alt="" />
                        </div>
                        <div>
                        <img src="./logo/c2.png" alt="" />
                        </div>
                        <div>
                        <img src="./logo/c3.png" alt="" />
                        </div>
                        <div>
                        <img src="./logo/c4.png" alt="" />
                        </div>
                        <div>
                        <img src="./logo/c5.png" alt="" />
                        </div>
                        <div>
                        <img src="./logo/c6.png" alt="" />
                        </div>
                        <div>
                        <img src="./logo/c7.png" alt="" />
                        </div>
                        <div>
                        <img src="./logo/c8.png" alt="" />
                        </div>
                    </Slider>
                </div>

            </section>
        </>
    )
}

export default Carousal
