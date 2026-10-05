from .vector_store import get_vector_store


def get_relevant_documents(question, k=4):

    print("STEP 2: Loading vector store", flush=True)
    vector_store = get_vector_store()
    print("STEP 3: Vector store loaded", flush=True)

    print("STEP 4: Starting retrieval", flush=True)
    documents = vector_store.similarity_search(
        question,
        k=k
    )

    print("STEP 5: Retrieval completed", flush=True)

    return documents