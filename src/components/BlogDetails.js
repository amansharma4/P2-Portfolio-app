import React from "react";
import { Card, CardBody, CardTitle, CardLink } from "reactstrap";
const BlogDetails = ({ post }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h2"> {post.title} </CardTitle>
        <CardLink href={post.link}>{post.link}</CardLink>
      </CardBody>
    </Card>
  );
};

export default BlogDetails;
