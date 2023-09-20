import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { FaArrowCircleLeft, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function AddArticle() {
  const navigate = useNavigate();
  const addArticle = async (values, actions) => {
    // console.log("values:", values);
    // console.log("actions:", actions);
    try {
      const { data } = await axios.post(
        "http://localhost:3001/articles",
        values
      );
      navigate("/blog");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
      image: "",
    },
    onSubmit: addArticle,
  });
  console.log(formik);
  return (
    <>
      <div className="row my-3">
        <div className="col-md-6">
          <h1 style={{ color: "#84A0BA" }}>New Article</h1>
        </div>
        <div className="col-md-6 text-end">
          <Link to="/blog">
            <button className="btn btn-primary">
              <FaArrowCircleLeft />
              <span className="ms-2">Back to list</span>
            </button>
          </Link>
        </div>
      </div>
      {/* .row.my-5>.col-md-6.mx-auto>form>(.form-group.my-3>label{title}+input:text.form-control#title[name=title, placeholder=your title])+(.form-group.my-3>label{Description}+textarea.form-control#description[name=description,placeholder=your description])+(.form-group.my-3>label{Image}+input:url.form-control#image[name=image,placeholder=your image])+(.d-grid.my-3>button.btn.btn-primary>FaPlus+span-ms-2{Add article}) */}
      <div className="row my-5">
        <div className="col-md-6 mx-auto">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group my-3">
              <label htmlFor="title">Title</label>
              <input
                onChange={formik.handleChange}
                type="text"
                name="title"
                id="title"
                className="form-control bg-light"
                placeholder="yourtitle"
                value={formik.values.title}
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="description">Description</label>
              <textarea
                onChange={formik.handleChange}
                name="body"
                id="description"
                cols="30"
                rows="5"
                className="form-control bg-light"
                placeholder="Yourdescription"
              >
                {formik.values.description}
              </textarea>
            </div>
            <div className="form-group my-3">
              <label htmlFor="image">Image</label>
              <input
                onChange={formik.handleChange}
                type="url"
                name="image"
                id="image"
                className="form-control bg-light "
                placeholder="Yourimage"
                value={formik.values.image}
              />
            </div>
            <div className="d-grid my-3">
              <button className="btn btn-primary">
                <FaPlus />
                <span className="ms-2">Add an article</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddArticle;
