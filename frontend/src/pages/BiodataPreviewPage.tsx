import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import PdfWorkspace from "../components/pdf/PdfWorkspace";
import PreviewToolbar from "../components/pdf/PreviewToolbar";
import TemplateRenderer from "../components/pdf/TemplateRenderer";

import { useBiodataStore } from "../store/biodataStore";
import usePrintBiodata from "../hooks/usePrintBiodata";

import { templates } from "../constants/templates";

function BiodataPreviewPage() {
    const navigate = useNavigate();

    const biodata = useBiodataStore((state) => state.biodata);

    const [template, setTemplate] = useState<
        "elegant" | "modern" | "royal" | "luxury" | "signature" 
    >("elegant");

    const contentRef = useRef<HTMLDivElement>(null);

    const handlePrint = usePrintBiodata(contentRef);

    const selectedTemplate = templates.find((t) => {
        switch (template) {
            case "elegant":
                return t.slug === "elegant";

            case "modern":
                return t.slug === "modern";

            case "royal":
                return t.slug === "royal";

            case "luxury":
                return t.slug === "luxury";

            case "signature":
                return t.slug === "signature";

            default:
                return false;
        }
    });

    const requiresPayment = (selectedTemplate?.price ?? 0) > 0;

    if (!biodata) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-100">
                <div className="rounded-xl bg-white p-10 shadow">
                    <h2 className="text-2xl font-semibold">
                        No Biodata Found
                    </h2>

                    <p className="mt-3 text-slate-600">
                        Please fill the biodata form first.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-200">
            <PreviewToolbar
                template={template}
                onTemplateChange={setTemplate}
                onPrint={handlePrint}
                onDownload={handlePrint}
                requiresPayment={requiresPayment}
                onContinue={() => navigate("/payment?template=" + template)}
            />

            <PdfWorkspace>
                <div ref={contentRef}>
                    <TemplateRenderer
                        template={template}
                        data={biodata}
                    />
                </div>
            </PdfWorkspace>
        </div>
    );
}

export default BiodataPreviewPage;