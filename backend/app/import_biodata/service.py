from app.import_biodata.ai_parser import BiodataAIParser
from app.import_biodata.extractor import PDFExtractor


class ImportBiodataService:

    @staticmethod
    async def import_pdf(file_bytes: bytes):

        extracted_text = PDFExtractor.extract(file_bytes)

        biodata = await BiodataAIParser.parse(
            extracted_text
        )

        return biodata