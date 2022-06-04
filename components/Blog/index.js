import classes from "./style.module.scss";
import { Post } from "../Post/";

export const Blog = ({ posts, about }) => {
  return (
    <section className={classes.blog}>
      <div>
        <h2>My Blog</h2>
        <h3>Latest Articles</h3>
        <div className={classes.posts}>
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>

        <a href={about.blog} target="_blank" title="Blog">
          Read more on my Blog
        </a>
      </div>
    </section>
  );
};
