import { useRef, useState } from "react";
import styles from "./Button.module.scss";
import { ButtonProp } from "./Button.types";
import { getClasses } from "../helpers/styles";

const Button: React.FC<ButtonProp> = ({
  children,
  variant = "default",
  color = "blue",
  size = "md",
  active = false,
  loading = false,
  disabled = false,
}) => {

  const wavesInit: any = (keyIndex: number, wavesAttach: any) => {
    return (
      <span key={keyIndex} className={getStyles("button-waves")} style={wavesAttach}></span>
    )
  }
  let wavesAttach = {}
  const clientWidth: React.RefObject<any> = useRef(null);
  const [waves, setWaves] = useState<any>();
  const handleWaves = (e: React.MouseEvent<HTMLButtonElement>) => {
    wavesAttach = {
      opacity: '0',
      top: `${e.nativeEvent.offsetY}px`,
      left: `${e.nativeEvent.offsetX}px`,
      transform: `scale(${((clientWidth.current.clientWidth / 100) * 4)})`,
    }
    const keyIndex: number = e.nativeEvent.offsetY + e.nativeEvent.offsetX
    let wavesArr = wavesInit(keyIndex, wavesAttach);
    setWaves(wavesArr)
    setTimeout(() => setWaves(null), 750)
  };

  color =
    variant === "primary" ? `${color}-primary` :
      variant === "outline" ? `${color}-outline` :
        variant === "text" ? `${color}-text` : color;

  const getStyles = getClasses(styles)({
    variant,
    color,
    size
  });
  return (
    <button
      ref={clientWidth}
      className={getStyles("button", ["variant", "color", "size"], {
        "is-active": active,
        "is-loading": loading,
        "is-disabled": disabled
      })}
      onClick={handleWaves}>
      <span>{children}</span>
      {waves}
    </button>
  );
};

export default Button;
