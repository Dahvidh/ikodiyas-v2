import { cva } from "class-variance-authority";
export const headingVariants = cva("font-semibold tracking-tight text-white", {
    variants: {
        variant: {
            hero: "text-6xl md:text-8xl xl:text-[9rem] leading-[0.9]",
            h1: "text-5xl md:text-6xl",
            h2: "text-4xl md:text-5xl",
            h3: "text-3xl md:text-4xl",
        },
        align: {
            left: "text-left",
            center: "text-center",
            right: "text-right",
        },
    },
    defaultVariants: {
        variant: "h1",
        align: "left",
    },
});
export const paragraphVariants = cva("leading-relaxed text-zinc-300", {
    variants: {
        size: {
            sm: "text-sm",
            md: "text-base",
            lg: "text-lg",
        },
        muted: {
            true: "text-zinc-500",
        },
    },
    defaultVariants: {
        size: "md",
    },
});
export const textVariants = cva("", {
    variants: {
        size: {
            xs: "text-xs",
            sm: "text-sm",
            md: "text-base",
        },
    },
    defaultVariants: {
        size: "md",
    },
});
