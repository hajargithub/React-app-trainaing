import React from "react";
import { FaPlus, FaSync, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Card({ dataCard: { id, title, body, image } }) {
  const Active = () => {
    return false;
  };
  return (
    <>
      <div className="card my-2">
        <img src={image} className="card-img-top" alt="Fissure in Sandstone" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
          {/* <a href="" className="btn btn-primary">
            Detail
          </a> */}
          <Link to={`/blog/edit/${id}`}>
            <button className="btn btn-warning m-1">
              <FaPlus />
              <span className="ms-2">Edit</span>
            </button>
          </Link>
          <button className="btn btn-danger m-1">
            <FaTrashAlt />
            <span className="ms-2">Delete</span>
          </button>

          <button className="btn btn-primary m-1" onClick={() => Active(id)}>
            <FaSync />
            <span className="ms-2">Active</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
