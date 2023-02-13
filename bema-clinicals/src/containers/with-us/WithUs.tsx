import classes from "./WithUs.module.css";
import { Button } from "@/components";

export default function WithUs(): JSX.Element {
  return (
    <section className={classes["section_withUs"]}>
      <div className={classes["withUs__heading"]}>
        <h2 className="heading-secondary">
          We manage complex clinical research in resource-limited settings
        </h2>
      </div>

      <div className="withUs__bg-wrapper">
        <div className="withUs__bg-text-box">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cum
          incidunt fugiat nemo veritatis.
        </div>
        <Button>Our mission</Button>
      </div>
    </section>
  );
}
