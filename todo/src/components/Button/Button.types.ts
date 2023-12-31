export interface ButtonProp {
    children: React.ReactNode;
    variant?: "primary" | "ghost" | "link" | "outline";
    color?: "red" | "orange" | "green" | "cyan" | "blue" | "violet" | "dark" | "light";
    size?: "xs" | "sm" | "md" | "lg" | "full";
    rounded?: "md" | "lg" | "full"; 
    active?: boolean;
    loading?: boolean;
    disabled?: boolean;
    full?: boolean;
}
export interface ButtonStyle {
    $type: ButtonProp,
    theme?: any;
    children?: any;
    ref?: any;
    onClick?: any;
    disabled?: boolean;
}

