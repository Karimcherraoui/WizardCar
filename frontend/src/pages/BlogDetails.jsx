import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../assets/data/blogData.js";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import commentImg from "../assets/all-images/ava-1.jpg";
import "../styles/blog-details.css";



const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug);

  return (
    <Helmet title={blog.title}>
      <section className="container mx-auto">
        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-6">
            <div className="blog__details">
              {/* ... (your existing code) ... */}
            </div>

            <div className="comment__list mt-5">
              {/* ... (your existing code) ... */}
            </div>
          </div>

          <div className="col-span-2">
            <div className="recent__post mb-4">
              {/* ... (your existing code) ... */}
            </div>

            {blogData.map((item) => (
              <div className="recent__blog-post mb-4" key={item.id}>
                {/* ... (your existing code) ... */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
