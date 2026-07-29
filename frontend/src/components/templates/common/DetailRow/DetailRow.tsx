type DetailRowProps = {
    label: string;
    value?: string | number | null;
    className?: string;
    labelClassName?: string;
    valueClassName?: string;
    separator?: string;
};

export default function DetailRow({
    label,
    value,
    className = "",
    labelClassName = "",
    valueClassName = "",
    separator = ":",
}: DetailRowProps) {
    return (
        <div className={`flex items-start ${className}`}>
            <span
                className={`
                    min-w-[170px]
                    font-medium
                    ${labelClassName}
                `}
            >
                {label}
            </span>

            <span className="mx-2">
                {separator}
            </span>

            <span
                className={`
                    flex-1
                    ${valueClassName}
                `}
            >
                {value || "-"}
            </span>
        </div>
    );
}