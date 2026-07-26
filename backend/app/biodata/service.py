from sqlalchemy.orm import Session

from app.models.biodata import Biodata
from app.models.user import User

from .schemas import BiodataCreate


class BiodataService:
    def __init__(self, db: Session):
        self.db = db

    def get_my_biodata(
        self,
        user: User,
    ) -> Biodata | None:

        return (
            self.db.query(Biodata)
            .filter(Biodata.user_id == user.id)
            .first()
        )

    def create_or_update_biodata(
        self,
        user: User,
        biodata_data: BiodataCreate,
    ) -> Biodata:

        biodata = (
            self.db.query(Biodata)
            .filter(Biodata.user_id == user.id)
            .first()
        )

        if biodata is None:

            biodata = Biodata(
                user_id=user.id,
                **biodata_data.model_dump(),
            )

            self.db.add(biodata)

        else:

            for key, value in biodata_data.model_dump().items():
                setattr(biodata, key, value)

        self.db.commit()
        self.db.refresh(biodata)

        return biodata