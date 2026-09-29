from pathlib import Path
from functools import lru_cache

from langchain_chroma import Chroma

from .embeddings import get_embeddings


BASE_DIR = Path(__file__).resolve().parent.parent.parent

CHROMA_DIR = BASE_DIR / "chroma_db"

COLLECTION_NAME = "hr_policy"


@lru_cache(maxsize=1)
def get_vector_store():
    embeddings = get_embeddings()

    vector_store = Chroma(
        collection_name=COLLECTION_NAME,
        embedding_function=embeddings,
        persist_directory=str(CHROMA_DIR),
    )

    return vector_store