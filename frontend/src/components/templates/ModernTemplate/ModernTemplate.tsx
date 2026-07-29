import Header from "./Header";
import Section from "./Section";
import LabelValue from "./LabelValue";
import { modernSections } from "./sections";
import { MODERN_CONSTANTS } from "./constants";

import { Page, Photo } from "../common";

import type { BiodataSchema } from "../../../schemas/biodata.schema";

type Props = {
    data: BiodataSchema;
};

export default function ModernTemplate({ data }: Props) {
    return (
        <Page className="bg-white px-8 py-8">
            <Header name={data.fullName} />

            <div className="grid grid-cols-[120px_1fr] gap-8 mt-6">
                {/* Left Side */}
                <div className="flex justify-center">
                    <Photo
                        src={data.profilePhotoUrl}
                        width={MODERN_CONSTANTS.photoWidth}
                        height={MODERN_CONSTANTS.photoHeight}
                        className="border border-gray-300"
                    />
                </div>

                {/* Right Side */}
                <div>
                    {modernSections.map((section) => (
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
        </Page>
    );
}