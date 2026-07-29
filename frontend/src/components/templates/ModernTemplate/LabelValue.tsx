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

    labelWidth = "165px",
}: LabelValueProps) {
    const displayValue =
        value instanceof File
            ? value.name
            : value ?? "-";

    return (
        <div
            className={`
                grid
                items-start
                gap-y-1
                mb-1
                text-[14px]
                leading-5
                ${className}
            `}
            style={{
                gridTemplateColumns: `${labelWidth} 16px 1fr`,
            }}
        >
            <span
                className={`
                    font-medium
                    text-gray-700
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
                    text-gray-800
                    ${valueClassName}
                `}
            >
                {displayValue}
            </span>
        </div>
    );
}