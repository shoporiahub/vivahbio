import ClassicTemplate from "../templates/ClassicTemplate/ClassicTemplate";
import ModernTemplate from "../templates/ModernTemplate/ModernTemplate";
import PremiumTemplate from "../templates/PremiumTemplate/PremiumTemplate";

import type { BiodataSchema } from "../../schemas/biodata.schema";

type Props = {
    template: "elegant" | "modern" | "royal" | "luxury" | "signature"
    data: BiodataSchema;
};

function TemplateRenderer({
    template,
    data,
}: Props) {
    switch (template) {
        case "modern":
            return <ModernTemplate data={data} />;

        case "elegant":
            return <PremiumTemplate data={data} />;

        default:
            return <ClassicTemplate data={data} />;
    }
}

export default TemplateRenderer;