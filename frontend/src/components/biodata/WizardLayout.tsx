import type { ReactNode } from "react";
import Stepper from "./Stepper";
import { FORM_STEPS } from "../../constants/formSteps";

type Props = {
    currentStep: number;
    children: ReactNode;
};

function WizardLayout({ currentStep, children }: Props) {
    const progress = Math.round(
        ((currentStep + 1) / FORM_STEPS.length) * 100
    );

    return (
        <div className="space-y-8">

            {/* Progress */}

            <div>

                <div className="mb-2 flex items-center justify-between">

                    <span className="text-sm text-slate-600">
                        Progress
                    </span>

                    <span className="font-semibold text-blue-600">
                        {progress}%
                    </span>

                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-200">

                    <div
                        className="h-full rounded-full bg-blue-600 transition-all duration-500"
                        style={{
                            width: `${progress}%`,
                        }}
                    />

                </div>

            </div>

            <Stepper currentStep={currentStep} />

            {children}

        </div>
    );
}

export default WizardLayout;