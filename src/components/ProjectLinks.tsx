interface ProjectLinksProps {
  primaryLink: {
    text: string;
    href: string;
    openInNewTab?: boolean;
  };
  secondaryLink?: {
    text: string;
    href: string;
    openInNewTab?: boolean;
  };
}

const ProjectLinks = ({ primaryLink, secondaryLink }: ProjectLinksProps) => {
  return (
    <div className="project-links">
      <a
        href={primaryLink.href}
        className="project-link primary"
        {...(primaryLink.openInNewTab && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {primaryLink.text}
      </a>
      {secondaryLink && (
        <a
          href={secondaryLink.href}
          className="project-link secondary"
          {...(secondaryLink.openInNewTab && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
        >
          {secondaryLink.text}
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;
