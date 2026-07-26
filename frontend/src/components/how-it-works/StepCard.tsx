type Props = {
    number: string;
    title: string;
    description: string;
};

function StepCard({
    number,
    title,
    description,
}: Props) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md">
            <span className="text-sm font-semibold text-blue-600">
                {number}
            </span>

            <h3 className="mt-3 text-xl font-semibold text-slate-900">
                {title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
                {description}
            </p>
        </div>
    );
}

export default StepCard;