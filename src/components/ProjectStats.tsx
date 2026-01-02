interface StatItemProps {
  number: string;
  label: string;
}

interface ProjectStatsProps {
  stats: StatItemProps[];
}

const ProjectStats = ({ stats }: ProjectStatsProps) => {
  return (
    <div className="projects-stats">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <span className="stat-number">{stat.number}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;
