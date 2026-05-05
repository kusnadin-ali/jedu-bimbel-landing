# Jedu Bimbel — Design Documentation
> Dokumen referensi desain landing page untuk kebutuhan mockup, handoff, dan pengembangan lanjutan.

---

## 1. Brand Identity

| Atribut | Nilai |
|---|---|
| Nama | Jedu Bimbel |
| Tagline | Belajar Lebih Cerdas, Tumbuh Lebih Jauh |
| Jenjang | SD & SMP |
| Kurikulum | Cambridge International |
| Murid Aktif | 28 (bimbel rintisan) |
| Status | Baru dibuka · Kelas terbatas |

### Kepribadian Brand
- **Serius tapi hangat** — bukan bimbel korporat, tapi juga bukan asal-asalan
- **Rintisan yang percaya diri** — kecil tapi berstandar internasional
- **Terbuka & personal** — komunikasi langsung dengan orang tua
- **Berbeda** — satu-satunya yang pakai kurikulum Cambridge di area ini

---

## 2. Color Palette

```
--green:      #1a6b4a   → Warna utama brand, CTA, aksen heading
--green-mid:  #2a8a62   → Hover state, italic accent
--green-lt:   #e8f5ee   → Background card, chip tag
--green-xlt:  #f2faf5   → Background section tipis

--amber:      #f0a500   → Aksen pembeda, highlight, dot badge
--amber-lt:   #fff8e6   → Background pill hero

--ink:        #111c14   → Warna teks utama
--ink-mid:    #3d5244   → Subheading, teks medium
--ink-soft:   #6a7f70   → Body text, deskripsi, label

--white:      #ffffff   → Background utama
--off:        #f7faf8   → Background section alternatif
```

