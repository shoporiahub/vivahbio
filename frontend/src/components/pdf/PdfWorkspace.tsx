import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

function PdfWorkspace({
    children,
}: Props) {
    return (
        <div className="min-h-screen bg-slate-200 py-10">
            <div className="mx-auto flex max-w-7xl justify-center">
                {children}
            </div>
        </div>
    );
}

export default PdfWorkspace;