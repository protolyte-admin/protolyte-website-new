import type { ButtonHTMLAttributes, JSX } from "react";
import styles from "./PrimaryButton.module.css";

type ButtonVariant = "solid" | "outline" | "light";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

function PrimaryButton({
  variant = "solid",
  fullWidth = false,
  className,
  type = "button",
  ...props
}: PrimaryButtonProps): JSX.Element {
  const classes = [
    styles.button,
    variant === "solid" && styles.solid,
    variant === "outline" && styles.outline,
    variant === "light" && styles.light,
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <button type={type} className={classes} {...props} />;
}

export default PrimaryButton;
