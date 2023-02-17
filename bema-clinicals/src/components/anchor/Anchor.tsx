import { SVGProps } from "react";

type AnchorProps = {
  containerClass: string;
  iconClass?: string;
  hasIcon?: boolean;
  iconPath?: string;
  text: string;
  textClass: string;
  href: string;
  iconProps?: SVGProps<SVGSVGElement>;
};

export default function Anchor(props: AnchorProps): JSX.Element {
  return (
    <li className={props.containerClass}>
      <a href={props.href}>
        {props.hasIcon && (
          <svg {...props.iconProps}>
            <path d={props.iconPath} />
          </svg>
        )}
        <span className={props.textClass}>{props.text}</span>
      </a>
    </li>
  );
}
