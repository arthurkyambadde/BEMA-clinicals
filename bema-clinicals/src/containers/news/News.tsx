import classes from "./News.module.css";

export default function News(): JSX.Element {
  return (
    <section className={classes["news__section"]}>
      <div className={classes["news__header-box"]}>
        <span className={classes["news__upper-line"]}>&nbsp;</span>
        <h2 className="heading-secondary">
          Stay two steps ahead with BEMA-UG clinical TRIALS
        </h2>
        <p className={classes["news__header-text"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam
          quaerat, fugiat in ratione deleniti! Tempora doloremque quisquam eos
          ex, nesciunt temporibus{" "}
        </p>
      </div>
    </section>
  );
}
