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

                print("Launching browser")

                browser = await p.chromium.launch(
                    headless=True,
                )

                print("Browser launched")

                page = await browser.new_page()

                print("Page created")

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

                print("Opening URL...")

                await page.goto(
                    url,
                    wait_until="domcontentloaded",
                )

                print("DOM Loaded")

                print("Waiting for biodata to render...")

                await page.wait_for_selector(
                    "#pdf-ready",
                    timeout=30000,
                )

                print("Biodata rendered")

                await page.evaluate(
                    "() => document.fonts.ready"
                )

                print("Fonts loaded")

                print("Generating PDF")

                pdf = await page.pdf(
                    format="A4",
                    print_background=True,
                )

                print("PDF Generated")

                print("PDF Generated")

                print("PDF Generated")

                await browser.close()

                return BytesIO(pdf)

        except Exception:

            traceback.print_exc()

            raise