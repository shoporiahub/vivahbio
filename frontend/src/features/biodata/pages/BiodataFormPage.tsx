import { useEffect, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useSearchParams } from "react-router-dom";

import Layout from "../../../components/layout/Layout";

import BiodataHero from "../../../components/biodata/BiodataHero";
import BiodataSidebar from "../../../components/biodata/BiodataSidebar";
import FormCard from "../../../components/biodata/FormCard";
import WizardNavigation from "../../../components/biodata/WizardNavigation";

import {
    biodataSchema,
    type BiodataSchema,
    type BiodataFormValues,
} from "../../../schemas/biodata.schema";

import { FORM_STEPS } from "../../../constants/formSteps";
import { defaultBiodataValues } from "../../../constants/defaultBiodataValues";

import useBiodataStepper from "../../../hooks/useBiodataStepper";

import { useBiodataStore } from "../../../features/biodata/store/biodata.store";

import {
    biodataToForm,
    formToBiodataRequest,
} from "../../../features/biodata/utils/biodata.mapper";

import { importedBiodataToForm } from "../../../features/biodata/utils/importedBiodata.mapper";

function BiodataFormPage() {
    const [searchParams] = useSearchParams();
    const selectedTemplate = searchParams.get("template");

    const navigate = useNavigate();

    const formRef = useRef<HTMLDivElement>(null);

    const methods = useForm<BiodataFormValues, unknown, BiodataSchema>({
        resolver: zodResolver(biodataSchema),
        defaultValues: defaultBiodataValues,
    });

    const { handleSubmit, trigger } = methods;

    const {
        save,
        fetchBiodata,
        biodata,
        importedBiodata,
        clearImportedBiodata,
        loading,
    } = useBiodataStore();

    const {
        currentStep,
        nextStep,
        previousStep,
        isFirstStep,
        isLastStep,
    } = useBiodataStepper({
        trigger,
    });

    const CurrentStep = FORM_STEPS[currentStep].component;

    const handleNext = async () => {
        await nextStep();

        formRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const handlePrevious = () => {
        previousStep();

        formRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    useEffect(() => {
        if (importedBiodata) {
            return;
        }

        async function loadBiodata() {
            try {
                await fetchBiodata();
            } catch (err) {
                console.error(err);
            }
        }

        loadBiodata();
    }, [fetchBiodata, importedBiodata]);

    useEffect(() => {
        if (importedBiodata) {
            methods.reset(
                importedBiodataToForm(importedBiodata)
            );
            return;
        }

        if (biodata) {
            methods.reset(
                biodataToForm(biodata)
            );
        } else {
            methods.reset(
                defaultBiodataValues
            );
        }
    }, [
        importedBiodata,
        biodata,
        methods,
    ]);

    async function onSubmit(data: BiodataSchema) {
        try {
            const payload = formToBiodataRequest(data);

            await save(payload);

            // Imported draft is no longer needed
            clearImportedBiodata();

            navigate(
                "/preview?template=" +
                (selectedTemplate ?? "elegant")
            );
        } catch (err) {
            console.error(err);
            alert("Failed to save biodata.");
        }
    }

    const handleGenerate = handleSubmit(onSubmit);

    return (
        <Layout>
            <BiodataHero />

            <section className="bg-slate-50 py-8 md:py-12 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* Mobile Progress */}
                    <div className="mb-6 lg:hidden">

                        <div className="mb-2 flex items-center justify-between">

                            <span className="text-sm font-semibold text-slate-700">
                                Step {currentStep + 1} of {FORM_STEPS.length}
                            </span>

                            <span className="text-sm text-slate-500">
                                {FORM_STEPS[currentStep].title}
                            </span>

                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-slate-200">

                            <div
                                className="h-full rounded-full bg-blue-600 transition-all duration-300"
                                style={{
                                    width: `${((currentStep + 1) / FORM_STEPS.length) * 100}%`,
                                }}
                            />

                        </div>

                    </div>

                    <div className="grid min-w-0 gap-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10">

                        <div className="hidden lg:block">
                            <BiodataSidebar
                                currentStep={currentStep}
                                template={selectedTemplate}
                            />
                        </div>

                        <div ref={formRef}>

                            <FormCard>

                                <FormProvider {...methods}>

                                    <form className="flex min-w-0 flex-1 flex-col">

                                        {/* Step Content */}

                                        <div className="flex-1">

                                            <CurrentStep />

                                        </div>

                                        {/* Navigation */}

                                        <WizardNavigation
                                            isFirstStep={isFirstStep}
                                            isLastStep={isLastStep}
                                            previousStep={handlePrevious}
                                            nextStep={handleNext}
                                            loading={loading}
                                            onGenerate={handleGenerate}
                                        />

                                    </form>

                                </FormProvider>

                            </FormCard>
                        </div>

                    </div>

                </div>
            </section>
        </Layout>
    );
}

export default BiodataFormPage;