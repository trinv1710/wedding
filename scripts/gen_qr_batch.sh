#!/usr/bin/env bash
set -euo pipefail

# ============================================
# CONFIG - chỉnh ở đây
# ============================================
START=130
END=241
BASE_URL="https://trinv1710.github.io/wedding/?guest="
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
SLEEP_BETWEEN=0.3
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

for i in $(seq "$START" "$END"); do
  OUT_FILE="${OUT_DIR}/guest${i}.${FILE_FORMAT}"
  DATA=$(python3 -c "import urllib.parse,sys; print(urllib.parse.quote(sys.argv[1], safe=''))" "${BASE_URL}${i}")
  URL="https://api.qrcode-monkey.com//qr/custom?download=true&file=${FILE_FORMAT}&data=${DATA}&size=${SIZE}&config=${CONFIG_ENC}"

  HTTP=$(curl -sL -o "$OUT_FILE" -w "%{http_code}" "$URL")
  FSIZE=$(stat -f%z "$OUT_FILE" 2>/dev/null || stat -c%s "$OUT_FILE")

  if [ "$HTTP" = "200" ] && [ "$FSIZE" -gt 1000 ]; then
    echo "✓ guest${i}.${FILE_FORMAT}  (${FSIZE} bytes)"
  else
    echo "✗ guest${i}.${FILE_FORMAT}  FAILED  http=${HTTP} size=${FSIZE}"
  fi

  sleep "$SLEEP_BETWEEN"
done

echo "Done."
