---
applyTo: "docs/**/*.md,docs/**/*.mdx,devs/**/*.md,devs/**/*.mdx"
---

# Links between Knowledge Base pages

Links from one Knowledge Base page to another must be root-relative, not absolute.

- Correct: `[Responsive settings](/docs/building-with-wpbakery/responsive-settings)`
- Wrong: `[Responsive settings](https://kb.wpbakery.com/docs/building-with-wpbakery/responsive-settings/)`

The rule covers every link whose target starts with `https://kb.wpbakery.com/docs/` or `https://kb.wpbakery.com/devs/` (also with `http://`), in Markdown links and in `href` attributes. To fix one, remove the scheme and domain, drop the trailing slash, and keep any `#anchor`:
`https://kb.wpbakery.com/docs/faq/some-page/#section` becomes `/docs/faq/some-page#section`.

Reason: the build fails on broken relative links (`onBrokenLinks: 'throw'`), but absolute links are not checked, so they break silently when a page is moved or renamed. They also send readers of a preview or local build to the live site.

When reviewing a pull request:

- Flag every absolute Knowledge Base link that the pull request adds or changes, and suggest the root-relative replacement.
- Do not flag absolute links on lines the pull request does not touch.
- Do not flag links to the bare homepage (`https://kb.wpbakery.com`), links to other domains (`wpbakery.com`, `github.com`, `youtube.com` and others), or URLs in frontmatter and code blocks.

When writing or editing pages: issues and content specs often give Knowledge Base links as full URLs. Convert them to root-relative links instead of copying them as they are.
