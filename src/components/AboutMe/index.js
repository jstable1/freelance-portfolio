import React from "react";
import MeImg from "../../assets/images/Me.jpeg";

function AboutMe() {
  return (
    <section id="about-me" class="aboutSection">
      <h1 class="aboutHeading">About Me</h1>
      <div class="about">
        <img src={MeImg} className="" style={{ width: "10%" }} alt="me" />
        <p>
          Full-stack Web Developer leveraging legal and financial industry
          background to build user-friendly web applications. I am very adaptable
          and have the ability to easily learn new coding languages due to my
          outstanding research skills honed by seven years of legal experience.
          I am looking to leverage my development skills to provide small
          businesses with web applications that support their metrics. I earned a
          certificate in full stack web development from the University of Utah
          and am proficient in HTML, CSS, Node, Express, MongoDB, MySQL and React.
          I am known as being an innovative problem solver who collaborates with
          co-workers to determine the best possible solution to a task. These
          skills have helped me approach programming challenges from different
          angles to find the best solution. Successfully collaborated with a
          development team to create a JavaScript application that recommends
          podcasts and books based on a user's search parameters. My technical
          aptitude in cutting-edge web technologies, combined with communication
          skills and problem solving abilities, makes me a strong addition to any
          engineering team.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
