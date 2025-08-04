import clsx from "clsx";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = "primary",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, styles[variant], {
        [styles.disabled]: disabled,
      })}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
