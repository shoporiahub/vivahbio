import type { ReactNode } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

type SectionProps = {
    title: string;
    children: ReactNode;

    className?: string;
    titleClassName?: string;
    contentClassName?: string;

    showDivider?: boolean;
};

export default function Section({
    title,
    children,

    className = "",
    titleClassName = "",
    contentClassName = "",

    showDivider = false,
}: SectionProps) {
    return (
        <section className={`mb-8 text-white ${className}`}>
            <SectionTitle
                title={title}
                className={`text-[#FFD166] ${titleClassName}`}
            />

            {showDivider && (
                <div className="mt-2 h-px bg-[#FFD166]/60" />
            )}

            <div
                className={`mt-4 text-[#FFF8E7] ${contentClassName}`}
            >
                {children}
            </div>
        </section>
    );
}