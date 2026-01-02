import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
// Import other page components you'll create
//import AboutPage from "./components/AboutPage";
//import ProjectsPage from "./components/ProjectsPage";
//import FeaturesPage from "./components/FeaturesPage";
//import PricingPage from "./components/PricingPage";

function App() {
  return (
    <BrowserRouter>
      <Navigation brandName="My Website!" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/projects" element={<ProjectsPage />} /> */}
        {/* <Route path="/features" element={<FeaturesPage />} /> */}
        {/* <Route path="/pricing" element={<PricingPage />} /> */}

        {/* Optional: 404 page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// Simple 404 component (create a proper one later)
function NotFoundPage() {
  return <h1>404 - Page Not Found</h1>;
}

export default App;
