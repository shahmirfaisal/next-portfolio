import classes from "./style.module.scss";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

export const Footer = ({ about }) => {
  return (
    <footer className={classes.footer}>
      <div>
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

        <p>2022 &copy; Shahmir Faisal</p>
      </div>
    </footer>
  );
};
