import type { TemplateProps } from "../../../types/template";
import InfoRow from "../common/InfoRow";

function PersonalInfo({ data }: TemplateProps) {
    return (
        <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-800">
                Personal Details
            </h2>

            <InfoRow label="Gender" value={data.gender} />
            <InfoRow label="Age" value={data.age} />
            <InfoRow label="Date of Birth" value={data.dateOfBirth} />
            <InfoRow label="Religion" value={data.religion} />
            <InfoRow label="Caste" value={data.caste} />
            <InfoRow label="Height" value={data.height} />
            <InfoRow label="Weight" value={data.weight} />
        </section>
    );
}

export default PersonalInfo;