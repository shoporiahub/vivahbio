import type { TemplateProps } from "../../../types/template";

function PersonalInfo({
    data,
}: TemplateProps) {
    return (
        <section className="mt-8">
            <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
                Personal Details
            </h2>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <strong>Gender:</strong> {data.gender}
                </div>

                <div>
                    <strong>Age:</strong> {data.age}
                </div>

                <div>
                    <strong>Religion:</strong> {data.religion}
                </div>

                <div>
                    <strong>Caste:</strong> {data.caste}
                </div>

                <div>
                    <strong>Height:</strong> {data.height}
                </div>

                <div>
                    <strong>Weight:</strong> {data.weight}
                </div>
            </div>
        </section>
    );
}

export default PersonalInfo;