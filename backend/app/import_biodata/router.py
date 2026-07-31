from fastapi import APIRouter, UploadFile, File, HTTPException

from app.import_biodata.service import ImportBiodataService

router = APIRouter(
    prefix="/biodata/import",
    tags=["Import Biodata"],
)


@router.post("")
async def import_biodata(
    file: UploadFile = File(...)
):

    if file.content_type != "application/pdf":
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are supported for now."
        )

    file_bytes = await file.read()

    biodata = await ImportBiodataService.import_pdf(
        file_bytes
    )

    return biodata