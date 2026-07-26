import { FORM_STEPS } from "../../constants/formSteps";

type Props = {
    currentStep: number;
};

function Stepper({ currentStep }: Props) {
    return (
        <div className="mb-10">
            <div className="mt-4 flex items-center">
                {FORM_STEPS.map((step, index) => (
                    <div
                        key={step.title}
                        className="flex flex-1 items-center"
                    >
                        <div
                            className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors
                                ${
                                    index <= currentStep
                                        ? "bg-blue-600 text-white"
                                        : "bg-slate-200 text-slate-500"
                                }`}
                        >
                            {index + 1}
                        </div>

                        {index !== FORM_STEPS.length - 1 && (
                            <div
                                className={`h-1 flex-1 transition-colors
                                    ${
                                        index < currentStep
                                            ? "bg-blue-600"
                                            : "bg-slate-200"
                                    }`}
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <h2 className="text-2xl font-bold text-slate-800">
                    {FORM_STEPS[currentStep].title}
                </h2>

                <p className="mt-1 text-slate-500">
                    {FORM_STEPS[currentStep].description}
                </p>
            </div>
        </div>
    );
}

export default Stepper;