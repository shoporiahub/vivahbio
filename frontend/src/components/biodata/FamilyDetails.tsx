import { useFormContext } from "react-hook-form";

import type { BiodataSchema } from "../../schemas/biodata.schema";

import FormGrid from "../form/FormGrid";
import InputField from "../form/InputField";
import SelectField from "../form/SelectField";
import SectionTitle from "../form/SectionTitle";

import { familyTypeOptions } from "../../constants/options";

function FamilyDetails() {
    const {
        register,
        formState: { errors },
    } = useFormContext<BiodataSchema>();

    return (
        <>
            <SectionTitle
                title="Family Details"
                description="Tell us about your family."
            />

            <FormGrid>
                <InputField
                    label="Father's Name"
                    name="fatherName"
                    register={register}
                    error={errors.fatherName}
                    required
                />

                <InputField
                    label="Mother's Name"
                    name="motherName"
                    register={register}
                    error={errors.motherName}
                    required
                />

                <InputField
                    label="Siblings"
                    name="siblings"
                    register={register}
                    error={errors.siblings}
                    placeholder="2 Brothers, 1 Sister"
                />

                <SelectField
                    label="Family Type"
                    name="familyType"
                    register={register}
                    error={errors.familyType}
                    options={familyTypeOptions}
                    placeholder="Select Family Type"
                    required
                />
            </FormGrid>
        </>
    );
}

export default FamilyDetails;