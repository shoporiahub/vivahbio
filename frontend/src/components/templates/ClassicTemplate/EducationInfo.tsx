import type { TemplateProps } from "../../../types/template";
import InfoRow from "../common/InfoRow";

function EducationInfo({
    data,
}: TemplateProps) {
    return (
        <section className="mt-8">
            <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
                Education & Career
            </h2>

            <InfoRow
                label="Highest Qualification"
                value={data.highestQualification}
            />

            <InfoRow
                label="College"
                value={data.college}
            />

            <InfoRow
                label="University"
                value={data.university}
            />

            <InfoRow
                label="Occupation"
                value={data.occupation}
            />

            <InfoRow
                label="Company"
                value={data.company}
            />

            <InfoRow
                label="Annual Income"
                value={data.annualIncome}
            />
        </section>
    );
}

export default EducationInfo;