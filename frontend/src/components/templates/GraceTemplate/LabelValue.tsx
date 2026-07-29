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
                grid-cols-[170px_18px_1fr]
                items-start
                mb-2
                text-[15px]
                leading-6
            "
        >
            <span className="font-semibold text-[#444444]">
                {label}
            </span>

            <span className="text-center font-semibold text-[#B43A57]">
                :
            </span>

            <span className="break-words text-[#555555]">
                {displayValue}
            </span>
        </div>
    );
}