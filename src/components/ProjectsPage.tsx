import "./ProjectsPage.css";

const ProjectsPage = () => {
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
        <div className="projects-filters">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Web Development</button>
          <button className="filter-btn">Machine Learning</button>
          <button className="filter-btn">Mobile Apps</button>
          <button className="filter-btn">Open Source</button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {/* Featured Project */}
          <div className="featured-project">
            <div className="project-image">
              <img
                src="/api/placeholder/500/300"
                alt="AI Materials Research Platform"
              />
              <span className="project-status">Completed</span>
            </div>
            <div className="project-content">
              <div className="project-category">Machine Learning</div>
              <h2 className="project-title">AI Materials Research Platform</h2>
              <p className="project-description">
                A sophisticated Bayesian optimization platform built for the
                Acceleration Consortium. Utilizes BoTorch and PyTorch to predict
                material properties and accelerate research discovery through
                intelligent campaign selection.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">PyTorch</span>
                <span className="tech-tag">BoTorch</span>
                <span className="tech-tag">Ax-Platform</span>
                <span className="tech-tag">Bayesian Optimization</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link primary">
                  View Project
                </a>
                <a href="#" className="project-link secondary">
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Regular Project Cards */}
          <div className="project-card">
            <div className="project-image">
              <img
                src="/api/placeholder/350/200"
                alt="Real-Time Stock Visualizer"
              />
              <span className="project-status">Completed</span>
            </div>
            <div className="project-content">
              <div className="project-category">Web Development</div>
              <h3 className="project-title">Real-Time Stock Visualizer</h3>
              <p className="project-description">
                Interactive stock data visualization platform using Twelve Data
                API with real-time updates, multiple graph types, and user
                authentication system.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Java</span>
                <span className="tech-tag">Spring Boot</span>
                <span className="tech-tag">REST API</span>
                <span className="tech-tag">Clean Architecture</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link primary">
                  Live Demo
                </a>
                <a href="#" className="project-link secondary">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img
                src="/api/placeholder/350/200"
                alt="Neural Network Classifier"
              />
              <span className="project-status">Completed</span>
            </div>
            <div className="project-content">
              <div className="project-category">Machine Learning</div>
              <h3 className="project-title">Neural Network Classifier</h3>
              <p className="project-description">
                Custom neural network implementation for image classification
                with backpropagation and various optimization algorithms. Built
                from scratch in Python.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">NumPy</span>
                <span className="tech-tag">Computer Vision</span>
                <span className="tech-tag">Deep Learning</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link primary">
                  View Project
                </a>
                <a href="#" className="project-link secondary">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/api/placeholder/350/200" alt="Portfolio Website" />
              <span className="project-status">In Progress</span>
            </div>
            <div className="project-content">
              <div className="project-category">Web Development</div>
              <h3 className="project-title">Portfolio Website</h3>
              <p className="project-description">
                Modern, responsive portfolio website built with React and
                TypeScript. Features multiple themes, smooth animations, and
                optimized performance.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">Vite</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link primary">
                  Live Site
                </a>
                <a href="#" className="project-link secondary">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img
                src="/api/placeholder/350/200"
                alt="Data Analysis Pipeline"
              />
              <span className="project-status">Planned</span>
            </div>
            <div className="project-content">
              <div className="project-category">Data Science</div>
              <h3 className="project-title">Data Analysis Pipeline</h3>
              <p className="project-description">
                Automated data processing pipeline for large-scale analytics
                with real-time monitoring, error handling, and scalable
                architecture.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Apache Kafka</span>
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">PostgreSQL</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link primary">
                  Coming Soon
                </a>
                <a href="#" className="project-link secondary">
                  Planning
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/api/placeholder/350/200" alt="Mobile Task Manager" />
              <span className="project-status">Completed</span>
            </div>
            <div className="project-content">
              <div className="project-category">Mobile Apps</div>
              <h3 className="project-title">Mobile Task Manager</h3>
              <p className="project-description">
                Cross-platform mobile application for task management with
                offline sync, push notifications, and collaborative features.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React Native</span>
                <span className="tech-tag">Firebase</span>
                <span className="tech-tag">Redux</span>
                <span className="tech-tag">SQLite</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link primary">
                  App Store
                </a>
                <a href="#" className="project-link secondary">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/api/placeholder/350/200" alt="Open Source Library" />
              <span className="project-status">In Progress</span>
            </div>
            <div className="project-content">
              <div className="project-category">Open Source</div>
              <h3 className="project-title">ML Utilities Library</h3>
              <p className="project-description">
                Open-source Python library providing common machine learning
                utilities, preprocessing functions, and model evaluation tools
                for researchers.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">PyPI</span>
                <span className="tech-tag">Scikit-learn</span>
                <span className="tech-tag">Documentation</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link primary">
                  PyPI
                </a>
                <a href="#" className="project-link secondary">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="projects-stats">
          <div className="stat-item">
            <span className="stat-number">12+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">6</span>
            <span className="stat-label">Technologies Mastered</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Open Source Contributions</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
