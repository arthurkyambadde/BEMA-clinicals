import { ServicesCard } from "@/components";
import classes from "./Services.module.css";

export default function Services(): JSX.Element {
  return (
    <section className={classes["services_section"]}>
      <div className={classes["services__header-box"]}>
        <span className="upper-line">&nbsp;</span>
        <h2 className="heading-secondary">
          Stay two steps ahead with BEMA-UG clinical TRIALS
        </h2>
        <p className="header-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam
          quaerat, fugiat in ratione deleniti! Tempora doloremque quisquam eos
          ex, nesciunt temporibus{" "}
        </p>
      </div>

      <div className={classes["services__details"]}>
        <ServicesCard src="assets/images/service_1.png" />
        <div className={classes["services__bullet"]}>
          <div className={classes["services__bullet-icon-box"]}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={classes["services__bullet-icon"]}
            >
              <path
                d="M8.05 0.46875C3.76875 0.46875 0.300003 3.96875 0.300003 8.21875C0.300003 12.5 3.76875 15.9688 8.05 15.9688C12.3 15.9688 15.8 12.5 15.8 8.21875C15.8 3.96875 12.3 0.46875 8.05 0.46875ZM10.55 8.21875C10.55 9.625 9.425 10.7188 8.05 10.7188C6.64375 10.7188 5.55 9.625 5.55 8.21875C5.55 6.84375 6.64375 5.71875 8.05 5.71875C9.425 5.71875 10.55 6.84375 10.55 8.21875Z"
                fill="white"
              />
            </svg>
          </div>

          <span className={classes["services__bullet-text"]}>
            We are flexible
          </span>
        </div>

        <div className={classes["services__bullet"]}>
          <span className={classes["services__bullet-text"]}>
            We are scalable
          </span>

          <div className={classes["services__bullet-icon-box"]}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={classes["services__bullet-icon"]}
            >
              <path
                d="M8.05 0.46875C3.76875 0.46875 0.300003 3.96875 0.300003 8.21875C0.300003 12.5 3.76875 15.9688 8.05 15.9688C12.3 15.9688 15.8 12.5 15.8 8.21875C15.8 3.96875 12.3 0.46875 8.05 0.46875ZM10.55 8.21875C10.55 9.625 9.425 10.7188 8.05 10.7188C6.64375 10.7188 5.55 9.625 5.55 8.21875C5.55 6.84375 6.64375 5.71875 8.05 5.71875C9.425 5.71875 10.55 6.84375 10.55 8.21875Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <ServicesCard src="assets/images/service_2.png" />

        <div className={classes["services__bullet"]}>
          <div className={classes["services__bullet-icon-box"]}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={classes["services__bullet-icon"]}
            >
              <path
                d="M8.05 0.46875C3.76875 0.46875 0.300003 3.96875 0.300003 8.21875C0.300003 12.5 3.76875 15.9688 8.05 15.9688C12.3 15.9688 15.8 12.5 15.8 8.21875C15.8 3.96875 12.3 0.46875 8.05 0.46875ZM10.55 8.21875C10.55 9.625 9.425 10.7188 8.05 10.7188C6.64375 10.7188 5.55 9.625 5.55 8.21875C5.55 6.84375 6.64375 5.71875 8.05 5.71875C9.425 5.71875 10.55 6.84375 10.55 8.21875Z"
                fill="white"
              />
            </svg>
          </div>

          <span className={classes["services__bullet-text"]}>
            We are dedicated
          </span>
        </div>

        <ServicesCard src="assets/images/service_3.png" />
      </div>
    </section>
  );
}
