import classes from "./Hero.module.css";
import { Button } from "@/components";

export default function Hero(): JSX.Element {
  return (
    <div className={classes["hero-wrapper"]}>
      <div className={classes["hero__text-box"]}>
        <h1 className={classes["heading-primary"]}>
          BIOEQUIVALENCE & MEDICINES ANALYSIS CENTER UGANDA (BEMA-UG)
        </h1>
        <p className={classes["hero__text"]}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam
          quaerat, fugiat in ratione deleniti! Tempora doloremque quisquam eos
          ex, nesciunt{" "}
        </p>
      </div>
      <Button>Contact Us</Button>
    </div>
  );
}
