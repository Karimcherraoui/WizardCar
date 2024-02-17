import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import BlogList from "../components/UI/BlogList";

const Blog = () => {
  return (
    <Helmet title="Blogs">
      <CommonSection title="Blogs" />
      <section className="container flex flex-col  md:flex-wrap justify-between mx-auto md:mr-10 my-20 gap-4">
        <BlogList />
      </section>
    </Helmet>
  );
};

export default Blog;
