from app.core.openai import client
from app.import_biodata.schemas import ImportedBiodata


SYSTEM_PROMPT = """
You are an expert at extracting information from Indian marriage biodatas.

Your task is to populate the provided schema.

Instructions:

- Extract only information present in the document.
- Never guess missing values.
- Use null for unavailable fields.
- Preserve names exactly as written.
- Convert age to an integer whenever possible.
- Preserve phone numbers exactly.
- Preserve email addresses exactly.
- Preserve annual income exactly as written.
- Return the schema only.
"""


class BiodataAIParser:

    @staticmethod
    async def parse(text: str) -> ImportedBiodata:

        response = await client.responses.parse(
            model="gpt-5.5",
            input=[
                {
                    "role": "system",
                    "content": SYSTEM_PROMPT,
                },
                {
                    "role": "user",
                    "content": text,
                },
            ],
            text_format=ImportedBiodata,
        )

        return response.output_parsed