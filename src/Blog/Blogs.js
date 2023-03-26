import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Header from '../Header'
// import Navbar from '../Navigation/Navbar'
import "./Blogs.css";
import Pagination from "./Pagination";

function Blogs({ posts }) {
  const [showPerPage, setShowPerPage] = useState(6);

  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    // console.log(start, end);
    setPagination({ start: start, end: end });
  };

  return (
    <div className="MainContainer">
      {/* {posts.map((article, key) => ( */}
      {posts.slice(pagination.start, pagination.end).map((article, key) => (
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

            {/* <p></p> */}

            <div className="blogs__para2">
              <p dangerouslySetInnerHTML={{ __html: article }}></p>
              <h>
                Added to <span>Resources & Tools</span>
              </h>
              <p>November 30, 2020</p>
            </div>

            {/* <div className="blogs__para3">
              <p>
                By <span>{article.author}</span>
              </p>
            </div> */}
          </div>
        </div>
      ))}

      <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={posts.length}
      />
    </div>
  );
}

export default Blogs;
