import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50",
  {
    variants: {
      variant: {
        default:
          "bg-blue-500 text-white shadow-md hover:bg-blue-600 hover:shadow-lg",
        destructive:
          "bg-red-500 text-white shadow-md hover:bg-red-600 hover:shadow-lg",
        outline:
          "border-2 border-slate-300 bg-white text-slate-700 shadow-md hover:bg-slate-50 hover:border-slate-400",
        secondary: "bg-slate-200 text-slate-800 shadow-md hover:bg-slate-300",
        ghost: "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
        link: "text-blue-500 underline-offset-4 hover:underline hover:text-blue-600",
      },
      size: {
        default: "h-10 px-6 py-2 has-[>svg]:px-4",
        sm: "h-8 rounded-md gap-1.5 px-3 text-xs has-[>svg]:px-2.5",
        lg: "h-12 rounded-lg px-8 text-base has-[>svg]:px-6",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button };
