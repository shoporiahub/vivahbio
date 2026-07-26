import { useNavigate, useSearchParams } from "react-router-dom";
import { useFormContext, useWatch } from "react-hook-form";

import type { BiodataSchema } from "../../schemas/biodata.schema";

import { useBiodataStore } from "../../store/biodataStore";

import SectionTitle from "../form/SectionTitle";
import ReviewSection from "../form/ReviewSection";

import ReviewPhotoCard from "../review/ReviewPhotoCard";
import ReviewGenerateCard from "../review/ReviewGenerateCard";
import { getReviewSections } from "../review/reviewSections";

function Review() {
    const values = useWatch<BiodataSchema>();

    const navigate = useNavigate();

    const { getValues } = useFormContext<BiodataSchema>();

    const [searchParams] = useSearchParams();

    const selectedTemplate = searchParams.get("template");

    const setBiodata = useBiodataStore(
        (state) => state.setBiodata
    );

    const reviewSections = getReviewSections(values);
    
    const handleGenerate = () => {
        setBiodata(getValues());

        navigate("/preview?template=" + selectedTemplate);
    };

    return (
        <div className="space-y-10">

            <SectionTitle
                title="Review & Generate"
                description="Please review all the information carefully before generating your marriage biodata."
            />

            <div className="grid gap-8 lg:grid-cols-[320px_1fr]">

                {/* Sidebar */}

                <aside className="space-y-6">

                    <div className="lg:sticky lg:top-24 space-y-6">

                        <ReviewPhotoCard
                            photoUrl={values.profilePhotoUrl}
                            fullName={values.fullName}
                            gender={values.gender}
                            age={values.age}
                            city={values.city}
                        />

                        <ReviewGenerateCard
                            onGenerate={handleGenerate}
                        />

                    </div>

                </aside>

                {/* Review Sections */}

                <div className="space-y-6">

                    {reviewSections.map((section) => (

                        <ReviewSection
                            key={section.title}
                            title={section.title}
                            items={section.items}
                        />

                    ))}

                </div>

            </div>

        </div>
    );
}

export default Review;