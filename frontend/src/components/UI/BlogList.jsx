import React from "react";
import { Link } from "react-router-dom";
import blogData from "../../assets/data/blogData";

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {blogData.map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </div>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, author, date, description, time } = item;

  return (
    <div className="bg-white rounded-lg shadow-md">
      <img
        src={imgUrl}
        alt=""
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <Link
          to={`/blogs/${title}`}
          className="block text-xl font-semibold text-blue-600 hover:text-blue-800 mb-2"
        >
          {title}
        </Link>
        <p className="text-gray-600 mb-4">
          {description.length > 100
            ? `${description.substr(0, 100)}...`
            : description}
        </p>
        <Link
          to={`/blogs/${title}`}
          className="text-blue-500 hover:text-blue-700"
        >
          Read More
        </Link>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-600">
            <i className="ri-user-line"></i> {author}
          </span>
          <div className="flex gap-1 text-gray-600">
            <span>
              <i className="ri-calendar-line"></i> {date}
            </span>
            <span>
              <i className="ri-time-line"></i> {time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
