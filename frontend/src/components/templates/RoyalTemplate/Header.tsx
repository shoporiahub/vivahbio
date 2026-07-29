import { TemplateHeader, Divider, Photo } from "../common";
import type { BiodataSchema } from "../../../schemas/biodata.schema";

type Props = {
    data: BiodataSchema;
};

export default function Header({ data }: Props) {
    return (
        <header className="px-6 pt-2">
            <TemplateHeader
                name={data.fullName}
                subtitle="Marriage Biodata"
                className="text-center"
                titleClassName="text-3xl font-bold text-white"
                subtitleClassName="mt-1 uppercase tracking-[0.2em] text-sm text-[#F8E8C8]"
            />

            <div className="mt-5 flex justify-center">
                <Photo
                    src={data.profilePhotoUrl}
                    width={150}
                    height={190}
                    className="border-[3px] border-[#E4C77A]"
                />
            </div>

            <Divider className="my-5 text-[#E4C77A]" />
        </header>
    );
}