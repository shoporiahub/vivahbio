import PrintButton from "./PrintButton";
import DownloadButton from "./DownloadButton";

type Props = {
    template: "elegant" | "modern" | "royal" | "luxury" | "signature";
    onTemplateChange: (
        template:  "elegant" | "modern" | "royal" | "luxury" | "signature"
    ) => void;
    onPrint: () => void;
    onDownload: () => void;

    requiresPayment: boolean;
    onContinue: () => void;
};

function PreviewToolbar({
    template,
    onTemplateChange,
    onPrint,
    onDownload,
    requiresPayment,
    onContinue,
}: Props) {
    const templates = [
        "elegant",
        "modern",
        "royal",
        "luxury",
        "signature"
    ] as const;

    return (
        <div className="sticky top-0 z-50 mb-8 flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow">
            {/* Template Selector */}
            <div className="flex gap-3">
                {templates.map((item) => (
                    <button
                        key={item}
                        type="button"
                        onClick={() => onTemplateChange(item)}
                        className={`rounded-lg px-5 py-2 font-medium capitalize transition-colors ${
                            template === item
                                ? "bg-blue-600 text-white"
                                : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                        }`}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
                {requiresPayment ? (
                    <button
                        type="button"
                        onClick={onContinue}
                        className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-700"
                    >
                        Continue to Payment →
                    </button>
                ) : (
                    <>
                        <PrintButton onClick={onPrint} />

                        <DownloadButton onClick={onDownload} />
                    </>
                )}
            </div>
        </div>
    );
}

export default PreviewToolbar;