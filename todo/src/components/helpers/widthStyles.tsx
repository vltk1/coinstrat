import { getClasses } from "./styles";

const widthStyles = (styles: any) => (WrappedComponent: any) => {
    const WidthStylesComponent = (props: any) => {
        const allProps = { ...WrappedComponent.defaultProps, ...props }
        return <WrappedComponent getStyles={getClasses(styles)(allProps)} {...props} />
    }

    WidthStylesComponent.displayName = WrappedComponent.displayName;

    return WidthStylesComponent;

}

export default widthStyles;