import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const [btnName, setBtnName] = useState("read more");
  const readmore = () => {
    const read = readMore ? false : true;
    const name = read ? "read less" : "read more";
    setReadMore(read);
    setBtnName(name);
  };
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button onClick={() => readmore()}>{btnName}</button>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
