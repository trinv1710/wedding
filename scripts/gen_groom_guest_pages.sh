#!/usr/bin/env bash
set -euo pipefail

# Sinh guest/99 … guest/299/index.html từ groom.html (meta 13.06, thiệp nhà trai).
# Chạy lại sau mỗi lần sửa groom.html:
#   ./scripts/gen_groom_guest_pages.sh
#
# Tùy chọn: GROOM_FROM=100 GROOM_TO=150 ./scripts/gen_groom_guest_pages.sh

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
export ROOT
export GROOM_FROM="${GROOM_FROM:-99}"
export GROOM_TO="${GROOM_TO:-299}"
# Các id nằm trong range nhà trai nhưng thực tế là nhà gái (đồng bộ với BRIDE_SIDE_OVERRIDES trong js/script.js).
export BRIDE_SIDE_OVERRIDES="${BRIDE_SIDE_OVERRIDES:-217}"

python3 <<'PY'
import os
import re
from pathlib import Path

root = Path(os.environ["ROOT"])
groom_from = int(os.environ["GROOM_FROM"])
groom_to = int(os.environ["GROOM_TO"])
bride_overrides = {s.strip() for s in os.environ.get("BRIDE_SIDE_OVERRIDES", "").split(",") if s.strip()}
site_base = "https://trinv1710.github.io/wedding"
base_href = f"{site_base}/"

groom_path = root / "groom.html"
index_path = root / "index.html"
if not groom_path.is_file():
    raise SystemExit(f"✗ Missing {groom_path}")

template = groom_path.read_text(encoding="utf-8")

index_html = index_path.read_text(encoding="utf-8") if index_path.is_file() else ""
m_v = re.search(r"\?v=(\d+)", index_html)
m_og = re.search(r"\?ogv=(\d+)", index_html)
if m_v:
    template = re.sub(r"\?v=\d+", f"?v={m_v.group(1)}", template)
if m_og:
    template = re.sub(r"\?ogv=\d+", f"?ogv={m_og.group(1)}", template)

def with_base(html: str) -> str:
    if "<base " in html:
        return html
    return html.replace("<head>", f'<head>\n  <base href="{base_href}">', 1)

groom_canonical = f"{site_base}/groom.html"
count = 0
for n in range(groom_from, groom_to + 1):
    guest_id = str(n)
    if guest_id in bride_overrides:
        continue
    guest_url = f"{site_base}/guest/{guest_id}/"
    html = template
    html = html.replace(
        f'<link rel="canonical" href="{groom_canonical}">',
        f'<link rel="canonical" href="{guest_url}">',
    )
    html = html.replace(
        f'<meta property="og:url" content="{groom_canonical}">',
        f'<meta property="og:url" content="{guest_url}">',
    )
    html = with_base(html)
    out_dir = root / "guest" / guest_id
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "index.html").write_text(html, encoding="utf-8")
    count += 1

print(f"✓ Generated {count} groom guest pages (ids {groom_from}–{groom_to})")
print(f"  Meta: 13.06.2026 | Example: {site_base}/guest/99/")
PY
