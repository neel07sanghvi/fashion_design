import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import "./Project.css";

const Project = () => {
  const items = [
    {
      name: "Random Name #1",
      description: "1 - Probably the most random thing you have ever seen!",
      src: "https://picsum.photos/200",
    },
    {
      name: "Random Name #2",
      description: "2- Hello World!",
      src: "https://picsum.photos/300",
    },
    {
      name: "Random Name #3",
      description: "3 - Hello World!",
      src: "https://picsum.photos/400",
    },
  ];

  const [index, setIndex] = React.useState(0);

  const handleChange = (cur, prev) => {
    setIndex(cur);
  };

  const anArrayOfNumbers = [
    <img src="https://picsum.photos/200" />,
    <img src="https://picsum.photos/300" />,
    <img src="https://picsum.photos/400" />,
  ];

  return (
    <div className="cara-container">
      {/* <div className="carousel">
        <Carousel
          index={index}
          onChange={handleChange}
          interval={4000}
          animation="slide"
          indicators={false}
          stopAutoPlayOnHover
          swipe
          className="my-carousel"
        >
          {items.map((item, i) => (
            <div key={i} style={{ width: "100%", height: "100%" }}>
              {item.description}
            </div>
          ))}
        </Carousel>
      </div> */}
      {/* <div>
        {items.map((item, i) => (
          <button
            onClick={() => setIndex(i)}
            style={{ background: i === index ? "#ccc" : "#fff" }}
          ></button>
        ))}
      </div> */}
      <div className="carousel">
        <Carousel
          fullHeightHover={false}
          interval={2000}
          indicators={false}
          navButtonsAlwaysVisible={true}
          indicatorIconButtonProps={{
            style: {
              padding: "1px", // 1
              color: "blue", // 3
            },
          }}
          // IndicatorIcon={anArrayOfNumbers}
        >
          {items.map((item, i) => (
            <div key={i}>
              <img src={item.src} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Project;
