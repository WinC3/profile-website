import Header from "./Header";
import AboutMe from "./AboutMe";
import profilePic from "../assets/react.svg"; // TODO change later

const HomePage = () => {
  return (
    <div>
      <Header
        showIntro={true}
        name="Winston Chan"
        description={[
          "I'm a software developer wanting to make real changes in the world.",
          "I specialize in machine learning and backend development, particularly enjoying neural network solutions to complex problems. Currently based in Toronto, Canada.",
        ]}
        profileImage={profilePic}
        profileImageAlt="Winston Chan"
      />
      <AboutMe />
    </div>
  );
};

export default HomePage;
