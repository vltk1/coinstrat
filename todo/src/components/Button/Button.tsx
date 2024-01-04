
import { useRef, useState } from "react";
import { ButtonProp } from "./Button.types";
import { $Button, ButtonLoading, TextButton, Waves } from "./Button.styles"

const Button: React.FC<ButtonProp> = props => {

  const { color, children, loading, disabled } = props;
  const wavesInit: any = (keyIndex: number, wavesAttach: any, color: string) => {
    return (
      <Waves key={keyIndex} $color={color} style={wavesAttach}></Waves>
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
      transform: `scale(${((clientWidth.current.clientWidth / 100) * 4.8)})`,
    }
    const keyIndex: number = e.nativeEvent.offsetY + e.nativeEvent.offsetX
    let wavesArr = wavesInit(keyIndex, wavesAttach, color);
    setWaves(wavesArr)
    setTimeout(() => setWaves(null), 750)
  };

  return (
    <$Button $type={{...props}} ref={clientWidth} onClick={handleWaves} disabled={disabled} >
        {waves}
        {loading && <ButtonLoading $color={color} />}
        <TextButton>{children}</TextButton>
    </$Button>
  );
};


export default Button;