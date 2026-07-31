from io import BytesIO
import traceback

from playwright.async_api import async_playwright

from app.core.config import settings


class DocumentEngineService:

    async def generate_pdf(
        self,
        template: str,
        token: str,
    ):

        try:

            url = (
                f"{settings.FRONTEND_URL}"
                f"/print?template={template}"
            )

            print("PDF URL:", url)

            async with async_playwright() as p:

                browser = await p.chromium.launch(
                    headless=True,
                )

                page = await browser.new_page()

                await page.add_init_script(
                    f"""
                    localStorage.setItem(
                        "access_token",
                        "{token}"
                    );
                    """
                )

                page.on("console", lambda msg: print("[BROWSER]", msg.text))
                page.on("pageerror", lambda err: print("[PAGE ERROR]", err))
                page.on("requestfailed", lambda req: print("[REQUEST FAILED]", req.url))

                await page.goto(
                    url,
                    wait_until="networkidle",
                )

                print("Page Loaded")

                pdf = await page.pdf(
                    format="A4",
                    print_background=True,
                )

                print("PDF Generated")

                await browser.close()

                return BytesIO(pdf)

        except Exception:

            traceback.print_exc()

            raise