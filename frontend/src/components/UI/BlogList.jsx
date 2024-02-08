import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import blogData from "../../assets/data/blogData";
import "../../styles/blog-item.css";


const BlogList = () => {
  return (
    <>
      {blogData.map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, author, date, description, time } = item;

  return (
    <Col lg="4" md="6" sm="6" className="mb-5">
      <div className="blog__item bg-white p-4 shadow-lg rounded-md">
        <img src={imgUrl} alt={title} className="w-full h-48 object-cover rounded-md" />
        <div className="blog__info p-3">
          <Link to={`/blogs/${title}`} className="blog__title font-semibold text-xl">
            {title}
          </Link>
          <p className="section__description mt-3">
            {description.length > 100
              ? `${description.substr(0, 100)}...`
              : description}
          </p>

          <Link to={`/blogs/${title}`} className="read__more text-blue-500 font-semibold">
            Read More
          </Link>

          <div className="blog__time pt-3 mt-3 flex items-center justify-between">
            <span className="blog__author">
              <i className="ri-user-line"></i> {author}
            </span>

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 section__description">
                <i className="ri-calendar-line"></i> {date}
              </span>

              <span className="flex items-center gap-1 section__description">
                <i className="ri-time-line"></i> {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BlogList;
