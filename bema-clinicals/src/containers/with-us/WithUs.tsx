import classes from "./WithUs.module.css";
import { Button, Logo } from "@/components";

export default function WithUs(): JSX.Element {
  return (
    <section className={classes["section_withUs"]}>
      <div className={classes["withUs__heading"]}>
        <h2 className="heading-secondary">
          We manage complex clinical research in resource-limited settings
        </h2>
      </div>

      <div className={classes["withUs__bg-wrapper"]}>
        <div className={classes["withUs__bg-text-box"]}>
          <p className={classes["withUs__text"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cum
            incidunt fugiat nemo veritatis.
          </p>
          <div className={classes["btn-wrapper"]}>
            <Button>Our mission</Button>
          </div>
        </div>
      </div>

      <div className={classes["withUs_info"]}>
        <Logo />

        <div className={classes["withUs_info__content"]}>
          <h3 className={classes["withUs_info__heading"]}>
            What does it mean to be inside Uganda?
          </h3>
          <p className={classes["withUs_info__text"]}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            ullam quaerat, fugiat in ratione deleniti! Tempora doloremque
            quisquam eos ex, nesciunt temporibus dolor, fugit dolorum in ratione
            veniam? Culpa, officia.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veniam ullam quaerat, fugiat in ratione deleniti!
            Tempora doloremque quisquam eos ex, nesciunt temporibus dolor, fugit
            dolorum in ratione veniam? Culpa, officia.{" "}
            <span className={classes["withUs_info__text--span"]}>
              We are your partner for studies in sub-Saharan Africa.
            </span>
          </p>

          <div className={classes["withUs_info__count-box"]}>
            <p className={classes["withUs_info__count"]}>
              <span className={classes["withUs_info__count--num"]}>349</span>
              <span className={classes["withUs_info__count--text"]}>
                Local Team Members
              </span>
            </p>

            <p className={classes["withUs_info__count"]}>
              <span className={classes["withUs_info__count--num"]}>388</span>
              <span className={classes["withUs_info__count--text"]}>
                Studies
              </span>
            </p>
          </div>
          <div className={classes["withUs__btn-box"]}>
            <Button>Read more about our sub-Saharan Africa experience</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
