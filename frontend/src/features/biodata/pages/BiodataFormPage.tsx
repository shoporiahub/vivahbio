import { useEffect } from "react";
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

function BiodataFormPage() {
    const [searchParams] = useSearchParams();
    const selectedTemplate = searchParams.get("template");

    const navigate = useNavigate();

    const methods = useForm<BiodataFormValues, unknown, BiodataSchema>({
        resolver: zodResolver(biodataSchema),
        defaultValues: defaultBiodataValues,
    });

    const { handleSubmit, trigger } = methods;

    const {
        save,
        fetchBiodata,
        biodata,
        loading,
        error,
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

    useEffect(() => {
        async function loadBiodata() {
            try {
                await fetchBiodata();
            } catch (err) {
                console.error(err);
            }
        }

        loadBiodata();
    }, [fetchBiodata]);

    useEffect(() => {
        if (biodata) {
            methods.reset(biodataToForm(biodata));
        } else {
            methods.reset(defaultBiodataValues);
        }
    }, [biodata, methods]);

    async function onSubmit(data: BiodataSchema) {
        try {
            const payload = formToBiodataRequest(data);
            await save(payload);
        } catch (err) {
            console.error(err);
            alert("Failed to save biodata.");
        }
    }

    const handleGenerate = () => {
        navigate("/preview?template=" + selectedTemplate);
    };

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

                    <div className="grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-10">

                        {/* Desktop Sidebar */}
                        <div className="hidden lg:block">
                            <BiodataSidebar
                                currentStep={currentStep}
                                template={selectedTemplate}
                            />
                        </div>

                        <FormCard>

                            {error && (
                                <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-600">
                                    {error}
                                </div>
                            )}

                            <FormProvider {...methods}>
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-8"
                                >
                                    <CurrentStep />

                                    <WizardNavigation
                                        isFirstStep={isFirstStep}
                                        isLastStep={isLastStep}
                                        previousStep={previousStep}
                                        nextStep={nextStep}
                                        loading={loading}
                                        onGenerateClick={handleGenerate}
                                    />
                                </form>
                            </FormProvider>

                        </FormCard>

                    </div>

                </div>
            </section>
        </Layout>
    );
}

export default BiodataFormPage;