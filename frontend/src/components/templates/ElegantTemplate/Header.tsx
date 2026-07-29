import type { BiodataSchema } from "../../../schemas/biodata.schema";

type Props = {
    data: BiodataSchema;
};

export default function Header({ data }: Props) {
    return (
        <header className="mb-8">
            <div className="flex items-start justify-between">
                {/* Left */}
                <div>
                    <h1 className="text-[42px] font-extrabold uppercase text-[#B31942]">
                        {data.fullName}
                    </h1>

                    <p className="mt-1 text-lg italic text-gray-500">
                        Seeking a Perfect Life Partner
                    </p>
                </div>

                {/* Right */}
                <div className="h-[130px] w-[105px] overflow-hidden rounded border-2 border-[#C44A67]">
                    {data.profilePhotoUrl ? (
                        <img
                            src={data.profilePhotoUrl}
                            alt={data.fullName}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="flex h-full items-center justify-center bg-gray-100 text-xs text-gray-400">
                            Photo
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-6 h-[3px] w-full bg-[#B31942]" />
        </header>
    );
}