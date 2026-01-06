import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Navigation.module.css";

interface NavigationProps {
  brandName?: string;
}

const Navigation = ({ brandName = "MyApp" }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/ " },
    { label: "Projects", path: "/projects" },
    { label: "Contacts", path: "/contacts" },
  ];

  return (
    <>
      <nav className={`navbar navbar-expand bg-body-tertiary ${styles.navbar}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/ ">
            {brandName}
          </Link>

          {/* React-controlled toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* React-controlled collapse */}
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          >
            <div className="navbar-nav">
              {navItems.map((item) => (
                <Link key={item.path} className="nav-link" to={item.path}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className={styles.navbarSpacer}></div>
    </>
  );
};

export default Navigation;
