import { useFormContext, useWatch } from "react-hook-form";

import type { BiodataSchema } from "../../schemas/biodata.schema";

import SectionTitle from "../form/SectionTitle";
import ReviewSection from "../form/ReviewSection";

import ReviewPhotoCard from "../review/ReviewPhotoCard";
import ReviewGenerateCard from "../review/ReviewGenerateCard";
import { getReviewSections } from "../review/reviewSections";

function Review() {
    const { control, getValues } = useFormContext<BiodataSchema>();

    const values = useWatch({
        control,
    }) ?? getValues();

    const reviewSections = getReviewSections(values);

    return (
        <div className="space-y-10">

            <SectionTitle
                title="Review & Generate"
                description="Please review all the information carefully before generating your marriage biodata."
            />

            <div className="grid gap-8 lg:grid-cols-[320px_1fr]">

                <aside className="space-y-6">

                    <div className="space-y-6 lg:sticky lg:top-24">

                        <ReviewPhotoCard
                            photoUrl={values.profilePhotoUrl}
                            fullName={values.fullName}
                            gender={values.gender}
                            age={values.age}
                            city={values.city}
                        />

                        <ReviewGenerateCard />

                    </div>

                </aside>

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