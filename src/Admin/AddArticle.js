import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function AddArticle() {
  const history = useHistory();

  const callAboutPage = async () => {
    try {
      const res = await fetch("/logins/addArticle", {
        method: "GET",
        headers: {
          Accept: "Application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
    } catch (err) {
      // console.log(err)
      history.push("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };
  // ChangeOnClick
  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("article", article);
    formData.append("author", author);
    formData.append("articleImage", fileName);

    setTitle("");
    setArticle("");
    setAuthor("");
    // setFileName("");

    axios
      .post("http://localhost:8080/articles/add", formData)
      .then((res) => {
        setMessage(res.data);
        console.log("added Successfully");
      })
      .catch((err) => {
        console.log("nhi huwa");
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h1>Add new article</h1>
      <span>{message}</span>
      <span>message</span>
      <form onSubmit={changeOnClick} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="author">Date and Time</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="form-control"
            placeholder="Date"
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            placeholder="Title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="article">Article</label>
          <textarea
            value={article}
            onChange={(e) => setArticle(e.target.value)}
            className="form-control"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="file">Choose article image</label>
          <input
            type="file"
            filename="articleImage"
            className="for-control-file"
            onChange={onChangeFile}
          />
        </div>

        <button type="submit" className="button">
          Post article
        </button>
      </form>
    </div>
  );
}

export default AddArticle;
