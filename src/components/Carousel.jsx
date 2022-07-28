import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const Carousel = () => {
  const items = [
    {
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
      src: "/img/img-carousel-1.png",
    },
    {
      altText: "Slide 2",
      caption: "Slide 2",
      key: 2,
      src: "/img/sheine-grey.jpg",
    },
    {
      altText: "Slide 3",
      caption: "Slide 3",
      key: 3,
      src: "/img/snake-grey.jpg",
    },
  ];

  return (
    <div style={{ height: "90" }}>
      <UncontrolledCarousel items={items} />
    </div>
  );
};

export default Carousel;
