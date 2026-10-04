from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .services.rag_pipeline import ask_hr_policy


class ChatView(APIView):

    def post(self, request):
        print("CHAT REQUEST RECEIVED", flush=True)

        question = request.data.get("question")
        print("CHAT REQUEST PARSED", flush=True)

        if not question:
            return Response(
                {
                    "error": "Question is required."
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        try:

            result = ask_hr_policy(question)

            return Response(
                result,
                status=status.HTTP_200_OK
            )

        except Exception as e:

            return Response(
                {
                    "error": str(e)
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )