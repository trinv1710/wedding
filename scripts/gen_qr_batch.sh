#!/usr/bin/env bash
set -euo pipefail

# ============================================
# CONFIG - chỉnh ở đây
# ============================================
START=231
END=241
BASE_URL="https://trinv1710.github.io/wedding/guest/"
OUT_DIR="$(cd "$(dirname "$0")/.." && pwd)/qr"
SIZE=1000
FILE_FORMAT="svg"          # svg | png
LOGO_HASH="25b3996d1290ae36398094132bb7bc9dd252db04.jpg"
BODY_COLOR="#000000"
BG_COLOR="#FFFFFF"
EYE_COLOR="#000000"
EYE_BALL_COLOR="#000000"
BODY_STYLE="square"        # square | dot | rounded | ...
EYE_STYLE="frame0"
EYE_BALL_STYLE="ball0"
LOGO_MODE="default"        # default | clean
SLEEP_BETWEEN=2
SKIP_EXISTING=true         # true: bỏ qua file đã có (resume sau khi bị rate-limit)
# ============================================

# CLI args override START/END nếu có
if [ $# -ge 2 ]; then
  START=$1
  END=$2
fi

mkdir -p "$OUT_DIR"

CONFIG_JSON=$(cat <<EOF
{"body":"${BODY_STYLE}","eye":"${EYE_STYLE}","eyeBall":"${EYE_BALL_STYLE}","erf1":[],"erf2":[],"erf3":[],"brf1":[],"brf2":[],"brf3":[],"bodyColor":"${BODY_COLOR}","bgColor":"${BG_COLOR}","eye1Color":"${EYE_COLOR}","eye2Color":"${EYE_COLOR}","eye3Color":"${EYE_COLOR}","eyeBall1Color":"${EYE_BALL_COLOR}","eyeBall2Color":"${EYE_BALL_COLOR}","eyeBall3Color":"${EYE_BALL_COLOR}","gradientColor1":"","gradientColor2":"","gradientType":"linear","gradientOnEyes":"true","logo":"${LOGO_HASH}","logoMode":"${LOGO_MODE}"}
EOF
)
CONFIG_ENC=$(python3 -c "import urllib.parse,sys; print(urllib.parse.quote(sys.stdin.read().strip(), safe=''))" <<< "$CONFIG_JSON")

echo "Range: ${START} → ${END}  |  Output: ${OUT_DIR}"

FAIL_COUNT=0
RATE_LIMITED=false

for i in $(seq "$START" "$END"); do
  OUT_FILE="${OUT_DIR}/guest${i}.${FILE_FORMAT}"

  if [ "$SKIP_EXISTING" = "true" ] && [ -f "$OUT_FILE" ]; then
    EXIST_SIZE=$(stat -f%z "$OUT_FILE" 2>/dev/null || stat -c%s "$OUT_FILE")
    if [ "$EXIST_SIZE" -gt 1000 ]; then
      echo "↷ guest${i}.${FILE_FORMAT}  skip (đã có, ${EXIST_SIZE} bytes)"
      continue
    fi
  fi

  DATA=$(python3 -c "import urllib.parse,sys; print(urllib.parse.quote(sys.argv[1], safe=''))" "${BASE_URL}${i}")
  URL="https://api.qrcode-monkey.com//qr/custom?download=true&file=${FILE_FORMAT}&data=${DATA}&size=${SIZE}&config=${CONFIG_ENC}"

  HTTP=$(curl -sL -o "$OUT_FILE" -w "%{http_code}" "$URL")
  FSIZE=$(stat -f%z "$OUT_FILE" 2>/dev/null || stat -c%s "$OUT_FILE")

  if [ "$HTTP" = "200" ] && [ "$FSIZE" -gt 1000 ]; then
    echo "✓ guest${i}.${FILE_FORMAT}  (${FSIZE} bytes)"
  else
    FAIL_COUNT=$((FAIL_COUNT + 1))
    if [ "$FSIZE" -lt 1000 ] && grep -q "Too many requests" "$OUT_FILE" 2>/dev/null; then
      RATE_LIMITED=true
      echo "✗ guest${i}.${FILE_FORMAT}  RATE-LIMITED — dừng để khỏi đốt tiếp"
      rm -f "$OUT_FILE"
      break
    else
      echo "✗ guest${i}.${FILE_FORMAT}  FAILED  http=${HTTP} size=${FSIZE}"
      rm -f "$OUT_FILE"
    fi
  fi

  sleep "$SLEEP_BETWEEN"
done

if [ "$RATE_LIMITED" = "true" ]; then
  echo ""
  echo "⚠  Bị rate limit. Đợi 30-60 phút rồi chạy lại — script sẽ skip file đã thành công."
fi

echo "Done."
