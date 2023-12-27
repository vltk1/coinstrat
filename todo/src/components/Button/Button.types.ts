
export interface ButtonProp {
    children: React.ReactNode;
    variant?: "default" | "primary" | "text" | "link" | "outline";
    color?: string;
    size?: "xs" | "sm" | "md" | "lg";
    active?: boolean;
    loading?: boolean;
    disabled?: boolean;
}
