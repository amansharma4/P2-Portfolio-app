import React from "react";
import ProjectDetails from "../components/ProjectDetail";
import { allProjects } from "../data";
function Project() {
  return (
    <div>
      <h2>Project Details</h2>
      {allProjects.map((post) => {
        return <ProjectDetails post={post} />;
      })}
    </div>
  );
}
export default Project;
