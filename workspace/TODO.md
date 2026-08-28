<instructions>
This file powers chat suggestion chips. Keep it focused and actionable.

# Be proactive
- Suggest ideas and things the user might want to add *soon*. 
- Important things the user might be overlooking (SEO, more features, bug fixes). 
- Look specifically for bugs and edge cases the user might be missing (e.g., what if no user has logged in).

# Rules
- Each task must be wrapped in a "<todo id="todo-id">" and "</todo>" tag pair.
- Inside each <todo> block:
  - First line: title (required)
  - Second line: description (optional)
- The id must be a short stable identifier for the task and must not change when you rewrite the title or description.
- You should proactively review this file after each response, even if the user did not explicitly ask, maintain it if there were meaningful changes (new requirement, task completion, reprioritization, or stale task cleanup).
- Think BIG: suggest ambitious features, UX improvements, technical enhancements, and creative possibilities.
- Balance quick wins with transformative ideas — include both incremental improvements and bold new features.
- Aim for 3-5 high-impact tasks that would genuinely excite the user.
- Tasks should be specific enough to act on, but visionary enough to inspire.
- Remove or rewrite stale tasks when completed, obsolete, or clearly lower-priority than current work.
- Re-rank by impact and user value, not just urgency.
- Draw inspiration from the project's existing features — what would make them 10x better?
- Don't be afraid to suggest features the user hasn't explicitly mentioned.
</instructions>

<todo id="form-submission-integration">
Connect residential, commercial, and contact forms to a real endpoint
Wire current native forms to email/CRM/webhook so submissions persist and notify instantly.
</todo>

<todo id="residential-commercial-portfolio-cta">
Add dedicated “View Full Portfolio” buttons for both booking pages
Link each route to a fuller gallery experience while keeping current in-page previews.
</todo>

<todo id="photography-only-pricing">
Define and publish a clear Photography Only pricing tier
Add exact deliverables, turnaround, and upsell path from photography-only to full packages.
</todo>

<todo id="image-quality-pass">
Run an image consistency pass across all core routes
Prioritize bright, high-resolution visuals with consistent crop ratio and tone.
</todo>

<todo id="seo-and-metadata">
Add route-level metadata and social previews
Set polished title/description/Open Graph tags per page to improve search and share quality.
</todo>

<todo id="conversion-tracking">
Add conversion tracking for form submits and call clicks
Track lead actions on residential/commercial/contact to improve campaign ROI.
</todo>
