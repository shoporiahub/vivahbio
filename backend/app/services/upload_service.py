from fastapi import UploadFile, HTTPException
import cloudinary.uploader


async def upload_profile_photo(file: UploadFile) -> str:
    """
    Uploads a profile photo to Cloudinary and returns the secure URL.
    """

    # Read the uploaded file
    contents = await file.read()

    try:
        result = cloudinary.uploader.upload(
            contents,
            folder="doccraft/profile_photos",
            resource_type="image",
        )

        return result["secure_url"]

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Image upload failed: {str(e)}"
        )