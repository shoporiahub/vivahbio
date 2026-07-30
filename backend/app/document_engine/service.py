from io import BytesIO

from playwright.async_api import async_playwright

from app.core.config import settings


class DocumentEngineService:

    async def generate_pdf(
        self,
        template: str,
        token: str,
    ):

        url = (
            f"{settings.FRONTEND_URL}"
            f"/print?template={template}"
        )

        async with async_playwright() as p:

            browser = await p.chromium.launch(
                headless=True,
            )

            page = await browser.new_page()

            # Inject JWT before the React app loads
            await page.add_init_script(
                f"""
                localStorage.setItem(
                    "access_token",
                    "{token}"
                );
                """
            )

            page.on("console", lambda msg: print(f"[BROWSER] {msg.text}"))      
            page.on("pageerror", lambda err: print(f"[PAGE ERROR] {err}"))
            page.on("requestfailed", lambda req: print(f"[REQUEST FAILED] {req.url}"))

            await page.goto(
                url,
                wait_until="networkidle",
            )

            pdf = await page.pdf(
                format="A4",
                print_background=True,
            )

            await browser.close()

        return BytesIO(pdf)