import { useState } from "react";
import "./ProjectsPage.css";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";
import ProjectStats from "./ProjectStats";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Web Development",
    "Machine Learning",
    "Mobile Apps",
    "Open Source",
  ];

  const projects = [
    {
      title: "AI Materials Research Platform",
      description:
        "A sophisticated Bayesian optimization platform built for the Acceleration Consortium. Utilizes BoTorch and PyTorch to predict material properties and accelerate research discovery through intelligent campaign selection.",
      category: "Machine Learning",
      status: "Completed" as const,
      imageUrl: "/api/placeholder/500/300",
      imageAlt: "AI Materials Research Platform",
      technologies: [
        "Python",
        "PyTorch",
        "BoTorch",
        "Ax-Platform",
        "Bayesian Optimization",
      ],
      links: {
        primary: { text: "View Project", href: "#" },
        secondary: { text: "Source Code", href: "#" },
      },
      featured: true,
    },
    {
      title: "Real-Time Stock Visualizer",
      description:
        "Interactive stock data visualization platform using Twelve Data API with real-time updates, multiple graph types, and user authentication system.",
      category: "Web Development",
      status: "Completed" as const,
      imageUrl: "/api/placeholder/350/200",
      imageAlt: "Real-Time Stock Visualizer",
      technologies: ["Java", "Spring Boot", "REST API", "Clean Architecture"],
      links: {
        primary: { text: "Live Demo", href: "#" },
        secondary: { text: "GitHub", href: "#" },
      },
    },
    {
      title: "Neural Network Classifier",
      description:
        "Custom neural network implementation for image classification with backpropagation and various optimization algorithms. Built from scratch in Python.",
      category: "Machine Learning",
      status: "Completed" as const,
      imageUrl: "/api/placeholder/350/200",
      imageAlt: "Neural Network Classifier",
      technologies: ["Python", "NumPy", "Computer Vision", "Deep Learning"],
      links: {
        primary: { text: "View Project", href: "#" },
        secondary: { text: "GitHub", href: "#" },
      },
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website built with React and TypeScript. Features multiple themes, smooth animations, and optimized performance.",
      category: "Web Development",
      status: "In Progress" as const,
      imageUrl: "/api/placeholder/350/200",
      imageAlt: "Portfolio Website",
      technologies: ["React", "TypeScript", "CSS3", "Vite"],
      links: {
        primary: { text: "Live Site", href: "#" },
        secondary: { text: "GitHub", href: "#" },
      },
    },
    {
      title: "Data Analysis Pipeline",
      description:
        "Automated data processing pipeline for large-scale analytics with real-time monitoring, error handling, and scalable architecture.",
      category: "Data Science",
      status: "Planned" as const,
      imageUrl: "/api/placeholder/350/200",
      imageAlt: "Data Analysis Pipeline",
      technologies: ["Python", "Apache Kafka", "Docker", "PostgreSQL"],
      links: {
        primary: { text: "Coming Soon", href: "#" },
        secondary: { text: "Planning", href: "#" },
      },
    },
    {
      title: "Mobile Task Manager",
      description:
        "Cross-platform mobile application for task management with offline sync, push notifications, and collaborative features.",
      category: "Mobile Apps",
      status: "Completed" as const,
      imageUrl: "/api/placeholder/350/200",
      imageAlt: "Mobile Task Manager",
      technologies: ["React Native", "Firebase", "Redux", "SQLite"],
      links: {
        primary: { text: "App Store", href: "#" },
        secondary: { text: "GitHub", href: "#" },
      },
    },
    {
      title: "ML Utilities Library",
      description:
        "Open-source Python library providing common machine learning utilities, preprocessing functions, and model evaluation tools for researchers.",
      category: "Open Source",
      status: "In Progress" as const,
      imageUrl: "/api/placeholder/350/200",
      imageAlt: "Open Source Library",
      technologies: ["Python", "PyPI", "Scikit-learn", "Documentation"],
      links: {
        primary: { text: "PyPI", href: "#" },
        secondary: { text: "GitHub", href: "#" },
      },
    },
  ];

  const stats = [
    { number: "12+", label: "Projects Completed" },
    { number: "6", label: "Technologies Mastered" },
    { number: "3", label: "Open Source Contributions" },
    { number: "2", label: "Years Experience" },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProject = filteredProjects.find((project) => project.featured);
  const regularProjects = filteredProjects.filter(
    (project) => !project.featured
  );

  return (
    <div className="projects-page">
      <div className="projects-container">
        {/* Header Section */}
        <header className="projects-header">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            A showcase of my work spanning web development, machine learning,
            and software engineering. Each project represents a unique challenge
            and learning experience.
          </p>
        </header>

        {/* Filter Controls */}
        <ProjectFilters
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Projects Grid */}
        <div className="projects-grid">
          {/* Featured Project */}
          {featuredProject && <ProjectCard {...featuredProject} />}

          {/* Regular Project Cards */}
          {regularProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Stats Section */}
        <ProjectStats stats={stats} />
      </div>
    </div>
  );
};

export default ProjectsPage;
