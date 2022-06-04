import { useEffect, useRef } from "react";
import classes from "./style.module.scss";
import { Button } from "../Button/";
import { FiMail } from "react-icons/fi";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

export const Hero = ({ about }) => {
  const span = useRef();

  useEffect(() => {
    let el = span.current;
    let n = 1;
    function animateText() {
      el.style.maxWidth = "0px";

      setTimeout(() => {
        el.innerHTML = about.titles[n];
        el.style.maxWidth = "100%";

        n++;
        if (n === about.titles.length) n = 0;
      }, 800);
    }

    setInterval(animateText, 4000);
  }, []);

  return (
    <section className={classes.container}>
      <div className={classes.inner}>
        <p>Hello, I'm</p>
        <h1>{about.name}</h1>
        <h2>
          <span ref={span}>{about.titles[0]}</span>
        </h2>

        <Button filled style={{ marginRight: "1rem" }} href="#contact">
          Say Hello <FiMail />
        </Button>
        <Button outlined href="#about">
          About Me
        </Button>
      </div>

      <div className={classes.socials}>
        <a href={about.twitter} target="_blank" title="Twitter">
          <FaTwitter />
        </a>
        <a href={about.linkedIn} target="_blank" title="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href={about.github} target="_blank" title="Github">
          <FaGithub />
        </a>
        <a href={about.blog} target="_blank" title="Blog">
          <BiWorld />
        </a>
      </div>
    </section>
  );
};
