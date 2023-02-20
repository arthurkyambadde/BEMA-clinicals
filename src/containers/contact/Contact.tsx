import { ContactCard } from "@/components";
import classes from "./Contact.module.css";

export default function Contact(): JSX.Element {
  return (
    <section className={classes["section_contact"]}>
      <div className={classes["services__header-box"]}>
        <span className="upper-line">&nbsp;</span>
      </div>

      <div className={classes["contact__card-wrapper"]}>
        <ContactCard
          card_image="assets/images/contact_1.png"
          card_title="Latest findings from a PREVAIL partnership contribute to the prevention of Ebola virus disease"
          card_text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iure quam deserunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iure quam deserunt?"
        />

        <ContactCard
          card_image="assets/images/contact_2.png"
          card_title="Covid-19 Clinical trial"
          card_text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iure quam deserunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iure quam deserunt?"
        />

        <ContactCard
          card_image="assets/images/contact_3.png"
          card_title="Meet Sandra NAluyima, Clinical Affairs Manager, Based in Masindi"
          card_text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iure quam deserunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iure quam deserunt?"
        />
      </div>
    </section>
  );
}
