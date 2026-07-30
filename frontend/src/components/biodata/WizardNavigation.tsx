type Props = {
    isFirstStep: boolean;
    isLastStep: boolean;
    previousStep: () => void;
    nextStep: () => void;
    loading: boolean;
    onGenerate: () => void;
};

function WizardNavigation({
    isFirstStep,
    isLastStep,
    previousStep,
    nextStep,
    loading,
    onGenerate,
}: Props) {
    return (
        <div className="mt-10 border-t border-slate-200 pt-6">

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">

                <button
                    type="button"
                    disabled={isFirstStep}
                    onClick={previousStep}
                    className="cursor-pointer w-full rounded-xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                    ← Previous
                </button>

                <button
                    type="button"
                    disabled={loading}
                    onClick={isLastStep ? onGenerate : nextStep}
                    className="cursor-pointer w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                    {loading
                        ? "Generating..."
                        : isLastStep
                            ? "Generate Biodata"
                            : "Next →"}
                </button>

            </div>

        </div>
    );
}

export default WizardNavigation;