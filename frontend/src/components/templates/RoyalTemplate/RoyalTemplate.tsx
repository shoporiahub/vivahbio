import { Page, Section, LabelValue } from "../common";
import Header from "./Header";
import DecorativeBorder from "./DecorativeBorder";
import { royalSections } from "./sections";

import type { BiodataSchema } from "../../../schemas/biodata.schema";

type Props = {
    data: BiodataSchema;
};

export default function RoyalTemplate({ data }: Props) {
    return (
        <Page>
            <DecorativeBorder>
                <Header data={data} />

                <div className="mt-10 space-y-8">
                    {royalSections.map((section) => (
                        <Section
                            key={section.title}
                            title={section.title}
                        >
                            <div className="space-y-3">
                                {section.fields.map((field) => (
                                    <LabelValue
                                        key={field.key}
                                        label={field.label}
                                        value={data[field.key]}
                                    />
                                ))}
                            </div>
                        </Section>
                    ))}
                </div>
            </DecorativeBorder>
        </Page>
    );
}