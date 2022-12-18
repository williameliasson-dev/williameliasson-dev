import "../styles/globals.scss";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import AboutMe from "../components/AboutMe/AboutMe";
import Timeline from "../components/TImeline/Timeline";
export default function Page() {
  return (
    <div>
      <section id="hem">
        <Home />
      </section>
      <section id="info">
        <Timeline />
      </section>
      <section id="projekt">
        <Projects />
      </section>
    </div>
  );
}
