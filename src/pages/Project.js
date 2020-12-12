import React from "react";
import ProjectDetails from "../components/ProjectDetail";
import { allProjects } from "../data";
function Project() {
  return (
    <div>
      <h2>Project Details</h2>
      <div className="project">
        {allProjects.map((post) => {
          return <ProjectDetails post={post} />;
        })}
      </div>
    </div>
  );
}
export default Project;
