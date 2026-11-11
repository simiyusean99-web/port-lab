
import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) return;

    onAddProject({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      technologies: [],
      link: "",
    });

    setTitle("");
    setDescription("");
  }

  return (
    <section className="form-section">
      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="project-title">Title</label>
        <input
          id="project-title"
          type="text"
          placeholder="Project title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <label htmlFor="project-description">Description</label>
        <textarea
          id="project-description"
          placeholder="Project description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />

        <button type="submit" aria-label="Add Project">
          Add
        </button>
      </form>
    </section>
  );
}

export default ProjectForm;
