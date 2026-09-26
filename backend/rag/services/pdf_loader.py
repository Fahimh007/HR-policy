import fitz


def load_pdf(pdf_path):
    """
    Extract text from every page of a PDF.
    Returns a list of dictionaries containing page number and text.
    """

    document = fitz.open(pdf_path)

    pages = []

    for page_number, page in enumerate(document, start=1):
        text = page.get_text("text")

        if text.strip():
            pages.append({
                "page_number": page_number,
                "text": text.strip(),
            })

    document.close()

    return pages