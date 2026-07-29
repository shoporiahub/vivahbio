import type { ReactNode } from "react";

type BorderProps = {
    children: ReactNode;
    className?: string;
};

export default function Border({
    children,
    className = "",
}: BorderProps) {
    return (
        <div
            className={`
                border-2
                border-current
                p-6
                ${className}
            `}
        >
            {children}
        </div>
    );
}