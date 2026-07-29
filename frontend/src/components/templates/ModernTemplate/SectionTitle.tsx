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
                text-[18px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#B11F49]
                leading-none
                ${className}
            `}
        >
            {title}
        </h2>
    );
}