import classes from "./Header.module.css";
import { Logo, Navigation, Banner, Hero } from "@/components";

export default function Header(): JSX.Element {
  return (
    <header className={classes["header_section"]}>
      <nav className={classes.navigation}>
        <Logo />
        <Navigation />
      </nav>
      <Banner />
      <Hero />
    </header>
  );
}
