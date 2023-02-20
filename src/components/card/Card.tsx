import classes from "./Card.module.css";
import Button, { ButtonText } from "../buttons/Button";

interface CardProps {
  title: string;
  subtitle: string;
  paragraph_01: string;
  paragraph_02: string;
  btn_text: string;
  class: string;
}

interface serviceCardProps {
  src: string;
}

interface contactCardProps {
  card_image: string;
  card_title: string;
  card_text: string;
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

export function ServicesCard(props: serviceCardProps): JSX.Element {
  return (
    <div className={classes["service__card"]}>
      <div className={classes["service__card-image"]}>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src={props.src}
          alt="card image"
          className={classes["service__card-img"]}
        />
      </div>
      <div className={classes["service__card-details"]}>
        <p className={classes["service__card-text"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iure
          quam deserunt?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Facere iure quam deserunt?
        </p>
      </div>
    </div>
  );
}

export function ContactCard(props: contactCardProps): JSX.Element {
  return (
    <div className={classes["contact__card"]}>
      <div className={classes["contact__card-image"]}>
        <img
          src={props.card_image}
          alt="card image"
          className={classes["contact__card-img"]}
        />
      </div>

      <div className={classes["contact__card-details"]}>
        <h3 className={classes["contact__card-title"]}>{props.card_title}</h3>
        <p className={classes["contact__card-text"]}>{props.card_text}</p>
        <div className={classes["btn_wrapper"]}>
          <ButtonText />
        </div>
      </div>
    </div>
  );
}
