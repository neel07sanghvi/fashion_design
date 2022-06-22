import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Project.css";

const Project = () => {
  return (
    <div className="cara-container">
      <div className="carousel-div">
        <Carousel
          autoPlay={true}
          dynamicHeight={false}
          height={100}
          stopOnHover={false}
          transitionTime={1000}
          infiniteLoop={true}
          showIndicators={false}
        >
          <div className="cara-img">
            <img height={500} src="https://picsum.photos/700" />
          </div>
          <div className="cara-img">
            <img height={500} src="https://picsum.photos/300" />
          </div>
          <div className="cara-img">
            <img height={500} src="https://picsum.photos/200" />
          </div>
          <div className="cara-img">
            <img height={500} src="https://picsum.photos/400" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Project;
