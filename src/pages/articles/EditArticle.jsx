import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

function EditArticle() {
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const update = async (values, actions) => {
    try {
      const { data } = await axios.put(
        `http://localhost:3001/articles/${id}`,
        values
      );
      actions.resetForm();
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
    onSubmit: update,
  });

  const getArticleById = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/articles/${id}`);
      formik.setValues({
        ...formik.values,
        ...data,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  // const getArticle = (id) => {
  //   axios
  //     .get(`http://localhost:3001/articles/${id}`)
  //     .then((resp) => {
  //       console.log("resp", resp.data);
  //         setArticle(resp.data);

  //     })
  //     .catch((err) => console.log(err));
  // };

  useEffect(() => {
    getArticleById(id);
  }, [id]);
  return (
    <>
      <div className="row my-3">
        <div className="col-md-6">
          <h1 style={{ color: "#84A0BA" }}>Edit Article</h1>
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
                value={formik.values.body}
              ></textarea>
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
              <button className="btn btn-warning">
                <span className="ms-2">Edit article</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditArticle;
