import classes from "./style.module.scss";

export const Skills = ({ skills }) => {
  return (
    <section className={classes.skills}>
      <div>
        <h2>My Skills</h2>

        <h3>Frontend</h3>
        <div className={classes.icons}>
          {skills
            .filter((skill) => skill.fields.category === "Frontend")
            .sort((a, b) => a.fields.order - b.fields.order)
            .map((skill) => (
              <i className={skill.fields.icon} key={skill.fields.name}></i>
            ))}
        </div>

        <h3>Backend</h3>
        <div className={classes.icons}>
          {skills
            .filter((skill) => skill.fields.category === "Backend")
            .sort((a, b) => a.fields.order - b.fields.order)
            .map((skill) => (
              <i className={skill.fields.icon} key={skill.fields.name}></i>
            ))}
        </div>

        <h3>Database</h3>
        <div className={classes.icons}>
          {skills
            .filter((skill) => skill.fields.category === "Database")
            .sort((a, b) => a.fields.order - b.fields.order)
            .map((skill) => (
              <i className={skill.fields.icon} key={skill.fields.name}></i>
            ))}
        </div>

        <h3>Tools</h3>
        <div className={classes.icons}>
          {skills
            .filter((skill) => skill.fields.category === "Tools")
            .sort((a, b) => a.fields.order - b.fields.order)
            .map((skill) => (
              <i className={skill.fields.icon} key={skill.fields.name}></i>
            ))}
        </div>
      </div>
    </section>
  );
};
