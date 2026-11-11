import ProjectCard from "./ProjectCard";

function ProjectList({ projects, onDelete }) {
  return (
    <div className="project-grid">
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p className="no-projects">No projects found.</p>
      )}
    </div>
  );
}

export default ProjectList;