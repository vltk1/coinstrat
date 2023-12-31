import { ButtonStyle } from "./Button.types";
import styled, { css, keyframes } from "styled-components";


const Button = styled.button`
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    outline: 0px;
    margin: 0px;
    border: 0px;
    cursor: pointer;
    background-color: transparent;
    appearance: none;
    text-decoration: none;
    font-weight: 500;
    line-height: 1.46;
    letter-spacing: 0.02857em;
    padding: .43em .84em .3em .84em;
    border-radius: .25rem;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

`



const effectWaves = keyframes`
  0% {transform: scale(0);}
  46% {opacity: 1;}
`;

const effectLoading = keyframes`
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
`;



export const TextButton = styled.span`
  position: relative;
  display: block;
  z-index: 10;
`

export const ButtonLoading = styled.s<{ $color: any }>`
  cursor: default;
  pointer-events: none;
  position: absolute;
  display: flex;
  text-decoration: none;
  height: 1.09em;
  width: 4.7em;
  &:before {
    content: "Loading";
    font-size: inherit;
    width: 0.8em;
    height: 0.8em;
    border: 0.15em solid gray;
    border-radius: 50%;
    text-indent: 1.1em;
    color: inherit;
    letter-spacing: -0.008em;
    line-height: .88em;
    position: absolute;
    left: 0;
  }
  &:after{
    content: "";
    width: 0.8em;
    height: 0.8em;
    border: 0.15em solid transparent;
    z-index: 1;
    position: absolute;
    left: 0;
    opacity: 0.86;
    border-radius: 50%;
    animation: ${effectLoading} .6s linear infinite;
    border-top-color: ${props => props.$color};
  }
  
`
export const Waves = styled.span<{ $color: string }>`
    position: absolute;
    z-index: 0;
    border-radius: 50%;
    display: block;
    width: 2.3rem;
    height: 2.3rem;
    margin-top: -0.625rem;
    margin-left: -0.625rem;
    background-image: linear-gradient(190deg, rgba(255, 255, 255, 0.38), ${ props => props.$color} 200%);
    pointer-events: none;
    animation: ${effectWaves} 750ms;
`

export const $Button: React.FC<ButtonStyle> = styled(Button)`
  ${({ $type, theme }) => {

    const $color = theme.color[`${$type.color}`];

    switch ($type.variant) {
      case "primary":
        return css`
          background-color: ${$color};
          color: #fff;
        `;
      case "outline":
        return css`
          border: 1px solid ${$color};
          color: ${$color};
        `;
      default:
        return css`
          color: ${$color};
        `;
    }
  }}
  font-size: ${({theme, $type}) => theme.size[`${$type.size}`]};
  min-width: ${({$type}) => $type.full ? "100%" : "5.6em"};
  border-radius: ${({theme, $type}) => theme.rounded[`${$type.rounded}`]};
  ${({$type}) => $type.active && css`
    outline: 1px solid gray;
    outline-offset: 1px;
  `}
  &:disabled{
    opacity: 0.6;
    cursor: not-allowed;
  }
  s + span {
   visibility: hidden;
  }
`;
$Button.defaultProps = {
  theme: {
    color: {
      red: "red",
      orange: "orange",
      color: "yellow",
      green: "green",
      cyan: "cyan",
      blue: "blue",
      violet: "violet",
      dark: "black",
      light: "white",
    },
    size: {
      xs: "14px",
      sm: "16px",
      md: "18px",
      lg: "22px"
    },
    rounded: {
      md: ".375em",
      lg: ".5em",
      full: "9999px",
    }
  }
}