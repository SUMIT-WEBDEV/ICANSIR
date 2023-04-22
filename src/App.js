import React, { Fragment, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";

import Header from "./Header";
import Navbar from "./Navigation/Navbar";
import Category from "./UnderstandingCancer/Category";
import Causes from "./UnderstandingCancer/Causes";
import Faq from "./UnderstandingCancer/Faq";
import Key from "./UnderstandingCancer/Key";
import Manage from "./UnderstandingCancer/Manage";
import Prevent from "./UnderstandingCancer/Prevent";
import SandS from "./UnderstandingCancer/SandS";
import What from "./UnderstandingCancer/What";
import What1 from "./UnderstandingCancer/What1";
import "./App.css";
import About from "./About";
import Footer from "./Footer";
import Work from "./OurWork/Work";
import { homeObjOne, homeObjTwo, homeObjThree } from "./OurWork/WorkData";
import WorkHead from "./OurWork/WorkHead";
import Homehead from "./Home/Homehead";
import Blogss from "./Blog/Blogss";
import Blogs from "./Blog/Blogs";
import Involved from "./GetInvolved/Involved";
import Login from "./Admin/Login";
import AddArticle from "./Admin/AddArticle";
import EditArticle from "./Admin/EditArticle";
import AdminBlogs from "./Admin/AdminBlogs";
import Contact from "./GetInvolved/Contact";
import InvolveHead from "./GetInvolved/InvolveHead";
import Collab from "./GetInvolved/Collab";
// -----------------------------------
import Razor from "./Razorpay/Razor";
import PaymentSuccess from "./Razorpay/PaymentSuccess";
import Razorr from "./Razorpay/Razorr";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://icansir.vercel.app/articles")
      .then((res) => {
        // setLoading(false)
        setPosts(res.data);
      })
      .catch((error) => console.log(error));
  });

  return (
    <Router>
      <div className="app">
        <Switch>
          {/* ***************************Understanding-Cancer********************************* */}

          <Route path="/what-is-cancer">
            <What />
            <div className="down__uc">
              <Category />
              <What1 />
            </div>
            <Footer />
          </Route>

          <Route path="/signs-and-symptoms">
            <What />
            <div className="down__uc">
              <Category />
              <SandS />
            </div>
          </Route>

          <Route path="/causes-and-risk-factors">
            <What />
            <Causes />
          </Route>

          <Route path="/preventing-cancer">
            <What />
            <Prevent />
          </Route>

          <Route path="/managing-and-treating-cancer">
            <What />
            <div className="down__uc">
              <Category />
              <Manage />
            </div>
          </Route>

          <Route path="/key-cancer-statistics">
            <What />
            <Key />
          </Route>

          <Route path="/faq's">
            <What />
            <Faq />
          </Route>

          {/* ***************************Understanding-Cancer********************************* */}

          <Route path="/login">
            {/* <What /> */}
            {/* <Faq /> */}
            <Login />
          </Route>

          {/* ***************************Understanding-Cancer********************************* */}

          <Route path="/about-us">
            <Header />
            <About />
            <Footer />
          </Route>

          <Route path="/Work">
            {/* <What /> */}
            <WorkHead />
            <Work {...homeObjOne} />
            <Work {...homeObjTwo} />
            <Work {...homeObjThree} />
            <Footer />
          </Route>

          <Route path="/get-involved">
            <InvolveHead />
            <Collab />
            <Contact />
            <Footer />
          </Route>

          <Route path="/donate-us">
            <Razorr />
            <Footer />
          </Route>

          <Route path="/hello">
            <Razorr />
            <Footer />
          </Route>

          <Route path="/paymentsuccess">
            <PaymentSuccess />
          </Route>

          <Route
            exact
            path="/addArticle"
            // render={() => <Navbar/>}
            render={() => (
              <Fragment>
                <AddArticle />
                <AdminBlogs posts={posts} />
              </Fragment>
            )}
          />

          <Route
            exact
            path="/blogs"
            // render={() => <Navbar/>}
            render={() => (
              <Fragment>
                {/* <Navbar /> */}
                <Header />
                <Blogs posts={posts} />
              </Fragment>
            )}
          />

          <Route
            path="/blogs/blogss/:id"
            render={(props) => <Blogss {...props} posts={posts} />}
          />

          <Route
            path="/update/:id"
            render={(props) => <EditArticle {...props} posts={posts} />}
          />

          {/* ***************************************************** */}

          {/* <Route path="/donate-us">
            <Homehead />
            <DonateHead />
            <Navbar />
            <Donate />
            <Footer />
          </Route> */}

          {/* ****************************************************** */}

          <Route path="/">
            <Homehead />
            {/* <h1>hello</h1> */}
            <Footer />
            {/* <Header /> */}
          </Route>

          {/* <Route path="/"> */}

          {/* </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
