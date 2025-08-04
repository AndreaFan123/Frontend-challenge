import clsx from "clsx";
import styles from "./Text.module.css";

type TextVariant = "primary" | "secondary" | "light" | "ghost" | "default";

type Props = {
  children: React.ReactNode;
  variant?: TextVariant;
  as?: React.ElementType; // 可選擇渲染成 p/span/h1 等或自定義組件
  className?: string;
};

export function Text({
  children,
  variant = "default",
  as: Component = "p",
  className,
}: Props) {
  return (
    <Component className={clsx(styles.base, styles[variant], className)}>
      {children}
    </Component>
  );
}
