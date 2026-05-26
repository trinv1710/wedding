#!/usr/bin/env bash
set -euo pipefail

# Bump cache-busting trên index.html:
#   ?v=YYYYMMDD     — CSS/JS
#   ?ogv=YYYYMMDD   — ảnh share (og:image, twitter:image)
#
# Cách dùng:
#   ./bump-cache.sh              → cả v và ogv = hôm nay
#   ./bump-cache.sh 20260601     → cả hai = 20260601
#   ./bump-cache.sh 20260601 20260602  → v=20260601, ogv=20260602

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
FILE="${ROOT}/index.html"
NEW_VER="${1:-$(date +%Y%m%d)}"
OG_VER="${2:-$NEW_VER}"

if [ ! -f "$FILE" ]; then
  echo "✗ Không tìm thấy $FILE"
  exit 1
fi

V_MATCHES=$(grep -cE '\?v=[0-9]{8}' "$FILE" || true)
OG_MATCHES=$(grep -cE '\?ogv=[0-9]{8}' "$FILE" || true)

if [ "$V_MATCHES" -eq 0 ] && [ "$OG_MATCHES" -eq 0 ]; then
  echo "✗ Không có ?v= hoặc ?ogv= YYYYMMDD trong index.html"
  exit 1
fi

perl -i -pe "s/\?v=\d{8}/?v=${NEW_VER}/g" "$FILE"
perl -i -pe "s/\?ogv=\d{8}/?ogv=${OG_VER}/g" "$FILE"

echo "✓ Assets ?v=${NEW_VER} (${V_MATCHES} tag)"
echo "✓ Share image ?ogv=${OG_VER} (${OG_MATCHES} tag)"
grep -nE '\?(v|ogv)=[0-9]{8}' "$FILE"
