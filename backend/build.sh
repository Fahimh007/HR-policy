#!/usr/bin/env bash

set -o errexit

echo "Installing dependencies..."
python -m pip install -r requirements.txt

echo "Running migrations..."
python manage.py migrate

echo "Creating ChromaDB vector database..."
python manage.py ingest_policy

echo "Build completed successfully."