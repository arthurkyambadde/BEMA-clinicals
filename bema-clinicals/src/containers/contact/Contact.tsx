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
      </div>
    </section>
  );
}
