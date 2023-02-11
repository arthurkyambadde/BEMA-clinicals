import classes from "./Logo.module.css";

export default function Logo(): JSX.Element {
  return (
    <div className={classes["logo-box"]}>
      {/* eslint-disable @next/next/no-img-element */}
      <img src="assets/images/logo.png" alt="Logo" className={classes.logo} />
    </div>
  );
}
