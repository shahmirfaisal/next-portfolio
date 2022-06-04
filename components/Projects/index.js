import classes from "./style.module.scss";
import { Project } from "../Project/";

export const Projects = ({ projects, about }) => {
  return (
    <section className={classes.projects}>
      <div>
        <h2>My Projects</h2>

        {projects
          .sort((a, b) => a.fields.order - b.fields.order)
          .map((project) => (
            <Project key={project.fields.title} project={project} />
          ))}

        <a href={about.github} target="_blank" title="Github">
          View more on my Github
        </a>
      </div>
    </section>
  );
};
