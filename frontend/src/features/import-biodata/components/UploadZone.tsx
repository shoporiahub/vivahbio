import { UploadCloud, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { importBiodata } from "../services/import.service";
import { useBiodataStore } from "../../biodata/store/biodata.store";

function UploadZone() {
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const { setImportedBiodata } = useBiodataStore();

    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleUpload = async () => {
        if (!file) return;

        setLoading(true);
        setError("");

        try {
            const biodata = await importBiodata(file);

            console.log("Import API Response:", biodata);

            setImportedBiodata(biodata);

            navigate("/biodata");

        } catch (err: any) {
            console.error(err);

            setError(
                err?.response?.data?.detail ??
                "Failed to import biodata."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-white p-12 text-center shadow">

            <UploadCloud
                className="mx-auto text-blue-600"
                size={60}
            />

            <h2 className="mt-6 text-2xl font-semibold">
                Import Existing Biodata
            </h2>

            <p className="mt-2 text-slate-500">
                Upload a PDF to automatically extract your biodata details.
            </p>

            <input
                ref={inputRef}
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                hidden
                onChange={(e) => {
                    if (e.target.files?.length) {
                        setFile(e.target.files[0]);
                        setError("");
                    }
                }}
            />

            <button
                type="button"
                onClick={() => inputRef.current?.click()}
                disabled={loading}
                className="mt-8 rounded-xl bg-blue-700 px-8 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
                Choose File
            </button>

            {file && (
                <div className="mt-8 rounded-xl bg-slate-100 p-4">

                    <p className="font-medium">
                        {file.name}
                    </p>

                    <p className="text-sm text-slate-500">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>

                    <button
                        type="button"
                        onClick={handleUpload}
                        disabled={loading}
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? (
                            <>
                                <Loader2
                                    className="animate-spin"
                                    size={18}
                                />
                                Importing...
                            </>
                        ) : (
                            "Import Biodata"
                        )}
                    </button>

                </div>
            )}

            {error && (
                <p className="mt-6 text-sm text-red-600">
                    {error}
                </p>
            )}

        </div>
    );
}

export default UploadZone;