import type { TemplateProps } from "../../../types/template";

function Header({ data }: TemplateProps) {
    return (
        <header className="border-b border-amber-300 pb-8 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-600">
                Marriage Biodata
            </p>

            <h1 className="mt-3 text-5xl font-bold text-slate-800">
                {data.fullName}
            </h1>

            {data.profilePhotoUrl ? (
                <img
                    src={data.profilePhotoUrl}
                    alt={data.fullName}
                    className="mx-auto mt-8 h-48 w-40 rounded-xl border-4 border-amber-200 object-cover shadow-lg"
                />
            ) : (
                <div className="mx-auto mt-8 flex h-48 w-40 items-center justify-center rounded-xl border-4 border-amber-200 bg-slate-100 text-sm text-slate-500">
                    No Photo
                </div>
            )}
        </header>
    );
}

export default Header;