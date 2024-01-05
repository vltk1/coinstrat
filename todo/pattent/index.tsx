import classNames from "classnames";
import React, { MouseEventHandler, ReactElement } from "react";
import LoadingIcon from "../LoadingIcon";

interface IButtonProps {
  children: ReactElement | JSX.Element | string;
  disabled?: boolean;
  className?: string;
  type?: "primary" | "secondary" | "transparent" | "white";
  onClick?:
    | MouseEventHandler<any>
    //| React.FormEvent<HTMLFormElement>
    | undefined;
  isLoading?: boolean;
  isCircle?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  children,
  className,
  disabled,
  type,
  isLoading,
  isCircle,
  ...props
}) => {
  const disabledStyled = disabled
    ? "bg bg-[#E6E7E8] !text-neutral-50 appearance-none"
    : `bg-${type} hover:bg-primary-hover`;

  const isCircleButton = isCircle
    ? "rounded-full"
    : "w-full rounded-lg shadow-sm flex justify-center";

  return (
    <div
      {...props}
      className={classNames(
        "flex justify-center align-middle cursor-pointer",
        "py-[13px] px-4",
        "border border-transparent",
        "text-base font-bold text-white",
        isCircleButton,
        className,
        disabledStyled
      )}
      onClick={!disabled && !isLoading ? props.onClick : null}
    >
      {isLoading && <LoadingIcon />}
      {children}
    </div>
  );
};

export default React.memo(Button);
