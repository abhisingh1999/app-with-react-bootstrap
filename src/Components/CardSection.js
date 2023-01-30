import React from "react";
import SingleCard from "./SingleCard";

const CardSection = () => {
  const cards = [
    {
      img: "https://www.w3schools.com/w3images/newyork.jpg",
      title: "New York",
      day: "Fri 27 Nov 2016",
      description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
    },
    {
      img: "https://www.w3schools.com/w3images/newyork.jpg",
      title: "New York",
      day: "Fri 27 Nov 2016",
      description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
    },
    {
      img: "https://www.w3schools.com/w3images/newyork.jpg",
      title: "New York",
      day: "Fri 27 Nov 2016",
      description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
    },
  ];
  return (
    <div className="d-flex gap-3 my-3">
      {cards.map((card, cardIndex) => {
        return <SingleCard cardDetails={card} key={cardIndex} />;
      })}
    </div>
  );
};

export default CardSection;
