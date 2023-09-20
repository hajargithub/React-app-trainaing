import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaTh, FaThList } from "react-icons/fa";
import axios from "axios";
import Card from "../../components/Card";
import List from "../../components/List";

function ListArticle() {
  const [articles, setArticles] = useState([]);
  const [buttonClicked, setButtonClicked] = useState("Grid");
  const getArticles = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/articles");
      setArticles(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGridClick = () => {
    setButtonClicked("Grid");
  };

  const handleListClick = () => {
    setButtonClicked("List");
  };
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div className="row my-3">
        <div className="col-md-6">
          <h1 style={{ color: "#84A0BA" }}>List of article</h1>
        </div>
        <div className="col-md-6 text-end">
          <Link to="/blog/add">
            <button className="btn btn-primary">
              <FaPlus />
              <span className="ms-2">Add</span>
            </button>
          </Link>
        </div>
        {/* <div className="col-md-6 text-end">
          <Link to="/blog/add">
            <IconContext.Provider value={{ color: " #84A0BA" }}>
              <FaPlus /> Add
            </IconContext.Provider>
          </Link>
        </div> */}
      </div>
      <div className="row my-3">
        <div className="col-md-12">
          <button
            className={`btn btn-dark mx-3" ${
              buttonClicked === "Grid" ? "active" : ""
            }`}
            onClick={handleGridClick}
          >
            <FaTh />
          </button>
          <button
            className={`btn btn-dark" ${
              buttonClicked === "List" ? "active" : ""
            }`}
            onClick={handleListClick}
          >
            <FaThList />
          </button>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-md-12">
          <table className="table-striped">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row">
        {articles.map((article, index) =>
          buttonClicked === "Grid" ? (
            <div className="col-md-3" key={index}>
              <Card dataCard={article} />
            </div>
          ) : (
            <ul className="list-group list-group-light" key={index}>
              <List dataList={article} />
            </ul>
          )
        )}
      </div>
    </>
  );
}

export default ListArticle;
