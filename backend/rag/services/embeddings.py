from pathlib import Path
from functools import lru_cache
import os

from langchain_huggingface import HuggingFaceEndpointEmbeddings

BASE_DIR = Path(__file__).resolve().parent.parent.parent
EMBEDDING_CACHE_DIR = BASE_DIR / ".cache" / "huggingface"

@lru_cache(maxsize=1)
def get_embeddings():
    print("EMBEDDINGS: Loading model via Hugging Face Inference API", flush=True)

    # Note: Requires HUGGINGFACEHUB_API_TOKEN in your environment variables
    embeddings = HuggingFaceEndpointEmbeddings(
        model="sentence-transformers/all-MiniLM-L6-v2",
        task="feature-extraction",
        huggingfacehub_api_token=os.environ.get("HUGGINGFACEHUB_API_TOKEN")
    )

    print("EMBEDDINGS: Model loaded via API", flush=True)

    return embeddings