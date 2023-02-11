import classes from "./Navigation.module.css";

export default function Navigation(): JSX.Element {
  return (
    <div className={classes.navigation}>
      <ul className={classes["navigation-primary"]}>
        <li className={classes["navigation-primary__item"]}>contact</li>
        <li className={classes["navigation-primary__item"]}>email</li>

        <ul className={classes["navigation-primary--sub"]}>
          <li className={classes["navigation-primary--sub__item"]}>item 1</li>
          <li className={classes["navigation-primary--sub__item"]}>item 2</li>
          <li className={classes["navigation-primary--sub__item"]}>item 3</li>
          <li className={classes["navigation-primary--sub__item"]}>item 4</li>
        </ul>
      </ul>
    </div>
  );
}
