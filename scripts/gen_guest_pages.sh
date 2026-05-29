#!/usr/bin/env bash
set -euo pipefail

# Sinh guest/N/index.html (HTTP 200) từ index.html — Messenger giữ path /guest/N.
# Chạy lại sau mỗi lần sửa index.html: ./scripts/gen_guest_pages.sh

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
export ROOT
# Các id nằm trong range nhà trai nhưng thực tế là nhà gái (đồng bộ với BRIDE_SIDE_OVERRIDES trong js/script.js).
export BRIDE_SIDE_OVERRIDES="${BRIDE_SIDE_OVERRIDES:-217}"

python3 <<'PY'
import os
import re
from pathlib import Path

root = Path(os.environ["ROOT"])
index_path = root / "index.html"
script_path = root / "js" / "script.js"
site_base = "https://trinv1710.github.io/wedding"
base_href = f"{site_base}/"
bride_overrides = {s.strip() for s in os.environ.get("BRIDE_SIDE_OVERRIDES", "").split(",") if s.strip()}

index_html = index_path.read_text(encoding="utf-8")
if "<base " not in index_html:
    index_html = index_html.replace(
        "<head>",
        f'<head>\n  <base href="{base_href}">',
        1,
    )

guest_ids = sorted(
    {m.group(1) for m in re.finditer(r"'(\d+)':", script_path.read_text(encoding="utf-8"))},
    key=int,
)

for guest_id in guest_ids:
    if 99 <= int(guest_id) <= 299 and guest_id not in bride_overrides:
        continue  # nhà trai: ./scripts/gen_groom_guest_pages.sh
    guest_url = f"{site_base}/guest/{guest_id}/"
    html = index_html
    html = html.replace(
        'property="og:url" content="https://trinv1710.github.io/wedding/"',
        f'property="og:url" content="{guest_url}"',
    )
    html = html.replace(
        'rel="canonical" href="https://trinv1710.github.io/wedding/"',
        f'rel="canonical" href="{guest_url}"',
    )
    out_dir = root / "guest" / guest_id
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "index.html").write_text(html, encoding="utf-8")

bride_count = sum(1 for g in guest_ids if not (99 <= int(g) <= 299) or g in bride_overrides)
print(f"✓ Generated {bride_count} bride pages (skipped 99–299 → gen_groom_guest_pages.sh; overrides: {sorted(bride_overrides) or 'none'})")
print(f"  Example: {site_base}/guest/1/")
PY
