import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import ResponsivePdfViewer from "../components/pdf/ResponsivePdfViewer";
import PreviewToolbar from "../components/pdf/PreviewToolbar";
import TemplateRenderer from "../components/pdf/TemplateRenderer";

import { getMyBiodata } from "../features/biodata/api/biodata.service";
import { biodataToForm } from "../features/biodata/utils/biodata.mapper";

import type { BiodataSchema } from "../schemas/biodata.schema";

import usePrintBiodata from "../hooks/usePrintBiodata";

import { templates } from "../constants/templates";

import { downloadPdf } from "../features/document/api/document.service";


type TemplateSlug =
    | "elegant"
    | "modern"
    | "royal"
    | "luxury"
    | "signature";

function BiodataPreviewPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const initialTemplate =
        (searchParams.get("template") as TemplateSlug) ??
        "elegant";

    const [template, setTemplate] =
        useState<TemplateSlug>(initialTemplate);

    const [biodata, setBiodata] =
        useState<BiodataSchema | null>(null);

    const [loading, setLoading] =
        useState(true);

    const contentRef = useRef<HTMLDivElement>(null);

    const handlePrint = usePrintBiodata(contentRef);

    const handleDownload = async () => {
        try {
            const response = await downloadPdf(template);

            const url = window.URL.createObjectURL(response.data);

            const link = document.createElement("a");

            const disposition =
                response.headers["content-disposition"];

            let filename = "VivahCraft_Biodata.pdf";

            if (disposition) {
                const match = disposition.match(/filename="?([^"]+)"?/);

                if (match?.[1]) {
                    filename = match[1];
                }
            }

            link.href = url;
            link.download = filename;

            document.body.appendChild(link);

            link.click();

            link.remove();

            window.URL.revokeObjectURL(url);

        } catch (error) {
            console.error("Failed to download PDF:", error);
        }
    };

    useEffect(() => {
        console.log("useEffect running");

        async function loadBiodata() {
            try {
                const apiData = await getMyBiodata();

                setBiodata(biodataToForm(apiData));
            } catch (error) {
                console.error("Failed to load biodata:", error);
            } finally {
                setLoading(false);
            }
        }

        loadBiodata();
    }, []);

    const selectedTemplate = templates.find(
        (t) => t.slug === template
    );

    const requiresPayment =
        (selectedTemplate?.price ?? 0) > 0;

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-100">
                <p className="text-lg font-medium text-slate-600">
                    Loading biodata...
                </p>
            </div>
        );
    }

    if (!biodata) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
                <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-lg">

                    <h2 className="text-2xl font-bold">
                        No Biodata Found
                    </h2>

                    <p className="mt-3 text-slate-600">
                        Please fill your biodata before opening the preview.
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
                onDownload={handleDownload}
                requiresPayment={requiresPayment}
                onContinue={() =>
                    navigate("/payment?template=" + template)
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