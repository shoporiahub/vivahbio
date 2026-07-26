import type { TemplateProps } from "../../../types/template";
import InfoRow from "../common/InfoRow";

function FamilyInfo({ data }: TemplateProps) {
    return (
        <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-800">
                Family Details
            </h2>

            <InfoRow label="Father Name" value={data.fatherName} />
            <InfoRow label="Mother Name" value={data.motherName} />
            <InfoRow label="Siblings" value={data.siblings} />
            <InfoRow label="Family Type" value={data.familyType} />
        </section>
    );
}

export default FamilyInfo;