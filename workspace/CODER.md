<instructions>
This file will be automatically added to your context. 
It serves multiple purposes:
  1. Storing frequently used tools so you can use them without searching each time
  2. Recording the user's code style preferences (naming conventions, preferred libraries, etc.)
  3. Maintaining useful information about the codebase structure and organization
  4. Remembering tricky quirks from this codebase

When you spend time searching for certain configuration files, tricky code coupled dependencies, or other codebase information, add that to this CODER.md file so you can remember it for next time.
Keep entries sorted in DESC order (newest first) so recent knowledge stays in prompt context if the file is truncated.
</instructions>

<coder>
## 2026-08-28
- Removed duplicate top-nav entry targeting `/photography` in `src/App.tsx` so Photography appears as one standalone nav destination.
- Removed runtime debug log `__ANIMA_DBG__ commercial-shell` from `src/generated-pages/commercial/App.tsx`.
- Moved commercial heading/intro copy out of the form card into `src/generated-pages/commercial/sections/BookingSection/index.tsx` to match residential page structure.
- Removed legacy “One smooth booking flow...” copy from inside `src/generated-pages/commercial/sections/BookingSection/components/BookingEmbed.tsx`.

## 2026-08-28
- Flattened `src/generated-pages/commercial/App.tsx` to render only `MainContent`, removing legacy internal `<body>` shell and extra page-level scrollers/background.
- Added explicit top-nav label `Photography` in `src/App.tsx` (points to `/photography`) to expose standalone photography option.
- Added runtime debug log `__ANIMA_DBG__ commercial-shell` in commercial app render path for verification.

## 2026-08-28
- Commercial main content now mirrors residential form-first UX in `src/generated-pages/commercial/sections/MainContent/index.tsx` by removing the separate top gallery section.
- `src/generated-pages/commercial/sections/BookingSection/components/BookingEmbed.tsx` now contains matching structure: intro + cost cards + signup form + in-page commercial portfolio image grid.
- Residential form in `src/generated-pages/photography/sections/BookingSection/components/BookingForm.tsx` now includes a standalone `Photography Only` option and renames custom option to `Custom Coverage Plan (Flexible Add-Ons)`.

## 2026-08-28
- Residential route (`/photography`) now centers on a single branded booking/signup flow with pricing cards and an on-page residential portfolio section.
- Commercial route (`/commercial`) now uses one native branded form with service cost blocks and keeps portfolio imagery in-page (gallery retained).
- Contact page sections were restyled to match the cleaner white shell while keeping Snap Magic branding/logo context.
- Global footer in `src/App.tsx` now includes clickable “Built by sitesbycollier.com” credit.
- Top nav label changed from `Residential Media` to `Residential` for cleaner IA.

## 2026-08-28
- Simplified top-level IA in `src/App.tsx`: nav now prioritizes `Home`, `Book a Shoot`, `Residential Media`, `Commercial`, `Contact`.
- Combined legacy service routes via redirects: `/video`, `/aerials`, `/matterport` now point to `/photography`; `/media-marketing` points to `/commercial`.
- Service cards on home now map to consolidated destinations instead of spreading users across many separate pages.
- Shared `SiteFrame` remains the single starting structure for all routes to keep page-to-page continuity.
- Added a shared `SiteFrame` wrapper in `src/App.tsx` so every route now uses one consistent navigation/header/footer shell.
- Converted the homepage to a white-first clean layout while preserving original Snap Magic service details and contact info.
- Added `.unified-site` style overrides in `tailwind.css` to normalize dark generated-page styles and image presentation.
- Existing generated route pages are still mounted from `src/generated-pages/*`, now wrapped for cross-page consistency.
</coder>
