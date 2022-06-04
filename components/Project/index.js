import classes from "./style.module.scss";
import { BiLinkExternal } from "react-icons/bi";
import Image from "next/image";

export const Project = ({ project }) => {
  return (
    <section className={classes.project}>
      <div className={classes.img}>
        <img
          src={"https:" + project.fields.image.fields.file.url}
          alt={project.fields.image.fields.title}
        />
      </div>

      <div className={classes.detail}>
        <h3>{project.fields.title}</h3>
        <p>{project.fields.description}</p>

        <div className={classes.tools}>
          {project.fields.tools.map((tool) => (
            <i className={tool.fields.icon} key={tool.fields.name}></i>
          ))}
        </div>

        <div>
          {project.fields.github && project.fields.github.length && (
            <a href={project.fields.github} target="_blank">
              <i className="devicon-github-original"></i>
            </a>
          )}
          <a href={project.fields.link} target="_blank">
            <BiLinkExternal />
          </a>
        </div>
      </div>
    </section>
  );
};
