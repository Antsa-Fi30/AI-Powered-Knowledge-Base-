from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import DocumentsSerializer
from .models import Document


# Create your views here.
class DocumentsViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentsSerializer


class FileUploadView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = DocumentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
