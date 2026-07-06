# FUTURA — Midjourney promptovi za pozadine

## Strategija (pročitaj prije generisanja)

1. **Prvo generiši hero.** Radi varijacije dok ne dobiješ onu koja ti je "to je to".
2. **Nju koristi kao style reference za sve ostale**: dodaj `--sref <URL hero slike>`
   na kraj svakog sljedećeg prompta. Tako sve četiri pozadine izgledaju kao isti svijet,
   a mijenja se samo temperatura boje (plava → narandžasta).
3. **Omjer:** `--ar 16:9` za desktop. Ako želiš i mobilnu varijantu, generiši istu scenu
   sa `--ar 9:16` (CSS već koristi `background-position: center`, pa desktop verzija
   solidno radi i na mobilnom — mobilne varijante su opcionalne).
4. **Vrh i dno slike moraju biti tamni** — promptovi to već traže ("fading to near-black
   at top and bottom edges"). To omogućava bešavne prelaze između sekcija (CSS gradijent
   maskira šav). Ako generacija ispadne svijetla na rubovima, reroll ili koristi
   Editor → Pan da dodaš tamni prostor.
5. **Bez teksta i logotipa u slikama** — tipografija i znakovi su HTML/SVG na stranici.
   Ako Midjourney ubaci tekst, reroll ili ukloni u Editoru.

---

## 1. HERO — FUTURA (hladna plavo-bijela, monumentalno)

```
cinematic futuristic architectural cathedral interior, vast monumental dark space,
sweeping curved black metallic surfaces converging toward a single distant point of
bright white-blue light on the horizon, a thin vertical beam of light descending from
above, volumetric god rays, deep navy and charcoal palette, cold blue rim lighting on
curved edges, extreme sense of scale, empty center for typography, photorealistic
octane render, moody atmospheric haze, fading to near-black at top and bottom edges,
no people, no text --ar 16:9 --style raw --stylize 250
```

## 2. LUMINOR SOLUTIONS (hladna plava, tehnološki tok)

```
futuristic dark architectural landscape, smooth flowing curved obsidian surfaces like
frozen waves, thin electric blue light lines tracing the curves and edges, cool blue
ambient glow rising from below the horizon, dark stormy sky, deep blacks with sapphire
blue accents, elegant minimal composition with calm empty center, photorealistic
octane render, cinematic wide shot, atmospheric depth, fading to near-black at top and
bottom edges, no people, no text --ar 16:9 --style raw --stylize 250
--sref <URL_HERO_SLIKE>
```

## 3. TECHPLAY.GG (topla narandžasta, brzina i energija)

```
futuristic dark highway curving through monumental black architecture at night, long
exposure orange and amber light trails streaking along the road, warm orange glow on
the horizon behind dark hills, subtle cool blue counter-light on the left edge,
dynamic sense of speed and energy, deep blacks with ember orange accents, calm empty
center for typography, photorealistic octane render, cinematic wide shot, fading to
near-black at top and bottom edges, no people, no text --ar 16:9 --style raw
--stylize 250 --sref <URL_HERO_SLIKE>
```

## 4. FOOTER — THE FUTURA LLC (mirna, minimalna)

```
minimal dark abstract landscape, gentle curved black silk-like surfaces with faint
cool grey-blue sheen, very subtle soft light on the horizon line, calm and quiet
atmosphere, almost monochrome deep charcoal palette, large empty center, elegant
understated composition, photorealistic octane render, fading to near-black at top
and bottom edges, no people, no text --ar 16:9 --style raw --stylize 200
--sref <URL_HERO_SLIKE>
```

---

## Nakon generisanja — optimizacija (obavezno)

1. Upscale odabrane generacije u Midjourney-u.
2. Konvertuj u WebP i smanji težinu, cilj **≤ 300 KB po slici** (npr. [squoosh.app](https://squoosh.app),
   kvalitet ~75–80, širina 2560px je dovoljna).
3. Snimi u `public/img/` pod tačno ovim imenima:
   - `hero.webp`
   - `luminor.webp`
   - `techplay.webp`
   - `footer.webp`
4. Osvježi stranicu — slike se automatski pojavljuju ispod postojećih gradijenata,
   ništa u kodu ne treba mijenjati.
