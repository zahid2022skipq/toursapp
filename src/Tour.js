import React, { useState } from "react";

const Tour = ({ id, name, info, image, price }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <p>{info}</p>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
