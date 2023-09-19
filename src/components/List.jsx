import React from "react";

function List({ dataList: { title, body, image } }) {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src={image}
            alt=""
            style={{ width: "45px", height: "45px" }}
            className="rounded-circle"
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">{title}</p>
            <p className="text-muted mb-0">{body}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default List;
