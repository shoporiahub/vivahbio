type Props = {
    currentStep: number;
    totalSteps: number;
};

function ProgressBar({ currentStep, totalSteps }: Props) {
    const percentage = Math.round(
        ((currentStep + 1) / totalSteps) * 100
    );

    return (
        <div className="mb-8">

            <div className="mb-2 flex items-center justify-between">

                <span className="text-sm font-medium text-slate-600">
                    Progress
                </span>

                <span className="text-sm font-semibold text-blue-600">
                    {percentage}%
                </span>

            </div>

            <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">

                <div
                    className="h-full rounded-full bg-blue-600 transition-all duration-500 ease-in-out"
                    style={{
                        width: `${percentage}%`,
                    }}
                />

            </div>

        </div>
    );
}

export default ProgressBar;