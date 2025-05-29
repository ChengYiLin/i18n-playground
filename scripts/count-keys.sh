#!/bin/sh
# Usage: ./count-keys.sh path/to/file.json

if [ $# -ne 1 ]; then
  echo "Usage: $0 path/to/file.json"
  exit 1
fi

if ! command -v jq >/dev/null 2>&1; then
  echo "Error: jq is required but not installed."
  exit 1
fi

jq 'map(length) | add // 0' "$1"
