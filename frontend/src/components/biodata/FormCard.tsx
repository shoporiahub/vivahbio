import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

function FormCard({
    children,
}: Props) {

    return (

        <div className="rounded-3xl bg-white p-10 shadow-xl">

            {children}

        </div>

    );
}

export default FormCard;