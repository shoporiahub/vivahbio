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
    onGenerateClick
}: Props) {
    
    return (

        <div className="mt-12 flex items-center justify-between pt-8">

            <button
                type="button"
                disabled={isFirstStep}
                onClick={previousStep}
                className="rounded-xl border border-slate-300 px-8 py-4 transition hover:bg-slate-100 disabled:opacity-50"
            >
                Previous
            </button>

            {!isLastStep ? (

                <button
                    type="button"
                    onClick={nextStep}
                    className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                    Next →
                </button>

            ) : (

                <button
                    type="submit"
                    disabled={loading}
                    onClick={onGenerateClick}
                    className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
                >
                    {loading
                        ? "Generating..."
                        : "Generate Biodata"}
                </button>

            )}

        </div>

    );

}

export default WizardNavigation;