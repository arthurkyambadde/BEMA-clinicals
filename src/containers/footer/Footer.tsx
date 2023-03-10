import { Logo } from "@/components";
import Anchor from "@/components/anchor/Anchor";
import classes from "./Footer.module.css";

export default function Footer(): JSX.Element {
  return (
    <footer className={classes["section_footer"]}>
      <div className={classes["logo__container"]}>
        <Logo />
      </div>

      <div className={classes["footer__links"]}>
        <ul className={classes["secondary_nav-main"]}>
          <Anchor
            containerClass={classes["foot_link"]}
            text="About"
            textClass=""
            href="#"
          />
          <Anchor
            containerClass={classes["secondary_nav-item"]}
            text="About"
            textClass=""
            href="#"
          />
          <Anchor
            containerClass={classes["secondary_nav-item"]}
            text="Privacy"
            textClass=""
            href="#"
          />
          <Anchor
            containerClass={classes["secondary_nav-item"]}
            text="Privacy shield"
            textClass=""
            href="#"
          />
          <Anchor
            containerClass={classes["secondary_nav-item"]}
            text="Terms of Use"
            textClass=""
            href="#"
          />
          <Anchor
            containerClass={classes["secondary_nav-item"]}
            text="Cookie notice"
            textClass=""
            href="#"
          />
        </ul>

        <div className={classes["footer__text-box"]}>
          <h3 className={classes["footer__title"]}>headquarters</h3>
          <p className={classes["footer__text"]}>
            BIOEQUIVALENCE & MEDICINES ANALYSIS CENTER UGANDA Headquarters
            P.O.BOX 10442 Kampala, Uganda
          </p>
        </div>

        <ul className={classes["secondary_nav-icon"]}>
          <li className={classes["foot_link"]}>get in touch</li>
          <li className={classes["secondary_sub-item"]}>
            {" "}
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              xmlns="http://www.w3.org/2000/svg"
              className={classes["foot-icon"]}
            >
              <path d="M14.493 1.43359L11.6492 0.777344C11.3484 0.695312 11.0203 0.859375 10.8836 1.16016L9.57109 4.22266C9.46172 4.49609 9.54375 4.79688 9.7625 4.98828L11.4305 6.35547C10.4461 8.43359 8.72344 10.1836 6.59062 11.1953L5.22344 9.52734C5.03203 9.30859 4.73125 9.22656 4.45781 9.33594L1.39531 10.6484C1.09453 10.7852 0.957812 11.1133 1.0125 11.4141L1.66875 14.2578C1.75078 14.5586 1.99687 14.75 2.325 14.75C9.325 14.75 15.0125 9.08984 15.0125 2.0625C15.0125 1.76172 14.7937 1.51562 14.493 1.43359Z" />
            </svg>
            <span
              className={` ${classes["nav-span"]} ${classes["nav-span_phone"]} `}
            >
              +256200901030
            </span>
          </li>
          <li className={classes["secondary_sub-item"]}>
            {" "}
            <svg
              width="15"
              height="11"
              viewBox="0 0 15 11"
              className={classes["foot-icon"]}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.6375 0.5H2.2625C1.52422 0.5 0.95 1.10156 0.95 1.8125V9.6875C0.95 10.4258 1.52422 11 2.2625 11H13.6375C14.3484 11 14.95 10.4258 14.95 9.6875V1.8125C14.95 1.10156 14.3484 0.5 13.6375 0.5ZM13.6375 1.8125V2.93359C13.0086 3.45312 12.0242 4.21875 9.94609 5.85938C9.48125 6.21484 8.57891 7.08984 7.95 7.0625C7.29375 7.08984 6.39141 6.21484 5.92656 5.85938C3.84844 4.21875 2.86406 3.45312 2.2625 2.93359V1.8125H13.6375ZM2.2625 9.6875V4.62891C2.86406 5.12109 3.76641 5.83203 5.10625 6.89844C5.70781 7.36328 6.77422 8.40234 7.95 8.375C9.09844 8.40234 10.1375 7.36328 10.7664 6.89844C12.1062 5.83203 13.0086 5.12109 13.6375 4.62891V9.6875H2.2625Z" />
            </svg>
            <span
              className={` ${classes["nav-span"]} ${classes["nav-span_email"]} `}
            >
              bema@gmail.com
            </span>
          </li>
          <li
            className={` ${classes["secondary_sub-item"]} ${classes["icon-item-box"]} `}
          >
            <div className={classes["icon-box"]}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                className={classes["foot_icon"]}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.93594 13.9219V5.16211H0.211328V13.9219H2.93594ZM1.55898 3.99023C2.43789 3.99023 3.14102 3.25781 3.14102 2.37891C3.14102 1.5293 2.43789 0.826172 1.55898 0.826172C0.709375 0.826172 0.0062499 1.5293 0.0062499 2.37891C0.0062499 3.25781 0.709375 3.99023 1.55898 3.99023ZM13.102 13.9219H13.1312V9.11719C13.1312 6.77344 12.6039 4.95703 9.85 4.95703C8.53164 4.95703 7.65273 5.68945 7.27187 6.36328H7.24258V5.16211H4.63516V13.9219H7.35977V9.58594C7.35977 8.44336 7.56484 7.35938 8.97109 7.35938C10.3773 7.35938 10.4066 8.64844 10.4066 9.67383V13.9219H13.102Z" />
              </svg>
            </div>

            <div className={classes["icon-box"]}>
              <svg
                width="16"
                height="13"
                viewBox="0 0 16 13"
                className={classes["foot_icon"]}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.516 3.25C14.102 2.81055 14.6293 2.2832 15.0395 1.66797C14.5121 1.90234 13.8969 2.07812 13.2816 2.13672C13.9262 1.75586 14.3949 1.16992 14.6293 0.4375C14.0434 0.789062 13.3695 1.05273 12.6957 1.19922C12.1098 0.583984 11.3187 0.232422 10.4398 0.232422C8.74062 0.232422 7.36367 1.60938 7.36367 3.30859C7.36367 3.54297 7.39297 3.77734 7.45156 4.01172C4.90273 3.86523 2.61758 2.63477 1.09414 0.789062C0.830469 1.22852 0.683984 1.75586 0.683984 2.3418C0.683984 3.39648 1.21133 4.33398 2.06094 4.89062C1.56289 4.86133 1.06484 4.74414 0.654687 4.50977V4.53906C0.654687 6.0332 1.70937 7.26367 3.11562 7.55664C2.88125 7.61523 2.58828 7.67383 2.32461 7.67383C2.11953 7.67383 1.94375 7.64453 1.73867 7.61523C2.11953 8.8457 3.26211 9.72461 4.60977 9.75391C3.55508 10.5742 2.23672 11.0723 0.801172 11.0723C0.5375 11.0723 0.303125 11.043 0.0687499 11.0137C1.41641 11.8926 3.02773 12.3906 4.78555 12.3906C10.4398 12.3906 13.516 7.73242 13.516 3.66016C13.516 3.51367 13.516 3.39648 13.516 3.25Z" />
              </svg>
            </div>
          </li>
          <li className={classes["secondary_sub-input"]}>
            <input
              type="search"
              className={classes["footer__input"]}
              name="footer-search"
              id="foot-search"
              placeholder="Search..."
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              className={` ${classes["footer_icon"]} ${classes["foot_icon"]}  `}
            >
              <path
                d="M14.8137 13.2754L11.884 10.3457C11.7375 10.2285 11.5617 10.1406 11.386 10.1406H10.9172C11.7082 9.11523 12.2063 7.82617 12.2063 6.39062C12.2063 3.05078 9.45236 0.296875 6.11252 0.296875C2.74338 0.296875 0.0187683 3.05078 0.0187683 6.39062C0.0187683 9.75977 2.74338 12.4844 6.11252 12.4844C7.51877 12.4844 8.80783 12.0156 9.86252 11.1953V11.6934C9.86252 11.8691 9.92111 12.0449 10.0676 12.1914L12.968 15.0918C13.261 15.3848 13.7004 15.3848 13.9641 15.0918L14.7844 14.2715C15.0774 14.0078 15.0774 13.5684 14.8137 13.2754ZM6.11252 10.1406C4.03244 10.1406 2.36252 8.4707 2.36252 6.39062C2.36252 4.33984 4.03244 2.64062 6.11252 2.64062C8.1633 2.64062 9.86252 4.33984 9.86252 6.39062C9.86252 8.4707 8.1633 10.1406 6.11252 10.1406Z"
                fillOpacity="0.6"
              />
            </svg>
          </li>
        </ul>
      </div>
    </footer>
  );
}
