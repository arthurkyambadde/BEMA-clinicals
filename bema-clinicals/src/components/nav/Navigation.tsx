import classes from "./Navigation.module.css";

export default function Navigation(): JSX.Element {
  return (
    <div className={classes.navigation}>
      <ul className={classes["navigation-primary"]}>
        <li className={classes["navigation-primary__item"]}>
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.493 1.43359L11.6492 0.777344C11.3484 0.695312 11.0203 0.859375 10.8836 1.16016L9.57109 4.22266C9.46172 4.49609 9.54375 4.79688 9.7625 4.98828L11.4305 6.35547C10.4461 8.43359 8.72344 10.1836 6.59062 11.1953L5.22344 9.52734C5.03203 9.30859 4.73125 9.22656 4.45781 9.33594L1.39531 10.6484C1.09453 10.7852 0.957812 11.1133 1.0125 11.4141L1.66875 14.2578C1.75078 14.5586 1.99687 14.75 2.325 14.75C9.325 14.75 15.0125 9.08984 15.0125 2.0625C15.0125 1.76172 14.7937 1.51562 14.493 1.43359Z"
              fill="#33CCFF"
            />
          </svg>
          <span className={classes["nav-span"]}>+256200901030</span>
        </li>
        <li className={classes["navigation-primary__item"]}>
          <svg
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6375 0.5H2.2625C1.52422 0.5 0.95 1.10156 0.95 1.8125V9.6875C0.95 10.4258 1.52422 11 2.2625 11H13.6375C14.3484 11 14.95 10.4258 14.95 9.6875V1.8125C14.95 1.10156 14.3484 0.5 13.6375 0.5ZM13.6375 1.8125V2.93359C13.0086 3.45312 12.0242 4.21875 9.94609 5.85938C9.48125 6.21484 8.57891 7.08984 7.95 7.0625C7.29375 7.08984 6.39141 6.21484 5.92656 5.85938C3.84844 4.21875 2.86406 3.45312 2.2625 2.93359V1.8125H13.6375ZM2.2625 9.6875V4.62891C2.86406 5.12109 3.76641 5.83203 5.10625 6.89844C5.70781 7.36328 6.77422 8.40234 7.95 8.375C9.09844 8.40234 10.1375 7.36328 10.7664 6.89844C12.1062 5.83203 13.0086 5.12109 13.6375 4.62891V9.6875H2.2625Z"
              fill="#33CCFF"
            />
          </svg>
          <span className={classes["nav-span"]}>bema@gmail.com</span>
        </li>

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
