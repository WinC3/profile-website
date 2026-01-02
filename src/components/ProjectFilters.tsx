interface ProjectFiltersProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const ProjectFilters = ({
  filters,
  activeFilter,
  onFilterChange,
}: ProjectFiltersProps) => {
  return (
    <div className="projects-filters">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;
