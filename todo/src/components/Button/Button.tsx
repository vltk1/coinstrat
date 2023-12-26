import { useRef, useState } from "react";
import ButtonProps from "./Button.types";
import styles from "./Button.module.scss"
import withStyles from "../../../hoc/widthStyles"

const Button: React.FC<ButtonProps> = ({
  getStyles,
  children,
  variant = "outline",
  color = "primary",
  size = "small",
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

  return (
    <button
      ref={clientWidth}
      className={getStyles("button", ["variant", "color", "size"], {
        "is-disabled": disabled,
        "is-loading": loading,
      })}
      onClick={handleWaves}>
      <span>{children}</span>
      {waves}
    </button>
  );
};

export default withStyles(styles)(Button);
