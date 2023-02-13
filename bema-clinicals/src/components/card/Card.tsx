import classes from "./Card.module.css";
import Button from "../buttons/Button";

interface CardProps {
  title: string;
  subtitle: string;
  paragraph_01: string;
  paragraph_02: string;
  btn_text: string;
  class: string;
}

export default function Card(props: CardProps): JSX.Element {
  return (
    <div className={`${classes["card"]} ${classes[props.class]} `}>
      <h3 className={classes["card__title"]}>{props.title}</h3>
      <h4 className={classes["card__sub-title"]}>{props.subtitle}</h4>
      <p className={classes["card__text"]}>{props.paragraph_01}</p>
      <p className={classes["card__text"]}>{props.paragraph_02}</p>
      <div className={classes["btn-wrapper"]}>
        <Button>{props.btn_text}</Button>
      </div>
    </div>
  );
}
