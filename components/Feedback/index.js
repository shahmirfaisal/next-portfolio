import classes from "./style.module.scss";
import { AiFillStar } from "react-icons/ai";

const FeedbackItem = ({ feedback }) => {
  return (
    <div>
      <h3>{feedback.name}</h3>
      <span>{feedback.country}</span>

      <div>
        <AiFillStar color="#EA4343" size={25} />
        <AiFillStar color="#EA4343" size={25} />
        <AiFillStar color="#EA4343" size={25} />
        <AiFillStar color="#EA4343" size={25} />
        <AiFillStar color="#EA4343" size={25} />
      </div>
      <p>{feedback.description}</p>
      <a target="_blank" href="https://www.fiverr.com/shahmirfaisal">
        Source
      </a>
    </div>
  );
};

export const Feedback = ({ feedbacks }) => {
  return (
    <section className={classes.feedback}>
      <div>
        <h2>Testimonial</h2>

        <p>See what my clients say about me</p>

        <section>
          {feedbacks
            .sort((a, b) => a.fields.order - b.fields.order)
            .map((feedback, i) => (
              <FeedbackItem key={i} feedback={feedback.fields} />
            ))}
        </section>
      </div>
    </section>
  );
};
