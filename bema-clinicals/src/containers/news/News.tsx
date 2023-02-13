import classes from "./News.module.css";
import { Card } from "@/components";

export default function News(): JSX.Element {
  return (
    <section className={classes["news__section"]}>
      <div className={classes["news__header-box"]}>
        <span className="upper-line">&nbsp;</span>
        <h2 className="heading-secondary">
          Stay two steps ahead with BEMA-UG clinical TRIALS
        </h2>
        <p className="header-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam
          quaerat, fugiat in ratione deleniti! Tempora doloremque quisquam eos
          ex, nesciunt temporibus{" "}
        </p>
      </div>
      <div className={classes["news__image"]}>
        <Card
          title="Global expertise"
          subtitle="Reach new markets and access the right patient populations."
          paragraph_01="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam quaerat, fugiat in ratione deleniti! Tempora doloremque quisquam eos ex, nesciunt temporibus dolor, fugit dolorum in"
          paragraph_02="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam quaerat, fugiat in ratione deleniti! Tempora doloremque quisquam eos ex, nesciunt temporibus dolor, fugit dolorum in ratione veniam? Culpa, officia."
          btn_text="Our experience"
          class="news__card"
        />
      </div>
    </section>
  );
}
