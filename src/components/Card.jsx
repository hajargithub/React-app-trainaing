import axios from "axios";
import React, { useState } from "react";
import { FaPlus, FaSync, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

function Card({
  dataCard: { id, title, body, image, active },
  onDeleteSuccess,
  onActiveSuccess,
}) {
  const getArticleById = async (id) => {
    const { data } = await axios.get(`http://localhost:3001/articles/${id}`);
    return data;
  };
  const Active = async (id) => {
    try {
      const article = await getArticleById(id);
      if (!article) {
        console.error("Article not found");
        return;
      }
      const updatedActive = {
        active: !article.active,
      };
      Swal.fire({
        title: "Are you sure?",
        text: `You want to  ${
          updatedActive.active ? "activate" : "activate"
        } this article !`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { data } = await axios.patch(
            `http://localhost:3001/articles/${id}`,
            updatedActive
          );
          onActiveSuccess(updatedActive);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  const deleteArticle = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this article",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    })
      .then(async (result) => {
        if (result.isConfirmed) {
          const { data } = await axios.delete(
            `http://localhost:3001/articles/${id}`
          );

          console.log("onDeleteSuccess called");
          onDeleteSuccess();
          // navigate("/blog");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div
        className={`card my-2 ${active ? "bg-primary-light" : "bg-light"}`}
        style={{ transition: "background-color 0.3s" }}
      >
        <img src={image} className="card-img-top" alt="Fissure in Sandstone" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
          <Link to={`/blog/edit/${id}`}>
            <button className="btn btn-warning m-1">
              <FaPlus />
              <span className="ms-2">Edit</span>
            </button>
          </Link>
          <button
            className="btn btn-danger m-1"
            onClick={() => deleteArticle(id)}
          >
            <FaTrashAlt />
            <span className="ms-2">Delete</span>
          </button>

          <button className="btn btn-primary m-1" onClick={() => Active(id)}>
            <FaSync />
            <span className="ms-2">Active</span>
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Card;
