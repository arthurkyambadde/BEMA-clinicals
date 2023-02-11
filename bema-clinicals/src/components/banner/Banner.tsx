import classes from "./Banner.module.css";

export default function Banner(): JSX.Element {
  return (
    <div className={classes["banner-wrapper"]}>
      <p className={classes["banner-paragraph"]}>
        Meet Dr. Jackson Mukonzo Executive Director and Founder of BEMA in
        Uganda, in our “Focus on Sites.”{" "}
        <a href="#cite" className={classes["banner-link"]}>
          Visit the page{" "}
        </a>
      </p>
    </div>
  );
}
