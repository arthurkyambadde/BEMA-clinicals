import Anchor from "../anchor/Anchor";
import classes from "./Navigation.module.css";

export default function Navigation(): JSX.Element {
  return (
    <>
      <div className={classes["navigation-desktop"]}>
        <ul className={classes["navigation-primary"]}>
          <Anchor
            containerClass={classes["navigation-primary__item"]}
            text="+256200901030"
            textClass={` ${classes["nav-span"]} ${classes["nav-span_phone"]} `}
            href="#"
            hasIcon
            iconPath="M14.493 1.43359L11.6492 0.777344C11.3484 0.695312 11.0203 0.859375 10.8836 1.16016L9.57109 4.22266C9.46172 4.49609 9.54375 4.79688 9.7625 4.98828L11.4305 6.35547C10.4461 8.43359 8.72344 10.1836 6.59062 11.1953L5.22344 9.52734C5.03203 9.30859 4.73125 9.22656 4.45781 9.33594L1.39531 10.6484C1.09453 10.7852 0.957812 11.1133 1.0125 11.4141L1.66875 14.2578C1.75078 14.5586 1.99687 14.75 2.325 14.75C9.325 14.75 15.0125 9.08984 15.0125 2.0625C15.0125 1.76172 14.7937 1.51562 14.493 1.43359Z"
            iconProps={{
              width: "16",
              height: "15",
              viewBox: "0 0 16 15",
              xmlns: "http://www.w3.org/2000/svg",
              className: classes["nav-icon"],
            }}
          />
          <Anchor
            containerClass={classes["navigation-primary__item"]}
            text="bema@gmail.com"
            textClass={` ${classes["nav-span"]} ${classes["nav-span_email"]} `}
            href="#"
            hasIcon
            iconPath="M13.6375 0.5H2.2625C1.52422 0.5 0.95 1.10156 0.95 1.8125V9.6875C0.95 10.4258 1.52422 11 2.2625 11H13.6375C14.3484 11 14.95 10.4258 14.95 9.6875V1.8125C14.95 1.10156 14.3484 0.5 13.6375 0.5ZM13.6375 1.8125V2.93359C13.0086 3.45312 12.0242 4.21875 9.94609 5.85938C9.48125 6.21484 8.57891 7.08984 7.95 7.0625C7.29375 7.08984 6.39141 6.21484 5.92656 5.85938C3.84844 4.21875 2.86406 3.45312 2.2625 2.93359V1.8125H13.6375ZM2.2625 9.6875V4.62891C2.86406 5.12109 3.76641 5.83203 5.10625 6.89844C5.70781 7.36328 6.77422 8.40234 7.95 8.375C9.09844 8.40234 10.1375 7.36328 10.7664 6.89844C12.1062 5.83203 13.0086 5.12109 13.6375 4.62891V9.6875H2.2625Z"
            iconProps={{
              width: "15",
              height: "11",
              viewBox: "0 0 15 11",
              xmlns: "http://www.w3.org/2000/svg",
              className: classes["icon-email"],
            }}
          />

          <ul className={classes["navigation-primary--sub"]}>
            <li className={classes["navigation-primary--sub__item"]}>
              Work With Us{" "}
              <svg
                width="10"
                height="5"
                viewBox="0 0 10 5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.59766 0C1.10547 0 0.859375 0.601562 1.21484 0.957031L4.71484 4.45703C4.93359 4.67578 5.28906 4.67578 5.50781 4.45703L9.00781 0.957031C9.36328 0.601562 9.11719 0 8.625 0H1.59766Z" />
              </svg>
              <div className={classes["dropdown-menu"]}>
                <ul className={classes["dropdown-list"]}>
                  <Anchor
                    containerClass={classes["dropdown-list_item"]}
                    text="Our rates"
                    textClass=""
                    href="#"
                  />
                  <Anchor
                    containerClass={classes["dropdown-list_item"]}
                    text="Our charges"
                    textClass=""
                    href="#"
                  />
                  <Anchor
                    containerClass={classes["dropdown-list_item"]}
                    text="Our prices"
                    textClass=""
                    href="#"
                  />
                  <Anchor
                    containerClass={classes["dropdown-list_item"]}
                    text="Our terms"
                    textClass=""
                    href="#"
                  />
                </ul>
              </div>
            </li>
            <Anchor
              containerClass={classes["navigation-primary--sub__item"]}
              text="News and Events"
              textClass=""
              href="#"
            />
            <Anchor
              containerClass={classes["navigation-primary--sub__item"]}
              text="Blog"
              textClass=""
              href="#"
            />
            <Anchor
              containerClass={classes["navigation-primary--sub__item"]}
              text="Contact Us"
              textClass=""
              href="#"
            />
          </ul>
        </ul>

        <ul className={classes["navigation-secondary"]}>
          <Anchor
            containerClass={classes["navigation-secondary__item"]}
            text="Our Experience"
            textClass=""
            href="#"
          />
          <Anchor
            containerClass={classes["navigation-secondary__item"]}
            text="BEMA clinical trials"
            textClass=""
            href="#"
          />
          <li className={classes["navigation-secondary__item"]}>
            Services
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.59766 0C1.10547 0 0.859375 0.601562 1.21484 0.957031L4.71484 4.45703C4.93359 4.67578 5.28906 4.67578 5.50781 4.45703L9.00781 0.957031C9.36328 0.601562 9.11719 0 8.625 0H1.59766Z" />
            </svg>
            <div className={classes["dropdown-menu"]}>
              <ul className={classes["dropdown-list"]}>
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our rates"
                  textClass=""
                  href="#"
                />
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our charges"
                  textClass=""
                  href="#"
                />
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our prices"
                  textClass=""
                  href="#"
                />
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our terms"
                  textClass=""
                  href="#"
                />
              </ul>
            </div>
          </li>
          <Anchor
            containerClass={classes["navigation-secondary__item"]}
            text="Focus On Sites"
            textClass=""
            href="#"
          />
          <li className={classes["navigation-secondary__item"]}>
            Insights Hub
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.59766 0C1.10547 0 0.859375 0.601562 1.21484 0.957031L4.71484 4.45703C4.93359 4.67578 5.28906 4.67578 5.50781 4.45703L9.00781 0.957031C9.36328 0.601562 9.11719 0 8.625 0H1.59766Z" />
            </svg>
            <div className={classes["dropdown-menu"]}>
              <ul className={classes["dropdown-list"]}>
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our rates"
                  textClass=""
                  href="#"
                />
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our charges"
                  textClass=""
                  href="#"
                />
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our prices"
                  textClass=""
                  href="#"
                />
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our terms"
                  textClass=""
                  href="#"
                />
              </ul>
            </div>
          </li>
          <li className={classes["navigation-secondary__item"]}>
            About
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.59766 0C1.10547 0 0.859375 0.601562 1.21484 0.957031L4.71484 4.45703C4.93359 4.67578 5.28906 4.67578 5.50781 4.45703L9.00781 0.957031C9.36328 0.601562 9.11719 0 8.625 0H1.59766Z" />
            </svg>
            <div className={classes["dropdown-menu"]}>
              <ul className={classes["dropdown-list"]}>
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our rates"
                  textClass=""
                  href="#"
                />
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our charges"
                  textClass=""
                  href="#"
                />
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our prices"
                  textClass=""
                  href="#"
                />
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our terms"
                  textClass=""
                  href="#"
                />
              </ul>
            </div>
          </li>
          <li className={classes["navigation-secondary__item"]}>
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.4844 11.5H12.6944L12.4144 11.23C13.3944 10.09 13.9844 8.61 13.9844 7C13.9844 3.41 11.0744 0.5 7.48438 0.5C3.89438 0.5 0.984375 3.41 0.984375 7C0.984375 10.59 3.89438 13.5 7.48438 13.5C9.09437 13.5 10.5744 12.91 11.7144 11.93L11.9844 12.21V13L16.9844 17.99L18.4744 16.5L13.4844 11.5ZM7.48438 11.5C4.99438 11.5 2.98438 9.49 2.98438 7C2.98438 4.51 4.99438 2.5 7.48438 2.5C9.97437 2.5 11.9844 4.51 11.9844 7C11.9844 9.49 9.97437 11.5 7.48438 11.5Z" />
            </svg>
          </li>
        </ul>
      </div>

      <div className={classes["navigation-mobile"]}>
        <input
          type="checkbox"
          name="menu-bar"
          id="menu-bar"
          className={classes["menu-bar"]}
        />
        <label htmlFor="menu-bar" className={classes["menu-label"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={classes["nav-icon"]}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </label>

        <ul className={classes["primary-navigation-mobile"]}>
          <li className={classes["primary-navigation-mobile__item"]}>
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              xmlns="http://www.w3.org/2000/svg"
              className={classes["nav-icon"]}
            >
              <path d="M14.493 1.43359L11.6492 0.777344C11.3484 0.695312 11.0203 0.859375 10.8836 1.16016L9.57109 4.22266C9.46172 4.49609 9.54375 4.79688 9.7625 4.98828L11.4305 6.35547C10.4461 8.43359 8.72344 10.1836 6.59062 11.1953L5.22344 9.52734C5.03203 9.30859 4.73125 9.22656 4.45781 9.33594L1.39531 10.6484C1.09453 10.7852 0.957812 11.1133 1.0125 11.4141L1.66875 14.2578C1.75078 14.5586 1.99687 14.75 2.325 14.75C9.325 14.75 15.0125 9.08984 15.0125 2.0625C15.0125 1.76172 14.7937 1.51562 14.493 1.43359Z" />
            </svg>
            <span
              className={` ${classes["nav-span"]} ${classes["nav-span_phone--mobile"]} `}
            >
              +256200901030
            </span>
          </li>
          <li className={classes["primary-navigation-mobile__item"]}>
            <svg
              width="15"
              height="11"
              viewBox="0 0 15 11"
              className={` ${classes["icon-email--mobile"]} ${classes["nav-icon"]} `}
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
            className={` ${classes["primary-navigation-mobile__item"]} ${classes["primary-navigation-mobile__item--drop"]} `}
          >
            Work With Us{" "}
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.59766 0C1.10547 0 0.859375 0.601562 1.21484 0.957031L4.71484 4.45703C4.93359 4.67578 5.28906 4.67578 5.50781 4.45703L9.00781 0.957031C9.36328 0.601562 9.11719 0 8.625 0H1.59766Z" />
            </svg>
            <div className={classes["dropdown-menu"]}>
              <ul className={classes["dropdown-list"]}>
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our rates"
                  textClass=""
                  href="#"
                />
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our charges"
                  textClass=""
                  href="#"
                />
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our prices"
                  textClass=""
                  href="#"
                />
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our terms"
                  textClass=""
                  href="#"
                />
              </ul>
            </div>
          </li>
          <li className={classes["primary-navigation-mobile__item"]}>
            News and Events
          </li>
          <li className={classes["primary-navigation-mobile__item"]}>Blog</li>
          <li className={classes["primary-navigation-mobile__item"]}>
            Contact Us
          </li>

          <li className={classes["primary-navigation-mobile__item"]}>
            Our Experience
          </li>
          <li className={classes["primary-navigation-mobile__item"]}>
            BEMA clinical trials
          </li>
          <li
            className={` ${classes["primary-navigation-mobile__item"]} ${classes["primary-navigation-mobile__item--drop"]} `}
          >
            Services
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.59766 0C1.10547 0 0.859375 0.601562 1.21484 0.957031L4.71484 4.45703C4.93359 4.67578 5.28906 4.67578 5.50781 4.45703L9.00781 0.957031C9.36328 0.601562 9.11719 0 8.625 0H1.59766Z" />
            </svg>
            <div className={classes["dropdown-menu"]}>
              <ul className={classes["dropdown-list"]}>
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our rates"
                  textClass=""
                  href="#"
                />
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our charges"
                  textClass=""
                  href="#"
                />
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our prices"
                  textClass=""
                  href="#"
                />
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our terms"
                  textClass=""
                  href="#"
                />
              </ul>
            </div>
          </li>
          <li className={classes["primary-navigation-mobile__item"]}>
            Focus On Sites
          </li>
          <li
            className={` ${classes["primary-navigation-mobile__item"]} ${classes["primary-navigation-mobile__item--drop"]} `}
          >
            Insights Hub
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.59766 0C1.10547 0 0.859375 0.601562 1.21484 0.957031L4.71484 4.45703C4.93359 4.67578 5.28906 4.67578 5.50781 4.45703L9.00781 0.957031C9.36328 0.601562 9.11719 0 8.625 0H1.59766Z" />
            </svg>
            <div className={classes["dropdown-menu"]}>
              <ul className={classes["dropdown-list"]}>
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our rates"
                  textClass=""
                  href="#"
                />
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our charges"
                  textClass=""
                  href="#"
                />
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our prices"
                  textClass=""
                  href="#"
                />
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our terms"
                  textClass=""
                  href="#"
                />
              </ul>
            </div>
          </li>
          <li
            className={` ${classes["primary-navigation-mobile__item"]} ${classes["primary-navigation-mobile__item--drop"]} `}
          >
            About
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.59766 0C1.10547 0 0.859375 0.601562 1.21484 0.957031L4.71484 4.45703C4.93359 4.67578 5.28906 4.67578 5.50781 4.45703L9.00781 0.957031C9.36328 0.601562 9.11719 0 8.625 0H1.59766Z" />
            </svg>
            <div className={classes["dropdown-menu"]}>
              <ul className={classes["dropdown-list"]}>
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our rates"
                  textClass=""
                  href="#"
                />
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our charges"
                  textClass=""
                  href="#"
                />
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our prices"
                  textClass=""
                  href="#"
                />
                <Anchor
                  containerClass={classes["dropdown-list_item"]}
                  text="Our terms"
                  textClass=""
                  href="#"
                />
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
