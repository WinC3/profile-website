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
    "Software Engineering",
  ];

  const projects = [
    {
      title: "AI Piano Music Transcriber",
      description:
        "Neural networks based, CLI app with optional simple GUI for transforming audio of piano music to MIDI formats. Designed and trained my own network architecture with convolutional and recurrent LSTM layers under heavy class imbalance, using precision, recall, and F1 metrics to facilitate training. Build with PyTorch, using Fourier-based CQT transforms for data preprocessing.",
      category: "Machine Learning",
      status: "Completed" as const,
      imageUrl: "/api/placeholder/350/200",
      imageAlt: "Neural Network Classifier",
      technologies: [
        "Python",
        "PyTorch",
        "NumPy",
        "CNNs",
        "LSTMs",
        "FastAPI",
        "PyQt",
      ],
      links: {
        primary: {
          text: "View Project (CHANGE TO WEB LINK LATER)",
          href: "https://github.com/WinC3/piano-transcriber",
          openInNewTab: true,
        },
        secondary: {
          text: "GitHub",
          href: "https://github.com/WinC3/piano-transcriber",
          openInNewTab: true,
        },
      },
      featured: true,
    },
    {
      title: "Real-Time Stock Visualizer",
      description:
        "Interactive stock data visualization platform using Twelve Data API with real-time updates, multiple graph types, and user authentication system.",
      category: "Software Engineering",
      status: "Completed" as const,
      imageUrl: "/api/placeholder/350/200",
      imageAlt: "Real-Time Stock Visualizer",
      technologies: ["Java", "REST API", "Clean Architecture", "Swing", "AWT"],
      links: {
        primary: {
          text: "GitHub",
          href: "https://github.com/azyx0083/CSC207-WhatEver-46",
          openInNewTab: true,
        },
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
        primary: { text: "This Site!", href: "/", openInNewTab: false },
        secondary: { text: "GitHub", href: "#", openInNewTab: true },
      },
    },
  ];

  const stats = [
    { number: String(projects.length), label: "Projects Completed" },
    { number: "5", label: "Years Creating Code" },
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
