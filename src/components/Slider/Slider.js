import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'
import img1 from '../../image/slider_1.jpg';
import img2 from '../../image/slider_2.jpg';

const Slider = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 slider-img"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 className="slider-h2">Perfect Learning World</h2>
      <h4 className="slider-h4" >For Your Children</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slider-img"
      src={img2}
      alt="Second slide"
    />
    <Carousel.Caption>
    <h2 className="slider-h2">Kids are The Best Explorer</h2>
    <h4 className="slider-h4" > in The World</h4>    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider;