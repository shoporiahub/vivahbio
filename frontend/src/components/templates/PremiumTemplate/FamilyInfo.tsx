import type { TemplateProps } from "../../../types/template";
import InfoRow from "../common/InfoRow";

function FamilyInfo({
    data,
}: TemplateProps) {
    return (
        <section className="mt-8">
            <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
                Family Details
            </h2>

            <InfoRow
                label="Father Name"
                value={data.fatherName}
            />

            <InfoRow
                label="Mother Name"
                value={data.motherName}
            />

            <InfoRow
                label="Siblings"
                value={data.siblings}
            />

            <InfoRow
                label="Family Type"
                value={data.familyType}
            />
        </section>
    );
}

export default FamilyInfo;