type Props = {
    template?: string | null;
};

function SelectedTemplateCard({
    template,
}: Props) {

    return (
        <div className="rounded-3xl bg-white p-6 shadow-md">

            <h3 className="font-bold">
                Selected Template
            </h3>

            <div className="mt-5 overflow-hidden rounded-2xl bg-slate-100">

                <div className="flex h-56 items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">

                    Preview

                </div>

            </div>

            <p className="mt-5 text-lg font-semibold capitalize">
                {template ?? "Classic"}
            </p>

        </div>
    );
}

export default SelectedTemplateCard;