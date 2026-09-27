from .retriever import get_relevant_documents
from .llm import get_llm


def ask_hr_policy(question):

    documents = get_relevant_documents(
        question,
        k=4
    )

    context = "\n\n".join(
        document.page_content
        for document in documents
    )

    prompt = f"""
        You are an HR Policy Assistant.

        Use the following HR policy information to answer the user's question.

        HR POLICY CONTEXT:

        {context}

        USER QUESTION:

        {question}

        Give a clear and concise answer.
        """

    llm = get_llm()

    response = llm.invoke(prompt)

    sources = []
    seen_pages = set()
    
    for document in documents:

        page = document.metadata.get(
            "page",
            0
        )

        page_number = page + 1

        if page_number not in seen_pages:

            sources.append({
                "document": "HR Policy Handbook",
                "page": page_number,
            })

            seen_pages.add(page_number)

    return {
        "answer": response.content,
        "sources": sources,
    }