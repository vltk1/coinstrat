import { ReactElement } from "react";
import styles from "./Card.module.css"
import withStyles from "../../../hoc/widthStyles"

interface CardProp {
    getStyles: any,
    children: ReactElement | string,
    color: string,
    size: string,
    isClickable: boolean,
    isDragable?: boolean,
}
const Card: React.FC<CardProp> = ({
    getStyles,
    children = "I'm card",
    color = "primary",
    size = "sm",
    isClickable,
    isDragable,
}) => {
    return (
        <div className={getStyles("card", ["color", "size"], {
            "is-clickable": isClickable,
            "is-dragable": isDragable,
        })}>
            {children}
        </div>
    )
}
export default withStyles(styles)(Card);