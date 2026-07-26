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

            <section className="bg-slate-50 py-20">
                <div className="mx-auto max-w-7xl px-8">
                    <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
                        <BiodataSidebar
                            currentStep={currentStep}
                            template={selectedTemplate}
                        />

                        <FormCard>
                            {error && (
                                <div className="mb-8 rounded-xl border border-red-200 bg-red-50 p-4 text-red-600">
                                    {error}
                                </div>
                            )}

                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmit)}>
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