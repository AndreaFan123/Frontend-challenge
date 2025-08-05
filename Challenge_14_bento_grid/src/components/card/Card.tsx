import clsx from "clsx";
import styles from "./Card.module.css";

type CardProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "light" | "sun" | "light-sun";
} & React.HTMLAttributes<HTMLDivElement>;

export function Card({ children, variant = "primary" }: CardProps) {
  return <div className={clsx(styles.card, styles[variant])}>{children}</div>;
}
