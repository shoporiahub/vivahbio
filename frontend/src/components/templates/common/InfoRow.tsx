type InfoRowProps = {
    label: string;
    value?: string | number | null;
};

function InfoRow({
    label,
    value,
}: InfoRowProps) {
    return (
        <div className="flex border-b border-slate-100 py-2">
            <span className="w-40 font-medium text-slate-600">
                {label}
            </span>

            <span className="flex-1 text-slate-900">
                {value || "-"}
            </span>
        </div>
    );
}

export default InfoRow;