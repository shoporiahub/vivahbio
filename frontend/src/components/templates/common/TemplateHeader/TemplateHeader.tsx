import type { ReactNode } from "react";

type TemplateHeaderProps = {
    name: string;
    subtitle?: string;

    className?: string;
    titleClassName?: string;
    subtitleClassName?: string;

    children?: ReactNode;
};

export default function TemplateHeader({
    name,
    subtitle,
    className = "",
    titleClassName = "",
    subtitleClassName = "",
    children,
}: TemplateHeaderProps) {
    return (
        <header className={className}>
            {subtitle && (
                <p
                    className={`
                        ${subtitleClassName}
                    `}
                >
                    {subtitle}
                </p>
            )}

            <h1
                className={`
                    mt-2
                    ${titleClassName}
                `}
            >
                {name}
            </h1>

            {children}
        </header>
    );
}