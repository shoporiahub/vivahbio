import Header from "./Header";
import LabelValue from "./LabelValue";
import Section from "./Section";
import { template04Sections } from "./sections";

import type { BiodataSchema } from "../../../schemas/biodata.schema";

type Props = {
    data: BiodataSchema;
};

export default function GraceTemplate({ data }: Props) {
    return (
        <div className="relative mx-auto h-[1123px] w-[794px] overflow-hidden bg-[#FFFDF9] px-12 py-10 shadow-xl">

            {/* Decorations */}

            <div className="relative z-10">
                <Header data={data} />

                {template04Sections.map((section) => (
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
        </div>
    );
}