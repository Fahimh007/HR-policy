from pathlib import Path
from django.core.management.base import BaseCommand
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter

from rag.services.vector_store import get_vector_store


class Command(BaseCommand):

    help = "Load HR policy PDF into ChromaDB"

    def handle(self, *args, **kwargs):

        base_dir = Path(__file__).resolve().parents[3]

        pdf_path = base_dir / "knowledge_base" / "HR_Policy_Handbook.pdf"

        if not pdf_path.exists():
            self.stdout.write(
                self.style.ERROR(
                    f"PDF not found: {pdf_path}"
                )
            )
            return

        self.stdout.write("Loading PDF...")

        loader = PyPDFLoader(str(pdf_path))

        documents = loader.load()

        self.stdout.write(
            f"Loaded {len(documents)} pages."
        )

        splitter = RecursiveCharacterTextSplitter(
            chunk_size=800,
            chunk_overlap=100,
        )

        chunks = splitter.split_documents(documents)

        self.stdout.write(
            f"Created {len(chunks)} chunks."
        )

        vector_store = get_vector_store(create_if_missing=True)

        vector_store.add_documents(chunks)

        self.stdout.write(
            self.style.SUCCESS(
                "HR policy successfully added to ChromaDB."
            )
        )