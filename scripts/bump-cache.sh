#!/usr/bin/env bash
set -euo pipefail

# Bump cache-busting trên index.html:
#   ?v=YYYYMMDDHHmm     — CSS/JS
#   ?ogv=YYYYMMDDHHmm   — ảnh share (og:image, twitter:image)
#
# Cách dùng:
#   ./bump-cache.sh              → cả v và ogv = timestamp hiện tại
#   ./bump-cache.sh 202606011200 → cả hai = 202606011200

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
FILE="${ROOT}/index.html"
NEW_VER="${1:-$(date +%Y%m%d%H%M)}"
OG_VER="${2:-$NEW_VER}"

if [ ! -f "$FILE" ]; then
  echo "✗ Không tìm thấy $FILE"
  exit 1
fi

V_MATCHES=$(grep -cE '\?v=[0-9]+' "$FILE" || true)
OG_MATCHES=$(grep -cE '\?ogv=[0-9]+' "$FILE" || true)

if [ "$V_MATCHES" -eq 0 ] && [ "$OG_MATCHES" -eq 0 ]; then
  echo "✗ Không có ?v= hoặc ?ogv= trong index.html"
  exit 1
fi

perl -i -pe "s/\?v=\d+/?v=${NEW_VER}/g" "$FILE"
perl -i -pe "s/\?ogv=\d+/?ogv=${OG_VER}/g" "$FILE"

echo "✓ Assets ?v=${NEW_VER} (${V_MATCHES} tag)"
echo "✓ Share image ?ogv=${OG_VER} (${OG_MATCHES} tag)"
grep -nE '\?(v|ogv)=[0-9]+' "$FILE"
