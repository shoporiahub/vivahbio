import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import ResponsivePdfViewer from "../components/pdf/ResponsivePdfViewer";
import PreviewToolbar from "../components/pdf/PreviewToolbar";
import TemplateRenderer from "../components/pdf/TemplateRenderer";

import { useBiodataStore } from "../store/biodataStore";
import usePrintBiodata from "../hooks/usePrintBiodata";

import { templates } from "../constants/templates";

type TemplateSlug =
    | "elegant"
    | "modern"
    | "royal"
    | "luxury"
    | "signature";

function BiodataPreviewPage() {
    const navigate = useNavigate();

    const biodata = useBiodataStore((state) => state.biodata);

    const [template, setTemplate] =
        useState<TemplateSlug>("elegant");

    const contentRef = useRef<HTMLDivElement>(null);

    const handlePrint = usePrintBiodata(contentRef);

    const selectedTemplate = templates.find(
        (t) => t.slug === template
    );

    const requiresPayment =
        (selectedTemplate?.price ?? 0) > 0;

    if (!biodata) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">

                <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-lg">

                    <h2 className="text-2xl font-bold">
                        No Biodata Found
                    </h2>

                    <p className="mt-3 text-slate-600">
                        Please fill your biodata before
                        opening the preview.
                    </p>

                    <button
                        onClick={() => navigate("/biodata")}
                        className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
                    >
                        Fill Biodata
                    </button>

                </div>

            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100">

            <PreviewToolbar
                template={template}
                onTemplateChange={setTemplate}
                onPrint={handlePrint}
                onDownload={handlePrint}
                requiresPayment={requiresPayment}
                onContinue={() =>
                    navigate(
                        "/payment?template=" + template
                    )
                }
            />

            <main className="px-3 py-4 sm:px-6 lg:px-10 lg:py-8">

                <ResponsivePdfViewer>

                    <div ref={contentRef}>

                        <TemplateRenderer
                            template={template}
                            data={biodata}
                        />

                    </div>

                </ResponsivePdfViewer>

            </main>

        </div>
    );
}

export default BiodataPreviewPage;