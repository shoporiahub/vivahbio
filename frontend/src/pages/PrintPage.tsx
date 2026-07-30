import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import TemplateRenderer from "../components/pdf/TemplateRenderer";

import { getMyBiodata } from "../features/biodata/api/biodata.service";
import { biodataToForm } from "../features/biodata/utils/biodata.mapper";

import type { BiodataSchema } from "../schemas/biodata.schema";

type TemplateSlug =
    | "elegant"
    | "modern"
    | "royal"
    | "luxury"
    | "signature";

export default function PrintPage() {
    const [params] = useSearchParams();

    const template =
        (params.get("template") as TemplateSlug) ??
        "elegant";

    const [biodata, setBiodata] =
        useState<BiodataSchema | null>(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {
        async function load() {
            try {
                const apiData = await getMyBiodata();

                const formData = biodataToForm(apiData);

                setBiodata(formData);
            } catch (error) {
                console.error("Failed to load biodata:", error);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, []);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                Loading...
            </div>
        );
    }

    if (!biodata) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                No biodata found.
            </div>
        );
    }

    return (
        <TemplateRenderer
            template={template}
            data={biodata}
        />
    );
}