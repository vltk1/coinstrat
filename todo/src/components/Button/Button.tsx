import { ObjectHTMLAttributes, useRef, useState } from "react";
import ButtonProps from "./Button.types";

const Button = (props: ButtonProps) => {
  const wavesInit: any = (keyIndex: number, wavesAttach: any) => {
    return (
      <span key={keyIndex} className={`waves-ripple`} style={wavesAttach}></span>
    )
  }
  let wavesAttach = {}
  const clientWidth: React.RefObject<any> = useRef(null);
  const [waves, setWaves] = useState<any>();
  const focusInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    wavesAttach = {
      opacity: '0',
      top: `${e.nativeEvent.offsetY}px`,
      left: `${e.nativeEvent.offsetX}px`,
      transform: `scale(${((clientWidth.current.clientWidth / 100) * 6)})`,
    }
    const keyIndex: number = e.nativeEvent.offsetY + e.nativeEvent.offsetX
    let wavesArr = wavesInit(keyIndex, wavesAttach);
    setWaves(wavesArr)
    setTimeout(() => setWaves(null), 750)
  };
  return (
    <button
      ref={clientWidth}
      className="waves-effect waves-purple"
      onClick={focusInput} style={{ width: 300, height: 100, position: "relative", overflow: "hidden" }}>
      {props.label}
      {waves}
    </button>
  );
};

export default Button;
