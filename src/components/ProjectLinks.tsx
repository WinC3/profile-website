interface ProjectLinksProps {
  primaryLink: {
    text: string;
    href: string;
  };
  secondaryLink: {
    text: string;
    href: string;
  };
}

const ProjectLinks = ({ primaryLink, secondaryLink }: ProjectLinksProps) => {
  return (
    <div className="project-links">
      <a href={primaryLink.href} className="project-link primary">
        {primaryLink.text}
      </a>
      <a href={secondaryLink.href} className="project-link secondary">
        {secondaryLink.text}
      </a>
    </div>
  );
};

export default ProjectLinks;
