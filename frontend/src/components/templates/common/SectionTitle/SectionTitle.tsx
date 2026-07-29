type SectionTitleProps = {
    title: string;
    className?: string;
};

export default function SectionTitle({
    title,
    className = "",
}: SectionTitleProps) {
    return (
        <h2
            className={`
                text-base
                font-semibold
                uppercase
                tracking-[0.15em]
                leading-none
                text-[#FFD166]
                ${className}
            `}
        >
            {title}
        </h2>
    );
}