import React from "react";

function Card({ dataCard: { title, body, image } }) {
  return (
    <>
      <div class="card">
        <img className="card-img-top" src={image} alt="image" />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{body}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
