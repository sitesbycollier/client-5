<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
- 2026-08-28: Removed duplicate `/photography` nav item in `src/App.tsx` so Photography is a single standalone nav destination; removed `__ANIMA_DBG__` from `src/generated-pages/commercial/App.tsx`.
- 2026-08-28: Moved commercial header copy to `src/generated-pages/commercial/sections/BookingSection/index.tsx` and removed in-card “One smooth...” language from `src/generated-pages/commercial/sections/BookingSection/components/BookingEmbed.tsx` to match residential structure.
- 2026-08-28: Added top-nav `Photography` item in `src/App.tsx` and flattened `src/generated-pages/commercial/App.tsx` to remove nested shell/page-within-page behavior; added `__ANIMA_DBG__` render log.
- 2026-08-28: Unified commercial layout with residential by removing separate gallery stack in `src/generated-pages/commercial/sections/MainContent/index.tsx`.
- Updated `src/generated-pages/commercial/sections/BookingSection/components/BookingEmbed.tsx` to form-first branded flow with pricing cards and in-page commercial portfolio images.
- Updated `src/generated-pages/photography/sections/BookingSection/components/BookingForm.tsx` with standalone `Photography Only` and renamed custom option to `Custom Coverage Plan (Flexible Add-Ons)`.
- Refreshed workspace memory and planning in `workspace/CODER.md`, `workspace/DATABASE.md`, and `workspace/TODO.md`.
- 2026-08-28: Reworked residential booking in `src/generated-pages/photography/sections/BookingSection/*` and `MainContent/index.tsx` into one branded native form + in-page residential portfolio.
- Reworked commercial flow in `src/generated-pages/commercial/sections/MainContent/index.tsx` and `BookingSection/components/BookingEmbed.tsx` to keep image gallery and replace iframe with native priced form.
- Restyled contact UX in `src/generated-pages/contact/sections/ContactSection/index.tsx` and `ContactFormSection/components/ContactForm.tsx` with clean branded messaging and fields.
- Updated shell/footer in `src/App.tsx` (nav label `Residential`, added clickable “Built by sitesbycollier.com” credit).
- Refreshed memory docs: `workspace/CODER.md`, `workspace/TODO.md`, `workspace/DATABASE.md`.
<!-- NEXT_ENTRY_HERE -->
</changelog>
