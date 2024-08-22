"use client";

import classNames from "classnames";
import Link from "next/link";
import { useFormStatus } from "react-dom";

interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
  cssClasses?: string;
  url?: string;
  target?: "_blank" | "_self";
  disabled?: boolean;
  form?: boolean;
  type?: "submit" | "button";
  whiteButton?: boolean;
}

const Button = ({
  onClick,
  children,
  cssClasses,
  url = "#",
  target,
  disabled,
  form,
  type = "button",
  whiteButton,
}: Props) => {
  const { pending } = useFormStatus();

  const buttonStyles = `rounded-xl drop-shadow-default text-center uppercase border-4 px-5 py-[10px] font-bold ease-in-out duration-200 ${
    !whiteButton
      ? "bg-purple text-white border-purple"
      : "bg-white text-black border-white"
  }`;

  if (!form) {
    return (
      <Link
        href={url}
        target={target}
        className={`${buttonStyles} inline-block tablet:hover:bg-white tablet:hover:text-black ${cssClasses}`}
        aria-label={children as string}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={classNames(`${buttonStyles} min-w-[107.2px] ${cssClasses}`, {
          "cursor-not-allowed": disabled || pending,
          "tablet:hover:bg-white tablet:hover:text-black":
            !pending && !whiteButton && !disabled,
          "tablet:hover:bg-purple tablet:hover:text-white":
            !pending && whiteButton && !disabled,
        })}
        type={type}
        onClick={onClick}
        disabled={disabled || pending}
        aria-label={children as string}
      >
        {pending && type == "submit" ? (
          <div
            className={`mx-auto ${
              whiteButton ? "spinner-purple" : "spinner-white"
            }`}
          ></div>
        ) : (
          type === "submit" && "Submit"
        )}
        {type === "button" && children}
      </button>
    );
  }
};

export default Button;
