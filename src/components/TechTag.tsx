interface TechTagProps {
  children: string;
}

const TechTag = ({ children }: TechTagProps) => {
  return <span className="tech-tag">{children}</span>;
};

export default TechTag;
