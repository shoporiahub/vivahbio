import type { BiodataSchema } from "../../../schemas/biodata.schema";

type Props = {
    data: BiodataSchema;
};

export default function Header({
    data,
}: Props) {
    return (
        <header className="mb-8 flex flex-col items-center">
            <h1 className="text-[42px] font-bold uppercase tracking-wide text-[#D77A5A]">
                {data.fullName}
            </h1>

            <p className="mt-2 text-[18px] italic text-gray-500">
                Seeking a Perfect Life Partner
            </p>

            <div className="mt-5 h-[145px] w-[115px] overflow-hidden border-[3px] border-[#D77A5A] bg-white shadow-sm">
                {data.profilePhotoUrl ? (
                    <img
                        src={data.profilePhotoUrl}
                        alt={data.fullName}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-sm text-gray-400">
                        Photo
                    </div>
                )}
            </div>

            <div className="mt-6 h-[2px] w-full bg-[#E5E7EB]" />
        </header>
    );
}