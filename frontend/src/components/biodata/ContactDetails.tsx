import { useFormContext } from "react-hook-form";

import type { BiodataSchema } from "../../schemas/biodata.schema";

import FormGrid from "../form/FormGrid";
import InputField from "../form/InputField";
import SectionTitle from "../form/SectionTitle";

function ContactDetails() {
    const {
        register,
        formState: { errors },
    } = useFormContext<BiodataSchema>();

    return (
        <>
            <SectionTitle
                title="Contact Details"
                description="Provide your contact information."
            />

            <FormGrid>
                <InputField
                    label="Mobile Number"
                    name="mobile"
                    register={register}
                    error={errors.mobile}
                    placeholder="9876543210"
                    required
                />

                <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    register={register}
                    error={errors.email}
                    placeholder="example@gmail.com"
                    required
                />

                <InputField
                    label="City"
                    name="city"
                    register={register}
                    error={errors.city}
                    placeholder="Mumbai"
                    required
                />

                <InputField
                    label="State"
                    name="state"
                    register={register}
                    error={errors.state}
                    placeholder="Maharashtra"
                    required
                />

                <InputField
                    label="Country"
                    name="country"
                    register={register}
                    error={errors.country}
                    placeholder="India"
                    required
                />
            </FormGrid>
        </>
    );
}

export default ContactDetails;