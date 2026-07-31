import { Controller, useFormContext } from "react-hook-form";
import { useState } from "react";

import type { BiodataSchema } from "../../schemas/biodata.schema";

import ImageUpload from "../form/ImageUpload";
import SectionTitle from "../form/SectionTitle";

import { uploadProfilePhoto } from "../../features/upload/services/upload.service";

function PhotoUpload() {
    const {
        control,
        setValue,
        formState: { errors },
    } = useFormContext<BiodataSchema>();

    const [uploading, setUploading] = useState(false);

    async function handlePhotoChange(
        file: File | null,
        onChange: (file: File | null) => void
    ) {
        onChange(file);

        if (!file) {
            setValue("profilePhotoUrl", "");
            return;
        }

        try {
            setUploading(true);

            const url = await uploadProfilePhoto(file);

            setValue("profilePhotoUrl", url, {
                shouldDirty: true,
                shouldValidate: true,
            });

        } catch (error) {
            console.error(error);

            setValue("profilePhotoUrl", "");

            alert("Failed to upload image.");
        } finally {
            setUploading(false);
        }
    }

    return (
        <div className="space-y-6">
            <SectionTitle
                title="Profile Photo"
                description="Upload a clear, high-quality profile picture for your marriage biodata."
            />

            <div className="mx-auto w-full max-w-md">
                {uploading && (
                    <div className="mb-4 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-center text-sm font-medium text-blue-700">
                        Uploading image...
                    </div>
                )}

                <Controller
                    name="profilePhoto"
                    control={control}
                    render={({ field }) => (
                        <ImageUpload
                            value={field.value ?? null}
                            onChange={(file) =>
                                handlePhotoChange(file, field.onChange)
                            }
                            error={errors.profilePhoto?.message}
                        />
                    )}
                />

                <p className="mt-4 text-center text-sm text-slate-500">
                    JPG, JPEG or PNG • Max size 5 MB
                </p>
            </div>
        </div>
    );
}

export default PhotoUpload;