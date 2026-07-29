type LabelValueProps = {
    label: string;
    value?: string | number | File | null;
};

export default function LabelValue({
    label,
    value,
}: LabelValueProps) {
    const displayValue =
        value instanceof File
            ? value.name
            : value ?? "-";

    return (
        <div
            className="
                grid
                grid-cols-[150px_15px_1fr]
                items-start
                mb-2
                text-[14px]
                leading-5
            "
        >
            <span className="font-semibold text-gray-700">
                {label}
            </span>

            <span className="text-center font-semibold text-[#B31942]">
                :
            </span>

            <span className="text-gray-700 break-words">
                {displayValue}
            </span>
        </div>
    );
}