import classNames from "classnames";
import Image from "next/image";
import React, { MouseEventHandler } from "react";

interface IExchangeButtonProps {
  onClick?: MouseEventHandler<unknown> | undefined;
}

const ExchangeButton: React.FC<IExchangeButtonProps> = ({ ...props }) => {
  return (
    <div className={classNames("flex justify-center my-3")}>
      <div
        onClick={props.onClick}
        className={classNames(
          "w-8 h-8",
          "bg-brandx-15 active:opacity-50",
          "rounded-full cursor-pointer",
          "flex justify-center items-center"
        )}
      >
        <Image
          src="/images/img-exchange-v2.png"
          alt=""
          width={18}
          height={14}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default React.memo(ExchangeButton);
