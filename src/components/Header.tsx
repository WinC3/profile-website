import styles from "./Header.module.css";

interface Props {
  showIntro?: boolean;
  name?: string;
  description?: string[];
  profileImage?: string;
  profileImageAlt?: string;
}

const Header = ({
  showIntro = false,
  name = "Winston",
  description = [
    "I'm a software developer wanting to make real changes in the world.",
    "I specialize in machine learning and backend development, particularly enjoying neural network solutions to complex problems. Currently based in Toronto, Canada.",
  ],
  profileImage = "src/assets/react.svg",
  profileImageAlt = "Winston Chan",
}: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {showIntro && (
          <div className={styles.introSection}>
            <div className={styles.introContent}>
              <h3 className={styles.introTitle}>Hello! I'm {name}</h3>
              {description.map((paragraph, index) => (
                <p key={index} className={styles.introText}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div>
              <img
                src={profileImage}
                alt={profileImageAlt}
                className={styles.profileImage}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
