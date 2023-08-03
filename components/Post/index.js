import classes from "./style.module.scss"
import { Button } from "../Button/"
import moment from "moment"

export const Post = ({ post }) => {
  return (
    <section className={classes.post}>
      <h3>{post.title}</h3>
      <p>{post.brief}</p>
      <p>{moment(post.dateAdded).format("LL")}</p>

      <Button
        outlined
        style={{ marginTop: "1rem" }}
        href={`https://shahmirfaisal.com/${post.slug}`}
        target="_blank"
      >
        Read More
      </Button>
    </section>
  )
}
