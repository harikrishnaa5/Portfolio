const SIZE_CLASSES = {
    xs: "h-5 w-5",
    sm: "h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10",
    md: "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14",
    lg: "h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16",
    xl: "h-14 w-14 sm:h-16 sm:w-16 md:h-[4.5rem] md:w-[4.5rem]",
};

const VARIANT_IMG_CLASS = {
    default: "h-full w-full object-contain",
    invert: "h-full w-full object-contain dark:brightness-0 dark:invert",
    color: "h-full w-full object-contain",
};

/**
 * @param {'xs'|'sm'|'md'|'lg'|'xl'} size
 * @param {'default'|'invert'|'pad'|'color'} variant - pad = light tile in dark mode for dark PNG logos
 */
const BrandLogo = ({ src, alt, size = "md", variant = "default", className = "" }) => {
    const sizeClass = SIZE_CLASSES[size] ?? SIZE_CLASSES.md;

    if (variant === "pad") {
        return (
            <div
                className={`flex shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-zinc-100 p-1.5 dark:border-zinc-700 dark:bg-white ${sizeClass} ${className}`}
            >
                <img src={src} alt={alt} className={VARIANT_IMG_CLASS.default} />
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={`${sizeClass} ${VARIANT_IMG_CLASS[variant] ?? VARIANT_IMG_CLASS.default} ${className}`}
        />
    );
};

export default BrandLogo;
