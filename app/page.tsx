import "../styles/globals.scss";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import AboutMe from "../components/AboutMe/AboutMe";
export default function Page() {
  return (
    <div>
      <section id="hem">
        <Home />
      </section>
      <section id="projekt">
        <Projects />
      </section>
      <AboutMe />
    </div>
  );
}
