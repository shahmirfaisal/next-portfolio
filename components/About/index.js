import classes from "./style.module.scss";

export const About = ({ about }) => {
  return (
    <section className={classes.about} id="about">
      <div>
        <h2>About Me</h2>

        <h3>
          I'm <span>{about.name}</span>
        </h3>
        <h3>{about.title}</h3>

        <h4>
          Based in {about.city}, {about.country}
        </h4>

        <p>{about.description}</p>
      </div>
    </section>
  );
};
