export default interface ButtonProps {
    getStyles: any;
    children: string;
    outline: string;
    variant: "text" | "outline" | "containe";
    color: string;
    size: "small" | "medium" | "large";
    disabled?: boolean;
    loading?: boolean;
}

