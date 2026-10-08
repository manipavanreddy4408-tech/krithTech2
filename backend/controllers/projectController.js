import projects from "../data/projects.js";

const getProjects = (req, res) => {
  res.json({
    success: true,
    count: projects.length,
    projects: projects,
  });
};

export { getProjects };