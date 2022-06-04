import classes from "./style.module.scss";
import { Button } from "../Button/";
import { FiSend } from "react-icons/fi";

export const Contact = () => {
  return (
    <section className={classes.contact} id="contact">
      <div>
        <h2>Contact Me</h2>

        <form
          action="https://formspree.io/f/meqnnyyo"
          method="POST"
          autoComplete="off"
        >
          <input type="text" placeholder="Name" required name="Name" />
          <input type="email" placeholder="Email" required name="Email" />
          <textarea
            rows={8}
            placeholder="Your Message"
            required
            name="Message"
          />
          <Button filled>
            Submit <FiSend />
          </Button>
        </form>

        <p>
          or contact me directly at{" "}
          <a href="mailto:codewithshahmir@gmail.com">
            codewithshahmir@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};
