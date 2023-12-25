import React from "react";
import { getClasses } from "../helpers/styles";

const widthStyles = (styles) => (WrappedComponent) => {
    const WidthStylesComponent = (props) => {
        const allProps = { ...WrappedComponent.defaultProps, ...props }
        return <WrappedComponent getStyles={getClasses(styles)(allProps)} {...props} />
    }

    WidthStylesComponent.displayName = WrappedComponent.displayName;

    return WidthStylesComponent;

}

export default widthStyles;