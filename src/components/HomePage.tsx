import Header from "./Header";
import AboutMe from "./AboutMe";

const HomePage = () => {
  return (
    <div>
      <Header title="Hello there!" subtitle="Welcome to my website." />
      <AboutMe />
    </div>
  );
};

export default HomePage;
