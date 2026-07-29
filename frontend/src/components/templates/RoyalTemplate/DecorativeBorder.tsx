import type { ReactNode } from "react";
import royalBackground from "../../../assets/royaltemplatebackground.webp";

type Props = {
    children: ReactNode;
};

export default function DecorativeBorder({
    children,
}: Props) {
    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Background */}
            <img
                src={royalBackground}
                alt="Royal Background"
                className="absolute inset-0 w-full h-full object-fill"
            />

            {/* Content */}
            <div
                className="
                    relative
                    z-10
                    h-full
                    px-[70px]
                    pt-[55px]
                    pb-[55px]
                    text-white
                "
            >
                {children}
            </div>
        </div>
    );
}