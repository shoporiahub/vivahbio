type Props = {
    currentStep: number;
    totalSteps: number;
};

function ProgressCard({
    currentStep,
    totalSteps,
}: Props) {

    const progress = ((currentStep + 1) / totalSteps) * 100;

    return (
        <div className="rounded-3xl bg-white p-6 shadow-md">

            <div className="flex items-center justify-between">

                <h3 className="font-bold">
                    Progress
                </h3>

                <span className="font-semibold text-blue-600">
                    {Math.round(progress)}%
                </span>

            </div>

            <div className="mt-5 h-3 rounded-full bg-slate-200">

                <div
                    className="h-3 rounded-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                />

            </div>

            <p className="mt-4 text-sm text-slate-500">
                Step {currentStep + 1} of {totalSteps}
            </p>

        </div>
    );
}

export default ProgressCard;