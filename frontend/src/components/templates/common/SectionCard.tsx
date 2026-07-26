import type { ReactNode } from "react";

type Props = {
    title: string;
    children: ReactNode;
};

function SectionCard({
    title,
    children,
}: Props) {
    return (
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-slate-800">
                {title}
            </h2>

            {children}
        </section>
    );
}

export default SectionCard;