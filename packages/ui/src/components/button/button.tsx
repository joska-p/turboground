import { type VariantProps, cva } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-block cursor-pointer rounded-md bg-primary px-4 py-2 text-primary-foreground shadow outline-none transition-transform hover:bg-primary/80 focus-visible:ring-4 focus-visible:ring-accent",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        subtle: "bg-subtle text-subtle-foreground",
        ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
        link: "bg-transparent text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-2 text-sm",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface Props
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

function Button({
  ref,
  className,
  children,
  variant,
  size,
  type = "button",
  ...props
}: Props) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      type={type}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button, buttonVariants };
