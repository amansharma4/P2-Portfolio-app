import React from "react";
import BlogDetails from "../components/BlogDetails";
import { allBlogs } from "../data";
function Blog() {
  return (
    <div>
      <h2>Latest Blogs</h2>
      <div className="blog">
        {allBlogs.map((post) => {
          return <BlogDetails post={post} />;
        })}
      </div>
    </div>
  );
}

export default Blog;
