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

            console.log("Uploaded URL:", url);
        } catch (error) {
            console.error(error);

            setValue("profilePhotoUrl", "");

            alert("Failed to upload image.");
        } finally {
            setUploading(false);
        }
    }

    return (
        <>
            <SectionTitle
                title="Profile Photo"
                description="Upload a clear profile picture for your biodata."
            />

            {uploading && (
                <p className="mb-4 text-blue-600">
                    Uploading image...
                </p>
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
        </>
    );
}

export default PhotoUpload;