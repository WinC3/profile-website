import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>

        {/* Skills & Expertise */}
        <div className={styles.skillsSection}>
          <h3 className={styles.sectionTitle}>Skills & Expertise</h3>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h4>The Frontend</h4>
              <ul>
                <li>Typescript / Javascript</li>
                <li>HTML5 & CSS3</li>
                <li>React JS</li>
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h4>The Backend</h4>
              <ul>
                <li>Python</li>
                <li>Java</li>
                <li>C/C#/C++</li>
                <li>RESTful API Integration</li>
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h4>Technologies</h4>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Linux</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience Highlights */}
        <div className={styles.experienceSection}>
          <h3 className={styles.sectionTitle}>Experience</h3>
          <div className={styles.experienceItems}>
            <div className={styles.experienceItem}>
              <h4>AI Lab Software Developer - Acceleration Consortium</h4>
              <p className={styles.experienceDate}>May 2025 - Current</p>
              <p>
                Worked in an AI-facilitated materials science research team
                using Bayesian Optimization with Ax-Platform, BoTorch and
                PyTorch. Was core member in orchestrating the Bayesian network
                in the prediction of material properties and selection.
                Implemented many code changes with memory management and logical
                corrections to greatly improve research speeds through campaign
                runtimes.
              </p>
            </div>
            <div className={styles.experienceItem}>
              <h4>Software Developer - University of Toronto</h4>
              <p className={styles.experienceDate}>Sep 2023 - Dec 2023</p>
              <p>
                Real-Time Stock Visualization Interface: A real-time stock
                visualization interface using Twelve Data API (a RESTful API) to
                retrieve and display up-to-date stock data. Implemented a
                variety of interactive graph types to illustrate stock trends,
                with a login system to manage user sessions. Designed the
                project in Java with Clean Architecture principles, maintaining
                separation of concerns and an organized code structure.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Interests */}
        <div className={styles.interestsSection}>
          <h3 className={styles.sectionTitle}>Personal Life</h3>
          <p>
            I tend to believe myself to be a free-spirited individual. I
            particularly enjoy creating music through the piano, and enjoying
            all sorts of foods!
          </p>
          <div className={styles.interestsGrid}>
            <div className={styles.interestItem}>
              <span className={styles.interestIcon}>🎹</span>
              <span>Piano</span>
            </div>
            <div className={styles.interestItem}>
              <span className={styles.interestIcon}>🍚</span>
              <span>Food</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.aboutCta}>
          <h3>Contact me!</h3>
          <p>
            I'm always interested in new opportunities. Please reach out if
            you'd like to work together!
          </p>
          <div className={styles.ctaButtons}>
            <a
              href="/contacts"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              Contacts
            </a>
            <a
              href="/resume.pdf"
              className={`${styles.btn} ${styles.btnSecondary}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
