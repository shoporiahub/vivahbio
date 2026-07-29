import type { ReactNode } from "react";

type SectionProps = {
    title: string;
    children: ReactNode;
};

export default function Section({
    title,
    children,
}: SectionProps) {
    return (
        <section className="mb-8">
            <h2 className="text-[22px] font-bold uppercase tracking-wide text-[#B43A57]">
                {title}
            </h2>

            <div className="mt-2 mb-5 h-px bg-gray-200" />

            <div>
                {children}
            </div>
        </section>
    );
}