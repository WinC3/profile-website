import { useEffect, useRef } from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef(false); // Track if user is actually touching/dragging

  const skills = [
    "TypeScript / JavaScript",
    "Python",
    "Java",
    "React JS",
    "HTML5 & CSS3",
    "C/C#/C++",
    "RESTful API Integration",
    "Git & GitHub",
    "VS Code",
    "Linux",
    "Docker",
  ];

  useEffect(() => {
    const container = skillsRef.current;
    if (!container) return;

    let animationId: number;
    let momentum = 0;
    const autoSpeed = 0.5;
    const friction = 0.95;

    const handleInfiniteLoop = () => {
      const halfWidth = container.scrollWidth / 2;
      if (container.scrollLeft >= halfWidth) {
        container.scrollLeft -= halfWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += halfWidth;
      }
    };

    const animate = () => {
      // Only auto-scroll or apply momentum if the user isn't actively touching the container
      if (!isInteractingRef.current) {
        if (Math.abs(momentum) > 0.1) {
          container.scrollLeft += momentum;
          momentum *= friction;
        } else {
          container.scrollLeft += autoSpeed;
        }
        handleInfiniteLoop();
      }
      animationId = requestAnimationFrame(animate);
    };

    // Use Pointer events to detect actual user interaction reliably
    const onPointerDown = () => {
      isInteractingRef.current = true;
      momentum = 0; // Reset momentum when user grabs it
    };

    const onPointerUp = () => {
      // Give a tiny delay before resuming auto-scroll to feel natural
      setTimeout(() => {
        isInteractingRef.current = false;
      }, 150);
    };

    // Optional: Capture velocity if you want manual swipes to "fling"
    let lastPos = 0;
    let lastTime = 0;
    const onPointerMove = (e: PointerEvent) => {
      if (!isInteractingRef.current) return;
      const now = performance.now();
      const dt = now - lastTime;
      const dx = e.clientX - lastPos;
      if (dt > 0) {
        momentum = -(dx / dt) * 10; // Inverse because dragging right scrolls left
      }
      lastPos = e.clientX;
      lastTime = now;
    };

    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointermove", onPointerMove);

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <section className={styles.aboutMe}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>

        {/* Skills & Expertise */}
        <div className={styles.skillsSection}>
          <h3 className={styles.sectionTitle}>Skills & Expertise</h3>
          <div className={styles.skillsList} ref={skillsRef}>
            {/* First set of skills */}
            {skills.map((skill, index) => (
              <span key={`first-${index}`} className={styles.skillItem}>
                {skill}
              </span>
            ))}
            {/* Duplicate set for infinite loop */}
            {skills.map((skill, index) => (
              <span key={`second-${index}`} className={styles.skillItem}>
                {skill}
              </span>
            ))}
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
