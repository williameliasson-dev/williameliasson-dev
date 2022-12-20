"use client";
import "../styles/globals.scss";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import AboutMe from "../components/AboutMe/AboutMe";
import Timeline from "../components/TImeline/Timeline";
import QandaForum from "../components/QandaForum/QandaForum";
import SortingAlgo from "../components/SortingAlgo/SortingAlgo";
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
      <section id="qanda">
        <QandaForum />
      </section>
      <section id="sorting-algo">
        <SortingAlgo />
      </section>
    </div>
  );
}
