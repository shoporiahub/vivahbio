import type { ReactNode } from "react";

type PageProps = {
    children: ReactNode;
    className?: string;
};

export default function Page({
    children,
    className = "",
}: PageProps) {
    return (
        <div
            className={`
                w-[794px]
                min-h-[1123px]
                bg-white
                shadow-lg
                mx-auto
                overflow-hidden
                ${className}
            `}
        >
            {children}
        </div>
    );
}