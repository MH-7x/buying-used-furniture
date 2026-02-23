import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";
import { App } from "@/lib/App";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-[#F5D7CC] bg-background shadow-xs hover:bg-primary text-secondary dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-primary",
        link: "text-secondary underline-offset-4 underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-2xl px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-2xl gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-3xl px-8 has-[>svg]:px-6",
        icon: "size-9",
        "icon-xs": "size-6 rounded-xl [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  whatsapp = false,
  call = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    whatsapp?: boolean;
    call?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  if (whatsapp) {
    return (
      <a
        href={`https://wa.me/${App.phone}?text=I%20Contact%20You%20For%20Used%20Furniture`}
        target="_blank"
        title="واتساب لنا"
        rel="noopener noreferrer"
      >
        <Comp
          data-slot="button"
          data-variant={variant}
          data-size={size}
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        />
      </a>
    );
  }
  if (call) {
    return (
      <a
        href={`tel:${App.phone}`}
        target="_blank"
        title="اتصل بنا"
        rel="noopener noreferrer"
      >
        <Comp
          data-slot="button"
          data-variant={variant}
          data-size={size}
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        />
      </a>
    );
  }
  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
