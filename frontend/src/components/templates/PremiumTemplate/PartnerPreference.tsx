import type { TemplateProps } from "../../../types/template";
import InfoRow from "../common/InfoRow";

function PartnerPreference({
    data,
}: TemplateProps) {
    return (
        <section className="mt-8">
            <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
                Partner Preferences
            </h2>

            <InfoRow
                label="Preferred Age"
                value={data.preferredAge}
            />

            <InfoRow
                label="Preferred Height"
                value={data.preferredHeight}
            />

            <InfoRow
                label="Preferred Religion"
                value={data.preferredReligion}
            />

            <InfoRow
                label="Preferred Caste"
                value={data.preferredCaste}
            />

            <InfoRow
                label="Preferred Education"
                value={data.preferredEducation}
            />

            <InfoRow
                label="Preferred Occupation"
                value={data.preferredOccupation}
            />

            <InfoRow
                label="Preferred Location"
                value={data.preferredLocation}
            />

            <InfoRow
                label="Expectations"
                value={data.expectations}
            />
        </section>
    );
}

export default PartnerPreference;