import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Blogss.css";
import Navbar from "../Navigation/Navbar";

const Blogss = (props) => {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [author, setAuthor] = useState("");
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/articles/${props.match.params.id}`)
      .then((res) => [
        setTitle(res.data.title),
        setArticle(res.data.article),
        setAuthor(res.data.author),
        setFileName(res.data.articleImage),
      ])
      .catch((error) => console.log(error));
  }, [props]);

  return (
    <div className="blogss__full">
      <div>
        <Navbar />
      </div>

      <div className="blogss__Article">
        <div className="blogArticle">
          <h1>{title}</h1>
          <p>{author}</p>
          <img src={`/photos/${fileName}`} alt="Sumit" />
          <p dangerouslySetInnerHTML={{ __html: article }}></p>
          {/* <div className="blogs__image"> */}
          {/* <img src="" alt="No"/> */}
          {/* <img src={fileName} alt="" /> */}
          {/* <img src={articleImage} alt="hello" /> */}
          {/* </div> */}

          {/* <p>{article}</p> */}
        </div>
        <a className="Back" href="http://localhost:8080/blogs">
          Back
        </a>
      </div>
    </div>
  );
};

export default Blogss;
