import segno
from PIL import Image, ImageDraw

URL = "https://trinv1710.github.io/wedding/guest/24"
LOGO = "/Users/tri.nguyen/Project/wedding/resources/images/image11.jpg"
OUT = "/Users/tri.nguyen/Project/wedding/qr/guest24.png"
LOGO_RATIO = 0.22

qr = segno.make(URL, error="h")
qr.save(OUT, scale=10, border=2, dark="#631717", light="#ffffff")

base = Image.open(OUT).convert("RGBA")
W, H = base.size
logo_size = int(min(W, H) * LOGO_RATIO)

logo = Image.open(LOGO).convert("RGBA")
side = min(logo.size)
logo = logo.crop((
    (logo.size[0] - side) // 2,
    (logo.size[1] - side) // 2,
    (logo.size[0] + side) // 2,
    (logo.size[1] + side) // 2,
)).resize((logo_size, logo_size), Image.LANCZOS)

mask = Image.new("L", (logo_size, logo_size), 0)
ImageDraw.Draw(mask).ellipse((0, 0, logo_size, logo_size), fill=255)

pad = int(logo_size * 0.08)
bg_size = logo_size + pad * 2
bg = Image.new("RGBA", (bg_size, bg_size), (0, 0, 0, 0))
ImageDraw.Draw(bg).ellipse((0, 0, bg_size, bg_size), fill=(255, 255, 255, 255))

cx, cy = W // 2, H // 2
base.paste(bg, (cx - bg_size // 2, cy - bg_size // 2), bg)
base.paste(logo, (cx - logo_size // 2, cy - logo_size // 2), mask)
base.save(OUT)

print(f"Saved: {OUT}")
