import classes from "./Header.module.css";
import { Logo, Navigation } from "@/components";

export default function Header(): JSX.Element {
  return (
    <header>
      <nav className={classes.navigation}>
        <Logo />
        <Navigation />
      </nav>
    </header>
  );
}
