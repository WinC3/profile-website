import TechTag from "./TechTag";
import ProjectLinks from "./ProjectLinks";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  status: "Completed" | "In Progress" | "Planned";
  imageUrl: string;
  imageAlt: string;
  technologies: string[];
  links: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
  };
  featured?: boolean;
}

const ProjectCard = ({
  title,
  description,
  category,
  status,
  imageUrl,
  imageAlt,
  technologies,
  links,
  featured = false,
}: ProjectCardProps) => {
  const cardClass = featured ? "featured-project" : "project-card";
  const titleTag = featured ? "h2" : "h3";

  return (
    <div className={cardClass}>
      <div className="project-image">
        <img src={imageUrl} alt={imageAlt} />
        <span className="project-status">{status}</span>
      </div>
      <div className="project-content">
        <div className="project-category">{category}</div>
        {featured ? (
          <h2 className="project-title">{title}</h2>
        ) : (
          <h3 className="project-title">{title}</h3>
        )}
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </div>
        <ProjectLinks
          primaryLink={links.primary}
          secondaryLink={links.secondary}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
