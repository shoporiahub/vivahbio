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
        <section className="mb-6">
            <h2 className="text-[22px] font-bold uppercase text-[#B31942]">
                {title}
            </h2>

            <div className="mt-2 mb-4 h-px bg-gray-200" />

            <div className="space-y-1">
                {children}
            </div>
        </section>
    );
}