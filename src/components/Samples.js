import React from "react";
import image1 from "../images/sampleImage1.jpg";
import image2 from "../images/sampleImage22.jpg";
import image3 from "../images/sampleImage3.jpg";
import Carousel from "react-bootstrap/Carousel";
import SampleText from "./SampleText";

function Samples() {
  return (
    <div id="projects" className="sampleBackground">
    <div className="carouselParent">
        <h1 className='sampleHeader'>Dream homes begin with dream designs.</h1>
      <Carousel className="carouselChild">
        <Carousel.Item interval={4000}>
          <img className="d-block carouselImages"  src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3>Designed Personal Apartment</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100  carouselImages" src={image2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Drawing Room</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100  carouselImages" src={image3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Hall</h3>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <SampleText />
    </div>
    <hr className="breaker"/>
    </div>
  );
}

export default Samples;