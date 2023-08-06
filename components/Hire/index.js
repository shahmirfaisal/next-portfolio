import classes from "./style.module.scss"
import Image from "next/image"

export const Hire = () => {
  return (
    <section className={classes.hire}>
      <div>
        <h2>Hire Me</h2>

        <p>
          You can hire me on{" "}
          <a target="_blank" href="https://www.fiverr.com/shahmirfaisal">
            Fiverr
          </a>
        </p>

        <a target="_blank" href="https://www.fiverr.com/shahmirfaisal">
          <Image
            //   style={{ marginTop: "20px" }}
            src="/fiverr.png"
            width={100}
            height={100}
          />
        </a>

        <p>
          Or reach out to me at{" "}
          <a href="mailto:me@shahmirfaisal.com">me@shahmirfaisal.com</a>
        </p>
      </div>
    </section>
  )
}
