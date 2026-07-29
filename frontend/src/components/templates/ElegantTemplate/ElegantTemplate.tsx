import Header from "./Header";
import Section from "./Section";
import LabelValue from "./LabelValue";
import { elegantSections } from "./sections";

import type { BiodataSchema } from "../../../schemas/biodata.schema";

type Props = {
    data: BiodataSchema;
};

export default function ElegantTemplate({
    data,
}: Props) {
    return (
        <div className="mx-auto h-[1123px] w-[794px] overflow-hidden bg-white px-10 py-10 shadow-xl">
            <Header data={data} />

            {elegantSections.map((section) => (
                <Section
                    key={section.title}
                    title={section.title}
                >
                    {section.fields.map((field) => (
                        <LabelValue
                            key={field.key}
                            label={field.label}
                            value={data[field.key]}
                        />
                    ))}
                </Section>
            ))}
        </div>
    );
}