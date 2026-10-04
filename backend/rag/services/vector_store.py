from pathlib import Path
from functools import lru_cache
from langchain_chroma import Chroma
from .embeddings import get_embeddings


BASE_DIR = Path(__file__).resolve().parent.parent.parent
CHROMA_DIR = BASE_DIR / "chroma_db"
COLLECTION_NAME = "hr_policy"


@lru_cache(maxsize=1)
def get_vector_store():
    if not CHROMA_DIR.exists():
        raise RuntimeError(
            f"Chroma index not found at {CHROMA_DIR}. "
            "Run `python manage.py ingest_policy` during deployment."
        )

    embeddings = get_embeddings()

    vector_store = Chroma(
        collection_name=COLLECTION_NAME,
        embedding_function=embeddings,
        persist_directory=str(CHROMA_DIR),
    )

    if vector_store._collection.count() == 0:
        raise RuntimeError(
            f"Chroma collection '{COLLECTION_NAME}' is empty. "
            "Run `python manage.py ingest_policy` during deployment."
        )

    return vector_store