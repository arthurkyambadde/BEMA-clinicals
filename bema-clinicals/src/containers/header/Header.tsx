import classes from "./Header.module.css";
import { Logo } from "@/components";

export default function Header(): JSX.Element {
  return (
    <header>
      <Logo />
    </header>
  );
}
