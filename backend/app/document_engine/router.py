from fastapi import APIRouter, Depends
from fastapi.responses import StreamingResponse
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy.orm import Session

from app.auth.dependencies import get_current_user
from app.biodata.service import BiodataService
from app.core.database import get_db
from app.models.user import User

from .schemas import GeneratePdfRequest
from .service import DocumentEngineService

security = HTTPBearer()

router = APIRouter(
    prefix="/document",
    tags=["Document Engine"],
)


@router.post("/pdf")
async def generate_pdf(
    request: GeneratePdfRequest,
    credentials: HTTPAuthorizationCredentials = Depends(security),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    biodata_service = BiodataService(db)

    biodata = biodata_service.get_my_biodata(current_user)

    service = DocumentEngineService()

    pdf = await service.generate_pdf(
        template=request.template,
        token=credentials.credentials,
    )

    filename = "VivahCraft_Biodata.pdf"

    if biodata and biodata.full_name:
        safe_name = (
            biodata.full_name.strip()
            .replace(" ", "_")
        )

        filename = f"{safe_name}_Biodata.pdf"

    return StreamingResponse(
        pdf,
        media_type="application/pdf",
        headers={
            "Content-Disposition": f'attachment; filename="{filename}"'
        },
    )