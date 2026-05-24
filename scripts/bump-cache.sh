#!/usr/bin/env bash
set -euo pipefail

# Bump cache-busting version string trên các tag <link>/<script> dùng ?v=YYYYMMDD.
# Mặc định dùng ngày hôm nay; có thể truyền tay: ./bump-cache.sh 20260601

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
FILE="${ROOT}/index.html"
NEW_VER="${1:-$(date +%Y%m%d)}"

if [ ! -f "$FILE" ]; then
  echo "✗ Không tìm thấy $FILE"
  exit 1
fi

# Regex chỉ match ?v=<8 chữ số> → tránh đụng query string khác
MATCHES=$(grep -cE '\?v=[0-9]{8}' "$FILE" || true)
if [ "$MATCHES" -eq 0 ]; then
  echo "✗ Không có asset nào dạng ?v=YYYYMMDD trong index.html"
  exit 1
fi

# macOS sed cần '' sau -i; GNU sed thì không. Ưu tiên perl để chạy cross-platform.
perl -i -pe "s/\?v=\d{8}/?v=${NEW_VER}/g" "$FILE"

echo "✓ Bumped ${MATCHES} asset(s) → ?v=${NEW_VER}"
grep -nE '\?v=[0-9]{8}' "$FILE"
