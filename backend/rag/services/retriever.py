from .vector_store import get_vector_store


def get_relevant_documents(question, k=4):

    vector_store = get_vector_store()

    documents = vector_store.similarity_search(
        question,
        k=k
    )

    return documents