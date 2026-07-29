import type { ReactNode } from "react";
import Divider from "./Divider";
import SectionTitle from "./SectionTitle";

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

    showDivider = true,
}: SectionProps) {
    return (
        <section className={`mb-6 ${className}`}>
            <SectionTitle
                title={title}
                className={titleClassName}
            />

            {showDivider && (
                <Divider className="mt-2 mb-4" />
            )}

            <div className={contentClassName}>
                {children}
            </div>
        </section>
    );
}