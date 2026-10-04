from pathlib import Path
from functools import lru_cache

from langchain_huggingface import HuggingFaceEmbeddings


BASE_DIR = Path(__file__).resolve().parent.parent.parent
EMBEDDING_CACHE_DIR = BASE_DIR / ".cache" / "huggingface"


@lru_cache(maxsize=1)
def get_embeddings():
    print("EMBEDDINGS: Loading model", flush=True)

    EMBEDDING_CACHE_DIR.mkdir(parents=True, exist_ok=True)

    embeddings = HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2",
        cache_folder=str(EMBEDDING_CACHE_DIR),
        model_kwargs={"device": "cpu"},
        encode_kwargs={"normalize_embeddings": True},
    )

    print("EMBEDDINGS: Model loaded", flush=True)

    return embeddings