import classes from "./Button.module.css";

type ButtonProps = {
  children: string;
};

export default function Button(props: ButtonProps): JSX.Element {
  return (
    <button className={` ${classes.btn} ${classes["btn-text"]} `}>
      {props.children}
      <svg
        width="9"
        height="14"
        viewBox="0 0 9 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.97931 7.87305C8.24298 7.60938 8.24298 7.16992 7.97931 6.90625L2.29572 1.19336C2.00275 0.929688 1.56329 0.929688 1.29962 1.19336L0.625793 1.86719C0.362122 2.13086 0.362122 2.57031 0.625793 2.86328L5.13751 7.375L0.625793 11.916C0.362122 12.209 0.362122 12.6484 0.625793 12.9121L1.29962 13.5859C1.56329 13.8496 2.00275 13.8496 2.29572 13.5859L7.97931 7.87305Z"
          fill="white"
        />
      </svg>
    </button>
  );
}

export function ButtonText(): JSX.Element {
  return (
    <button className={classes["btn-secondary"]}>
      <span className={classes["btn-span"]}>Read more </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={classes["btn-icon"]}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  );
}
