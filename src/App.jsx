
import  { useState } from 'react';
import './App.css';
import addProject from './components/addproject.jsx';
import projectcard from './components/ProjectCard.jsx';
import searchbar from './components/SearchBar.jsx'; // Change 'searchbar.jsx' to match your actual file name (e.g., SearchBar.jsx or Searchbar.jsx)
function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Personal Portfolio',
      description: 'A personal portfolio website showcasing my skills and work.'
    },
    {
      id: 2,
      title: 'Restaurant Website',
      description: 'A restaurant website displaying meals and services.'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleAddProject(event) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    const newProject = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim()
    };

    setProjects([...projects, newProject]);
    setTitle('');
    setDescription('');
  }

  function handleDeleteProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }

  return (
    <div className="app">
      <header>
        <h1>My Portfolio</h1>
        <p>Welcome to my personal portfolio platform</p>
      </header>

      <main>
        <section className="projects-section">
          <h2>Projects</h2>

          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <div className="projects-container">
            {filteredProjects.map((project) => (
              <div className="project-card" key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <button
                  type="button"
                  onClick={() => handleDeleteProject(project.id)}
                >
                  Delete Project
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="add-project-section">
          <h2>Add a Project</h2>

          <form onSubmit={handleAddProject}>
            <input
              type="text"
              placeholder="Project title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />

            <textarea
              placeholder="Project description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />

            <button type="submit">Add Project</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
