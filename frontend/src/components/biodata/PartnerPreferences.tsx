import { useFormContext } from "react-hook-form";

import type { BiodataSchema } from "../../schemas/biodata.schema";

import FormGrid from "../form/FormGrid";
import InputField from "../form/InputField";
import SelectField from "../form/SelectField";
import SectionTitle from "../form/SectionTitle";
import TextareaField from "../form/TextareaField";

import { religionOptions } from "../../constants/options";

function PartnerPreferences() {
    const {
        register,
        formState: { errors },
    } = useFormContext<BiodataSchema>();

    return (
        <>
            <SectionTitle
                title="Partner Preferences"
                description="Describe your ideal life partner."
            />

            <FormGrid>
                <InputField
                    label="Preferred Age"
                    name="preferredAge"
                    register={register}
                    error={errors.preferredAge}
                    placeholder="24-28"
                />

                <InputField
                    label="Preferred Height"
                    name="preferredHeight"
                    register={register}
                    error={errors.preferredHeight}
                    placeholder="5'4&quot; - 5'8&quot;"
                />

                <SelectField
                    label="Preferred Religion"
                    name="preferredReligion"
                    register={register}
                    error={errors.preferredReligion}
                    options={religionOptions}
                    placeholder="Select Religion"
                />

                <InputField
                    label="Preferred Caste"
                    name="preferredCaste"
                    register={register}
                    error={errors.preferredCaste}
                />

                <InputField
                    label="Preferred Education"
                    name="preferredEducation"
                    register={register}
                    error={errors.preferredEducation}
                />

                <InputField
                    label="Preferred Occupation"
                    name="preferredOccupation"
                    register={register}
                    error={errors.preferredOccupation}
                />

                <InputField
                    label="Preferred Location"
                    name="preferredLocation"
                    register={register}
                    error={errors.preferredLocation}
                />
            </FormGrid>

            <div className="mt-6">
                <TextareaField
                    label="Additional Expectations"
                    name="expectations"
                    register={register}
                    error={errors.expectations}
                    placeholder="Describe any additional expectations..."
                    rows={5}
                />
            </div>
        </>
    );
}

export default PartnerPreferences;