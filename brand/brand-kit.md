# Csharptek visual identity proposal

**Version:** 1.0 · **Purpose:** Growth OS website and digital content

## Brand idea

**Connected engineering. Real-world momentum.** Csharptek helps established teams connect AI, products, workflows and cloud systems so important technology can move from initiative to dependable operation.

The identity should feel technically capable, calm and direct. The existing Csharptek logo is the anchor: preserve its flowing C mark and cyan-to-deep-teal tones. Build the supporting palette around that mark, with a restrained green accent to signal forward movement.

## Signature visual motif: the Connected C

Carry the logo’s sweeping curve into the site as a continuous cyan/teal path that bends around distinct parts of a workflow and reconnects them. Keep the path clean and graphic, like a precise ribbon drawn through a real system. Use it across hero art, small diagrams and image crops so the site has a recognizable visual signature.

Avoid generic glowing cubes, floating dashboards, stock neural networks, and anonymous “AI brain” imagery. Give each image a concrete subject from its page while keeping the Connected C motif as a subtle shared thread.

## Color palette

| Token | Hex | Use |
| --- | --- | --- |
| Midnight | `#10262D` | Main text, dark sections, navigation |
| Deep teal | `#064559` | Dark hero backgrounds and technical panels |
| Csharptek teal | `#007F95` | Primary links, buttons, active states |
| Signal cyan | `#24B8DD` | Logo echo, diagrams, small highlights |
| Growth green | `#A9C96A` | Small emphasis, status and progress cues |
| Mist | `#E8F3F3` | Soft section backgrounds and image framing |
| Warm white | `#F5F7F4` | Main page background |
| White | `#FFFFFF` | Cards and reversed text |
| Slate | `#5D7077` | Supporting body text |

Use teal for primary actions. Use cyan and green as accents; avoid filling large areas with saturated colors. Keep dark text on warm white or mist, and white text on midnight or deep teal.

## Typography

- **Headings:** Manrope, 600–750 weight; compact and confident, without overly tight tracking at small sizes.
- **Body and UI:** DM Sans, 400–600 weight; readable at 16px or larger for primary paragraphs.
- **Fallbacks:** `Arial, sans-serif`.

The current site already loads Manrope and DM Sans. Keep this pairing to maintain continuity and avoid another font dependency.

## Image direction

- Prefer editorial photography, tactile paper/metal/glass details, diagram-like compositions and clear space for page copy.
- Use the Connected C ribbon to tie systems and people together; do not add a 3D cube network just to signify AI.
- Use cyan/teal with limited green highlights, set against warm white or deep teal.
- Show connected systems through real visual metaphors: data paths, modular interfaces, abstract network structures, and human-scale work environments.
- Case-study art is illustrative. Do not show client logos, readable fake dashboards, fabricated figures, or imply that an invented screen is a client deliverable.
- About imagery should be a generic engineering/workspace scene unless Csharptek supplies real team photographs. Never generate a likeness of a named employee.
- Add alt text that describes the actual image and its page context. Decorative background art gets empty alt text.

## Image sizes and crops

Generate source artwork at the closest available landscape or square aspect ratio, then make responsive crops from the approved master. Keep focal subjects near the center-safe area.

| Placement | Source target | Delivering behavior |
| --- | --- | --- |
| Hero | 2400 × 1350, 16:9 | Wide desktop crop; centered 4:5 mobile crop |
| Service and solution panels | 1600 × 1200, 4:3 | 800 × 600 and 400 × 300 responsive derivatives |
| Case-study cards | 1600 × 1200, 4:3 | Consistent crop across all twelve stories |
| About/editorial scene | 4:3 source master | Crop responsively to a 3:2 editorial frame where needed |
| Social tile | 1200 × 1200, 1:1 | Keep subjects and any optional overlay inside a 10% safe margin |
| Article cover | 1600 × 900, 16:9 | 800 × 450 responsive derivative |

Use AVIF/WebP delivery with a JPEG or PNG source retained for future edits. Avoid enlarging a small crop to fill a hero.

## Motion

- Keep motion brief and tied to interaction: 180–260ms card/button hover response, small 2–4px elevation, and a soft color shift.
- Let one hero illustration carry ambient motion, such as a slowly moving light or gently pulsing connection nodes.
- If content reveals on scroll, reveal only once and fail open so all text remains visible without JavaScript.
- Respect `prefers-reduced-motion`; remove decorative motion and transforms for visitors who request reduced motion.
- No autoplay video, continuous parallax, flashing, or motion that delays reading or navigation.

## UI details

- Rounded corners: 6–12px for cards and controls; reserve larger radii for editorial image panels.
- Borders: subtle cool teal-gray; shadows soft and broad, never glossy.
- Buttons: solid Csharptek teal for primary actions, outlined teal for secondary actions, minimum 44px touch target.
- Icons: retain the existing simple line/icon style and use cyan only for active or illustrative emphasis.

## Asset library

The 37-image source library is generated and saved in `public/images/brand/`: 3 hero, 4 service, 12 case-study, 2 About, 4 solution, 7 social/miscellaneous, and 5 article images. See [image-library.md](image-library.md) for the filename map and page placements. The website uses Next Image to serve responsive formats and sizes from these PNG masters.

Case-study art is illustrative context, not a client screenshot or proof of a result. Social tiles are clean visual backgrounds with space for separately approved copy. About imagery shows generic workspaces and is not presented as a photograph of named Csharptek staff.

## Voice and consistency

Use plain, specific language about the engineering and operational context. Visuals should make a complex system easier to understand, not promise a result that the source material does not support.
