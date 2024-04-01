import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

const button = cva(
  ["w-full font-ubuntu-medium", "font-semibold", "rounded-full"],
  {
    variants: {
      intent: {
        primary: [
          "bg-white",
          "text-primary-red",
          "hover:bg-primary-cta-hover font-ubuntu-bold",
        ],
        secondary: ["border", "bg-transparent", "text-white", "border-white"],
      },
      size: {
        medium: ["text-md", "py-3", "px-5"],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props} />;
