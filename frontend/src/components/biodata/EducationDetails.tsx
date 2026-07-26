import { useFormContext } from "react-hook-form";

import type { BiodataSchema } from "../../schemas/biodata.schema";

import FormGrid from "../form/FormGrid";
import InputField from "../form/InputField";
import SectionTitle from "../form/SectionTitle";

function EducationDetails() {
    const {
        register,
        formState: { errors },
    } = useFormContext<BiodataSchema>();

    return (
        <>
            <SectionTitle
                title="Education & Career"
                description="Share your educational and professional background."
            />

            <FormGrid>
                <InputField
                    label="Highest Qualification"
                    name="highestQualification"
                    register={register}
                    error={errors.highestQualification}
                    required
                />

                <InputField
                    label="College"
                    name="college"
                    register={register}
                    error={errors.college}
                />

                <InputField
                    label="University"
                    name="university"
                    register={register}
                    error={errors.university}
                />

                <InputField
                    label="Occupation"
                    name="occupation"
                    register={register}
                    error={errors.occupation}
                    required
                />

                <InputField
                    label="Company"
                    name="company"
                    register={register}
                    error={errors.company}
                />

                <InputField
                    label="Annual Income"
                    name="annualIncome"
                    register={register}
                    error={errors.annualIncome}
                    placeholder="₹10,00,000"
                />
            </FormGrid>
        </>
    );
}

export default EducationDetails;