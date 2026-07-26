import type { TemplateProps } from "../../../types/template";

function Header({
    data,
}: TemplateProps) {
    return (
        <header className="border-b pb-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold">
                        {data.fullName}
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Marriage Biodata
                    </p>
                </div>

                {data.profilePhotoUrl && (
                    <img
                        src={data.profilePhotoUrl}
                        alt={data.fullName}
                        className="h-40 w-32 rounded-lg object-cover"
                    />
                )}
            </div>
        </header>
    );
}

export default Header;