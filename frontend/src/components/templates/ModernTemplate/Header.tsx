import type { TemplateProps } from "../../../types/template";

function Header({ data }: TemplateProps) {
    return (
        <header className="flex gap-8 border-b border-slate-200 pb-8">
            <div className="shrink-0">
                {data.profilePhotoUrl ? (
                    <img
                        src={data.profilePhotoUrl}
                        alt={data.fullName}
                        className="h-40 w-32 rounded-xl object-cover shadow-md"
                    />
                ) : (
                    <div className="flex h-40 w-32 items-center justify-center rounded-xl border bg-slate-100 text-sm text-slate-500">
                        No Photo
                    </div>
                )}
            </div>

            <div className="flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-slate-800">
                    {data.fullName}
                </h1>

                <p className="mt-2 text-lg text-slate-600">
                    Marriage Biodata
                </p>

                <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-500">
                    {data.city && <span>{data.city}</span>}
                    {data.mobile && <span>{data.mobile}</span>}
                    {data.email && <span>{data.email}</span>}
                </div>
            </div>
        </header>
    );
}

export default Header;