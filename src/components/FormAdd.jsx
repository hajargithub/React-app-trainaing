import React from "react";

function FormAdd({ registerArticle }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const titleField = (event) => {
    setLabel(event.target.value);
  };
  const imageField = (event) => {
    setImage(event.target.value);
  };
  const bodyField = (event) => {
    setBody(event.target.value);
  };
  const transfer = (event) => {
    event.preventDefault();
    registerArticle({ title, image, body });
    console.log("trasfer", title, image, body);
    setTitle("");
    setImage("");
    setBody("");
  };
  return (
    <>
      <form action="">
        <div className="form-group">
          <label htmlFor="course">Article</label>
          <input
            onChange={titleField}
            type="text"
            name=""
            id="course"
            placeholder="add a label"
            className="form-control"
            value={title}
          />
          <input
            onChange={bodyField}
            type="text"
            name=""
            id="course"
            placeholder="add a label"
            className="form-control"
            value={body}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            value={image}
            onChange={imageField}
            type="url"
            name=""
            id="image"
            placeholder="add a picture"
            className="form-control"
          />
        </div>
        <div className="d-grid my-2">
          <button onClick={transfer} className="btn btn-primary">
            Add Article
          </button>
        </div>
      </form>
    </>
  );
}

export default FormAdd;
