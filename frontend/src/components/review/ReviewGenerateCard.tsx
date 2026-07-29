type Props = {
    onGenerate: () => void;
};

function ReviewGenerateCard({ onGenerate }: Props) {
    return (
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 shadow-xl">

            <div className="p-8">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-3xl">
                    📄
                </div>

                <h2 className="mt-6 text-2xl font-bold text-white">
                    Generate Biodata
                </h2>

                <p className="mt-3 text-sm leading-6 text-blue-100">
                    You've completed all the required information.
                    Generate a beautiful, premium marriage biodata in just one click.
                </p>

                <div className="mt-8 space-y-3">

                    <div className="flex items-center gap-3 text-sm text-blue-100">
                        <span className="text-lg">✓</span>
                        <span>Premium Design</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-blue-100">
                        <span className="text-lg">✓</span>
                        <span>Printable PDF</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-blue-100">
                        <span className="text-lg">✓</span>
                        <span>Edit Anytime</span>
                    </div>

                </div>

                <button
                    type="button"
                    // onClick={onGenerate}
                    className="mt-8 w-full rounded-xl bg-white px-6 py-4 text-base font-semibold text-blue-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                >
                    Generate Biodata →
                </button>

            </div>

        </div>
    );
}

export default ReviewGenerateCard;