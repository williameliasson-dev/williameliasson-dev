import "../styles/globals.scss";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import AboutMe from "../components/AboutMe/AboutMe";
export default function Page() {
  return (
    <div>
      <div id="hem">
        <Home />
      </div>
      <div id="projekt">
        <Projects />
      </div>
      <AboutMe />
    </div>
  );
}
