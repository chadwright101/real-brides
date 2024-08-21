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
}: Props) => {
  const { pending } = useFormStatus();

  const buttonStyles =
    "rounded-xl drop-shadow-default text-center uppercase bg-purple border-4 border-purple px-5 py-[10px] text-white font-bold ease-in-out duration-200";

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
        className={classNames(`${buttonStyles} ${cssClasses}`, {
          "cursor-not-allowed": !disabled || !pending,
          "tablet:hover:bg-white tablet:hover:text-black": !pending,
          "w-[107.2px] tablet:hover:bg-purple tablet:hover:text-white": pending,
        })}
        type={type}
        onClick={onClick}
        disabled={disabled || pending}
        aria-label={children as string}
      >
        {pending && type == "submit" ? (
          <div className="spinner"></div>
        ) : (
          type === "submit" && "Submit"
        )}
        {type === "button" && children}
      </button>
    );
  }
};

export default Button;
