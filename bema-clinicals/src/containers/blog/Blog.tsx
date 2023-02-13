import classes from "./Blog.module.css";
import { Card } from "@/components";

export default function Blog(): JSX.Element {
  return (
    <section className={classes["section_blog"]}>
      <div className={classes["blog__image"]}>
        <Card
          title="Global expertise"
          subtitle="Reach new markets and access the right patient populations."
          paragraph_01="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam quaerat, fugiat in ratione deleniti! Tempora doloremque quisquam eos ex, nesciunt temporibus dolor, fugit dolorum in"
          paragraph_02="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam quaerat, fugiat in ratione deleniti! Tempora doloremque quisquam eos ex, nesciunt temporibus dolor, fugit dolorum in ratione veniam? Culpa, officia."
          btn_text="Our experience"
          class="blog__card"
        />
      </div>
    </section>
  );
}
