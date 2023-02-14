import { ServicesCard } from "@/components";
import classes from "./Services.module.css";

export default function Services(): JSX.Element {
  return (
    <section className={classes["services_section"]}>
      <div className={classes["services__header-box"]}>
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

      <div className={classes["services__details"]}>
        <ServicesCard src="assets/images/service_1.png" />
      </div>
    </section>
  );
}
