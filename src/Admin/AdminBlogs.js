import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Header from '../Header'
// import Navbar from '../Navigation/Navbar'
import "../Blog/Blogs.css";
import axios from "axios";

function Blogs({ posts }) {
  const [article, setArticle] = useState([]);

  const deleteArticle = (id) => {
    axios.delete(`/articles/${id}`).then((res) => alert(res.data));
    setArticle(article.filter((elem) => elem._id !== id));
  };

  return (
    <div className="MainContainer">
      {/* {posts.map((article, key) => ( */}
      {posts.map((article, key) => (
        <div className="blogs" key={key}>
          <div className="blogs__image">
            {/* <img src="https://assets.awwwards.com/awards/images/2020/11/Vintage-ams-tn.jpg" alt="No"/> */}
            <img src={`/photos/${article.articleImage}`} alt="Sumit" />
          </div>

          <div className="blogs__disc">
            <Link
              className="blogs__link"
              to={{ pathname: `/blogs/blogss/${article._id}` }}
            >
              <a href="/">
                <bold>{article.title}</bold>
              </a>
            </Link>

            <div className="blogs__para2">
              <h>
                Added to <span>Resources & Tools</span>
              </h>
              <p>November 30, 2020</p>
            </div>

            <div className="blogs__para3">
              <p>
                By <span>{article.author}</span>
              </p>
            </div>
          </div>

          <div className="update__delete">
            <Link to={`/update/${article._id}`}>Edit Article</Link>

            <button onClick={() => deleteArticle(article._id)}>
              Delete Article
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