### Penggunaan Warna
- **Hijau gelap (#1a6b4a)** → navbar, tombol CTA utama, thead tabel, CTA section background
- **Amber (#f0a500)** → aksen garis eyebrow, dot animasi, highlight underline judul, tombol submit form
- **Off-white (#f7faf8)** → background section program, jadwal
- **Ink (#111c14)** → background footer, Cambridge spotlight section

---

## 3. Typography

```
Display / Heading  : Fraunces (serif, Google Fonts)
                     weight: 700, 900 | style: italic tersedia
                     
Body / UI          : Plus Jakarta Sans (sans-serif, Google Fonts)
                     weight: 300, 400, 500, 600
```

### Skala Font

| Elemen | Font | Size | Weight |
|---|---|---|---|
| H1 Hero | Fraunces | clamp(2.6rem, 4.5vw, 4.2rem) | 900 |
| H2 Section | Fraunces | clamp(1.9rem, 3vw, 2.8rem) | 700 |
| H3 Card | Fraunces | 1rem – 1.15rem | 700 |
| Eyebrow Label | Plus Jakarta Sans | 0.72rem | 600 |
| Body | Plus Jakarta Sans | 0.95rem – 1.02rem | 300–400 |
| Caption / Tag | Plus Jakarta Sans | 0.72rem – 0.78rem | 500–600 |
| Nav Link | Plus Jakarta Sans | 0.88rem | 500 |

### Aturan Typography
- Judul utama selalu pakai **Fraunces** — berikan efek serif yang berkarakter
- Italic pada heading (`<em>`) menggunakan warna `--green-mid` sebagai aksen
- Kata kunci penting di hero diberi **underline highlight amber** (pseudo-element)
- Body text selalu `font-weight: 300` untuk kesan ringan dan mudah dibaca

---

## 4. Layout & Grid

```
Max-width container : 1160px, margin auto
Padding section     : 5.5rem 6% (desktop), 4rem 5% (mobile)
Nav height          : 68px (fixed)
Border radius card  : 14px – 24px
Gap grid            : 1.4rem – 5rem
```

### Grid per Section

| Section | Layout |
|---|---|
| Hero | 2-kolom (1.1fr 0.9fr), align center |
| Program | 3-kolom + 1 card span-2 untuk Matematika |
| Cambridge Spotlight | 2-kolom di dalam card gelap |
| Keunggulan | 2-kolom sticky-left (1fr 1fr) |
| Jadwal | Full-width table di dalam card |
| CTA / Daftar | 2-kolom di dalam rounded box |
| Footer | Flex space-between |

---

## 5. Component Inventory

### 5.1 Navbar
- Fixed top, `backdrop-filter: blur(12px)`
- Logo mark: kotak hijau 36×36px, huruf "J", Fraunces
- Brand name: "Jedu **Bimbel**" — Bimbel berwarna hijau
- Nav links: 5 anchor scroll
- CTA button: pill `border-radius: 100px`, background hijau

### 5.2 Hero
- **Pill badge** — amber background, animated pulsing dot
- **H1** — 3 baris, kata "Cerdas" italic hijau, kata "Jauh" dengan underline amber
- **Deskripsi** — menyebut Cambridge secara eksplisit di paragraph pertama
- **2 tombol** — primary (hijau solid) + ghost (outline hijau)
- **Trust bar** — 3 stat: `28 murid`, `SD–SMP`, `Cambridge`
- **Visual card kanan** — Cambridge card dengan 4 subject + progress bar + footer badge
- **Floating badge** — animasi floatY, menyebut "Satu-satunya di sini"
- **Decorative shapes** — lingkaran outline berputar, kotak amber melayang

### 5.3 Program Cards
- Icon emoji + badge tag di pojok kanan
- Title (Fraunces) + deskripsi
- Chip tags untuk sub-materi
- Label jenjang di bawah dengan ikon 📚
- **Featured card** (IPA): background hijau gelap, teks putih
- **Matematika card**: `grid-column: span 2` — lebih lebar

### 5.4 Cambridge Spotlight
- Background `--ink` (hitam kehijauan)
- Radial gradient dekoratif di kanan atas
- Kiri: eyebrow amber + headline putih + deskripsi
- Kanan: 4 cs-point card dengan dot amber

### 5.5 Keunggulan Cards (why-card)
- Layout flex: icon square + teks
- Background `--off` default, hover → `--white` + border hijau tipis
- Icon dalam box putih dengan shadow tipis
- 5 poin keunggulan — disesuaikan konteks bimbel rintisan

### 5.6 Jadwal Table
- `thead` background hijau, teks putih
- Row alternating: baris genap `--off`
- Row hover: `--green-lt`
- Level badge per baris: color-coded per jenjang

### 5.7 CTA / Form Section
- Background `--green` (full hijau)
- 2 dekorasi circle pseudo-element
- Kiri: eyebrow + headline italic amber + deskripsi
- Kanan: form card (rgba putih) + tombol WA secondary
- Input field: border `rgba(putih,0.2)`, focus → amber
- Submit button: amber, hover → scale + shadow

---

## 6. Motion & Animation

| Animasi | Element | Properti |
|---|---|---|
| `fadeUp` | Hero content (staggered) | opacity + translateY, delay 0.1–0.4s |
| `floatY` | Floating badge, kotak amber | translateY ±10px, 3.5s ease-in-out infinite |
| `spin` | Lingkaran outline dekoratif | rotate 360°, 24s linear infinite |
| `pulse` | Dot pada pill badge | opacity + scale, 2s ease-in-out infinite |
| Hover card | prog-card, why-card | translateY(-5px) + box-shadow |
| Hover button | .btn-main, .nav-cta | translateY(-2px) + box-shadow hijau |

---

## 7. AI Mockup Prompts

### Full Landing Page Overview
```
Flat design website mockup for a tutoring center called "Jedu Bimbel",
clean and modern educational landing page, green (#1a6b4a) and amber (#f0a500) 
color palette, Fraunces serif display font for headings, Plus Jakarta Sans for body,
no photos only illustrations and UI components,
sections visible: hero with tagline, program cards (Calistung, Bahasa Indonesia, 
IPA, Matematika, Cambridge curriculum highlight), why us section, 
schedule table, registration form, dark footer.
Desktop browser frame. Professional UI/UX design.
Figma-style mockup, white background.
```

### Hero Section
```
Website hero section mockup, tutoring center "Jedu Bimbel",
green (#1a6b4a) and amber color scheme, serif bold headline
"Belajar Lebih Cerdas, Tumbuh Lebih Jauh", amber pill badge top-left,
3 stat counters at bottom (28 murid, SD-SMP, Cambridge),
right side floating card showing subject list with progress bars,
light off-white background, floating decorative circle outline,
clean modern UI, no photos, Figma style.
```

### Program Cards Section
```
Website program cards UI mockup, 3-column grid layout, 
tutoring subject cards for Calistung, Bahasa Indonesia, IPA, Matematika,
each card has emoji icon, badge tag, serif title, description, chip tags, 
jenjang label at bottom, green and white color scheme,
one featured card (IPA) in dark green with white text,
Matematika card spans 2 columns wider,
below cards: dark section "Cambridge Spotlight" two-column layout,
clean minimal design, no photos.
```

### Cambridge Spotlight Section
```
Dark green (#111c14) website section UI mockup, Cambridge International 
curriculum highlight banner, two-column layout,
left side: small amber eyebrow text, bold white serif headline 
"Satu-satunya Bimbel dengan Kurikulum Cambridge", white body text,
right side: 4 feature bullet point cards with amber dot, dark card background,
premium educational brand feel, no photos, Figma UI design style.
```

### Why Us + Stats Section
```
Website "why us" section mockup, two-column layout, 
left column: sticky card with section title, 4 green stat boxes in 2x2 grid 
showing (28, Kecil, SD-SMP, Global),
right column: 5 feature cards stacked vertically, each with square icon 
and text, light hover state, green and white color scheme,
Plus Jakarta Sans body font, Fraunces serif headings, clean UI.
```

### CTA / Registration Section
```
Website CTA section mockup, full green (#1a6b4a) background rounded box,
two-column layout inside, left: white serif headline with amber italic word,
white subdescription text, decorative circle overlays,
right: semi-transparent form card with text inputs, dropdown selects, 
amber submit button, secondary WhatsApp button below,
premium educational website design, no photos.
```

### Recommended Tools
| Tool | Keunggulan | Cocok untuk |
|---|---|---|
| **Ideogram.ai** | Teks paling terbaca di mockup | Full page overview, section detail |
| **Midjourney v6** | Visual paling estetik | Mood & aesthetic reference |
| **DALL·E 3** | Mudah diakses via ChatGPT | Quick iteration, layout overview |
| **Figma + AI Plugin** | Paling akurat untuk handoff | Production-ready mockup |

---

## 8. Responsive Breakpoints

```
< 960px  : Hero jadi 1 kolom, cambridge-card disembunyikan,
           programs-grid jadi 1 kolom, nav-links disembunyikan,
           cta-box jadi 1 kolom, why-layout jadi 1 kolom

< 640px  : Padding dikurangi, hero-trust gap lebih kecil,
           why-stat-pair tetap 2 kolom
```

---

## 9. Section Order

```
1. Navbar          — Fixed, selalu tampil
2. Hero            — Full viewport height
3. Program         — Kelima program + Cambridge Spotlight
4. Keunggulan      — 5 why-card + stat
5. Jadwal          — Tabel per hari
6. CTA / Daftar    — Form pendaftaran + WhatsApp
7. Footer          — Minimal, brand + copyright
```

---

## 10. Catatan Konten

- **Tidak ada seksi Testimoni** — karena bimbel masih rintisan, belum ada testimoni
- **Angka 28 murid** dipakai sebagai social proof yang jujur dan terbuka
- **Bimbel rintisan** diposisikan sebagai keunggulan (kelas kecil, perhatian penuh, pendiri terlibat langsung) — bukan kelemahan
- **Cambridge** selalu disebut sebagai pembeda utama di hero, program, spotlight, dan keunggulan
- **Nomor WhatsApp** perlu diganti dengan nomor asli sebelum publish
- **Alamat** belum dimasukkan — perlu ditambahkan di footer atau seksi kontak

---

*Dokumen ini dibuat sebagai referensi desain landing page jedu-bimbel.html*