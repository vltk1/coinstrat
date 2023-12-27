import clsx from "clsx";

const getModuleClasses = (cssModule: any, classKey: any) => {
    return (cssModule && cssModule[classKey]) || classKey
}

const getObjectClasses = (cssModule: any, object: any) => {
    return Object.keys(object).reduce((classes, classKey) => {
        const className = cssModule[classKey]
        return className ? { ...classes, [className]: object[classKey] } : classes;
    }, {})
}

const getDynamicClasses = (cssModule: any, props: any, classes: any) => {
    return classes.reduce((classesObject: any, classKey: any) => {
        const propValue = props[classKey]
        const className = cssModule[`${classKey}-${propValue}`]
        return className && propValue ? { ...classesObject, [className]: propValue } : classesObject;
    }, {})
}

export const getClasses =
    (cssModule: any) => (props: any) => (...args: any) => {
        return clsx(
            args.map(
                (arg: any) => {
                    if (Array.isArray(arg)) {
                        return getDynamicClasses(cssModule, props, arg)
                    } else if (typeof arg === "string") {
                        return getModuleClasses(cssModule, arg)
                    } else if (typeof arg === "object") {
                        return getObjectClasses(cssModule, arg)
                    }
                }
            )
        )
    }