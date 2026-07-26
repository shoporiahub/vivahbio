import { useFormContext } from "react-hook-form";

import type { BiodataSchema } from "../../schemas/biodata.schema";

import FormGrid from "../form/FormGrid";
import InputField from "../form/InputField";
import SelectField from "../form/SelectField";
import SectionTitle from "../form/SectionTitle";

import {
    genderOptions,
    religionOptions,
} from "../../constants/options";

import ProfilePhotoUpload from "../../features/upload/components/ProfilePhotoUpload";

function PersonalDetails() {
    const {
        register,
        formState: { errors },
    } = useFormContext<BiodataSchema>();

    return (
        <>

            <SectionTitle
                title="Personal Details"
                description="Provide your basic personal information that will appear on your marriage biodata."
            />

            <ProfilePhotoUpload />

            <FormGrid>

                <InputField
                    label="Full Name"
                    name="fullName"
                    register={register}
                    error={errors.fullName}
                    placeholder="Enter your full name"
                    required
                />

                <SelectField
                    label="Gender"
                    name="gender"
                    register={register}
                    error={errors.gender}
                    options={genderOptions}
                    placeholder="Select Gender"
                    required
                />

                <InputField
                    label="Date of Birth"
                    name="dateOfBirth"
                    type="date"
                    register={register}
                    error={errors.dateOfBirth}
                    required
                />

                <InputField
                    label="Age"
                    name="age"
                    type="number"
                    register={register}
                    error={errors.age}
                    placeholder="Enter your age"
                    required
                />

                <SelectField
                    label="Religion"
                    name="religion"
                    register={register}
                    error={errors.religion}
                    options={religionOptions}
                    placeholder="Select Religion"
                    required
                />

                <InputField
                    label="Caste"
                    name="caste"
                    register={register}
                    error={errors.caste}
                    placeholder="Enter your caste"
                />

                <InputField
                    label="Height"
                    name="height"
                    register={register}
                    error={errors.height}
                    placeholder={`5'10"`}
                    required
                />

                <InputField
                    label="Weight"
                    name="weight"
                    type="number"
                    register={register}
                    error={errors.weight}
                    placeholder="70 kg"
                />

            </FormGrid>

        </>
    );
}

export default PersonalDetails;