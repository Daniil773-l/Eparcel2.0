// src/components/PartnersSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import tw from "twin.macro";

import Partner1 from "images/Company1.svg";
import Partner2 from "images/Company2.svg";
import Partner3 from "images/Company3.svg";
import Partner4 from "images/Company4.svg";
import Partner5 from "images/Company5.svg";
import Partner6 from "images/Company6.svg";
import Partner7 from "images/Company7.svg";
import Partner8 from "images/Company8.svg";
import Partner9 from "images/Company9.svg";
import Partner10 from "images/Company10.svg";
import Partner11 from "images/Company11.svg";
import Partner12 from "images/Company12.svg";
import Partner13 from "images/Company13.svg";
import Partner14 from "images/Company14.svg";
import Partner15 from "images/Company15.svg";

const PartnersContainer = styled.div`
    ${tw`w-full`}
`;

const PartnerImage = styled.img`
    width: auto;
    height: 100px; // Adjust the height as needed
    margin: 0 auto;
`;

const PartnersSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <PartnersContainer>
            <Slider {...settings}>
                <div>
                    <PartnerImage src={Partner1} alt="Partner 1" />
                </div>
                <div>
                    <PartnerImage src={Partner2} alt="Partner 2" />
                </div>
                <div>
                    <PartnerImage src={Partner3} alt="Partner 3" />
                </div>
                <div>
                    <PartnerImage src={Partner4} alt="Partner 4" />
                </div>
                <div>
                    <PartnerImage src={Partner5} alt="Partner 5" />
                </div>
                <div>
                    <PartnerImage src={Partner6} alt="Partner 6" />
                </div>
                <div>
                    <PartnerImage src={Partner7} alt="Partner 7" />
                </div>
                <div>
                    <PartnerImage src={Partner8} alt="Partner 8" />
                </div>
                <div>
                    <PartnerImage src={Partner9} alt="Partner 9" />
                </div>
                <div>
                    <PartnerImage src={Partner10} alt="Partner 10" />
                </div>
                <div>
                    <PartnerImage src={Partner11} alt="Partner 11" />
                </div>
                <div>
                    <PartnerImage src={Partner12} alt="Partner 12" />
                </div>
                <div>
                    <PartnerImage src={Partner13} alt="Partner 13" />
                </div>
                <div>
                    <PartnerImage src={Partner14} alt="Partner 14" />
                </div>
                <div>
                    <PartnerImage src={Partner15} alt="Partner 15" />
                </div>
            </Slider>
        </PartnersContainer>
    );
};

export default PartnersSlider;
