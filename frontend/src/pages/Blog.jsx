import React from "react";
import { Container } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import BlogList from "../components/UI/BlogList";

const Blog = () => {
  return (
    <Helmet title="Blogs">
      <CommonSection title="Blogs" />
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BlogList />
          <BlogList />
        </div>
      </section>
    </Helmet>
  );
};

export default Blog;
