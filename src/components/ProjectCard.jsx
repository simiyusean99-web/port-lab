
function ProjectCard({ project, onDelete }) {
  return (
    <div className="project-card">
      <button
        className="project-icon"
        onClick={() => onDelete(project.id)}
        aria-label="Delete Project"
        title="Delete Project"
      >
        <span></span>
      </button>

      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;

