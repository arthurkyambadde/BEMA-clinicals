import classes from "./Blog.module.css";
import { Button, Card, Logo } from "@/components";

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

      <div className={classes["blog__info"]}>
        <div className={classes["blog__logo-box"]}>
          <Logo />
        </div>

        <div className={classes["blog__text-box"]}>
          <h2 className={classes["blog__title"]}>PROVEN SOLUTIONS</h2>
          <h3 className={classes["blog__sub-title"]}>
            Tap into our suite of established, validated tools that can be
            tailored to meet your needs.
          </h3>

          <p className={classes["blog__text"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            ullam quaerat, fugiat in ratione deleniti! Tempora doloremque
            quisquam eos ex, nesciunt temporibus dolor, fugit dolorum in ratione
            veniam?
          </p>

          <div className={classes["blog__btn-box"]}>
            <Button>Our history</Button>
          </div>

          <div className={classes["blog__icon-set"]}>
            <div className={classes["blog__icon-wrapper"]}>
              <div className={classes["blog__icon-box"]}>
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  src="assets/images/magnifying-glass_icon.png"
                  alt="magnifying glass icon"
                  className={classes["blog__icon"]}
                />
              </div>

              <p className={classes["blog__icon-text"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                ullam quaerat, fugiat in ratione deleniti! Tempora doloremque
                quisquam eos ex, nesciunt
              </p>
            </div>

            <div className={classes["blog__icon-wrapper"]}>
              <div className={classes["blog__icon-box"]}>
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  src="assets/images/location-icon.png"
                  alt="location icon"
                  className={classes["blog__icon"]}
                />
              </div>

              <p className={classes["blog__icon-text"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                ullam quaerat, fugiat in ratione deleniti! Tempora doloremque
                quisquam eos ex, nesciunt
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
