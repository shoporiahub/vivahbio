type Props = {
    isFirstStep: boolean;
    isLastStep: boolean;
    previousStep: () => void;
    nextStep: () => void;
    loading: boolean;
    onGenerateClick: () => void;
};

function WizardNavigation({
    isFirstStep,
    isLastStep,
    previousStep,
    nextStep,
    loading,
    onGenerateClick,
}: Props) {
    return (
        <div className="mt-10 border-t border-slate-200 pt-6">

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">

                <button
                    type="button"
                    disabled={isFirstStep}
                    onClick={previousStep}
                    className="w-full rounded-xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                    ← Previous
                </button>

                {!isLastStep ? (

                    <button
                        type="button"
                        onClick={nextStep}
                        className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
                    >
                        Next →
                    </button>

                ) : (

                    <button
                        type="submit"
                        disabled={loading}
                        onClick={onGenerateClick}
                        className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                    >
                        {loading
                            ? "Generating..."
                            : "Generate Biodata"}
                    </button>

                )}

            </div>

        </div>
    );
}

export default WizardNavigation;