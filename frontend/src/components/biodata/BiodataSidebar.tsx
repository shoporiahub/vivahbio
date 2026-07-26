import { FORM_STEPS } from "../../constants/formSteps";
import ProgressCard from "./ProgressCard";
import SelectedTemplateCard from "./SelectedTemplateCard";

type Props = {
    currentStep: number;
    template?: string | null;
};

function BiodataSidebar({
    currentStep,
    template,
}: Props) {

    return (
        <div className="sticky top-24 space-y-6">

            <ProgressCard
                currentStep={currentStep}
                totalSteps={FORM_STEPS.length}
            />

            {/* <SelectedTemplateCard
                template={template}
            /> */}

            <div className="rounded-3xl bg-white p-6 shadow-md">

                <h3 className="mb-6 font-bold">
                    Steps
                </h3>

                <div className="space-y-4">

                    {FORM_STEPS.map((step, index) => {

                        const active = index === currentStep;
                        const completed = index < currentStep;

                        return (

                            <div
                                key={step.title}
                                className={`flex items-center gap-4 rounded-xl p-3 transition
                                    ${
                                        active
                                            ? "bg-blue-50"
                                            : ""
                                    }`}
                            >

                                <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-full font-bold
                                        ${
                                            completed
                                                ? "bg-green-600 text-white"
                                                : active
                                                    ? "bg-blue-600 text-white"
                                                    : "bg-slate-200"
                                        }`}
                                >

                                    {completed ? "✓" : index + 1}

                                </div>

                                <div>

                                    <p className="font-semibold">
                                        {step.title}
                                    </p>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

        </div>
    );
}

export default BiodataSidebar;