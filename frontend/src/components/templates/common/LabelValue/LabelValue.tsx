type LabelValueProps = {
    label: string;
    value?: string | number | File | null;

    className?: string;
    labelClassName?: string;
    valueClassName?: string;

    separator?: string;

    labelWidth?: string;
};

export default function LabelValue({
    label,
    value,

    className = "",
    labelClassName = "",
    valueClassName = "",

    separator = ":",

    // labelWidth = "170px",
}: LabelValueProps) {
    const displayValue =
        value instanceof File
            ? value.name
            : value ?? "-";

    return (
        <div
            className={`
                grid
                grid-cols-[170px_20px_1fr]
                items-start
                mb-2
                ${className}
            `}
        >
            <span
                className={`
                    font-medium
                    white-800
                    ${labelClassName}
                `}
            >
                {label}
            </span>

            <span className="text-center text-gray-500">
                {separator}
            </span>

            <span
                className={`
                    break-words
                    white-700
                    ${valueClassName}
                `}
            >
                {displayValue}
            </span>
        </div>
    );
}