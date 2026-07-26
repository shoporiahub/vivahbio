type Props = {
    value: string;
    onChange: (template: string) => void;
};

function TemplateSelector({
    value,
    onChange,
}: Props) {
    const templates = [
        "classic",
        "modern",
        "premium",
    ];

    return (
        <div className="mb-8 flex gap-4">
            {templates.map((template) => (
                <button
                    key={template}
                    onClick={() => onChange(template)}
                    className={`rounded-lg px-5 py-2 ${
                        value === template
                            ? "bg-blue-600 text-white"
                            : "bg-white"
                    }`}
                >
                    {template}
                </button>
            ))}
        </div>
    );
}

export default TemplateSelector;