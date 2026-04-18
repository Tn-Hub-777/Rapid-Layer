from pathlib import Path

from pypdf import PdfReader, PdfWriter, Transformation
from pypdf._page import PageObject
from reportlab.lib.pagesizes import landscape, A4


SOURCE = Path(r"C:\Users\tn220\Downloads\RapidLayer.pdf")
OUTPUT = Path(r"C:\Users\tn220\Desktop\A\pics\outputs\rapidlayer\RapidLayer_landscape_fit.pdf")

# Keep a small safe margin so content prints cleanly and never touches the edge.
MARGIN = 18
PAGE_WIDTH, PAGE_HEIGHT = landscape(A4)


def main() -> None:
    reader = PdfReader(str(SOURCE))
    writer = PdfWriter()

    for page in reader.pages:
        src_width = float(page.mediabox.width)
        src_height = float(page.mediabox.height)
        scale = min(
            (PAGE_WIDTH - 2 * MARGIN) / src_width,
            (PAGE_HEIGHT - 2 * MARGIN) / src_height,
        )
        fitted_width = src_width * scale
        fitted_height = src_height * scale
        translate_x = (PAGE_WIDTH - fitted_width) / 2
        translate_y = (PAGE_HEIGHT - fitted_height) / 2

        target = PageObject.create_blank_page(
            width=PAGE_WIDTH,
            height=PAGE_HEIGHT,
        )
        target.merge_transformed_page(
            page,
            Transformation()
            .scale(scale, scale)
            .translate(translate_x, translate_y),
        )
        writer.add_page(target)

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with OUTPUT.open("wb") as fh:
        writer.write(fh)


if __name__ == "__main__":
    main()
