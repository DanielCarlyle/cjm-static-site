# CJM Films — Static HTML5 Rebuild + Decap CMS

Faithful rebuild of the supplied CJM Films site using semantic HTML5, CSS Grid/Flexbox, and vanilla JavaScript. No Bootstrap, jQuery, Masonry, or LightGallery required. Existing portfolio posters, Vimeo IDs, biography, links, hero artwork, and contact form action were carried over.

## Preview locally

Run `python3 scripts/build.py` then `python3 -m http.server 8000` and open `http://localhost:8000`. Run the server from the repository root. No package installation required.

## Edit content

Content lives in `content/settings.json`, `content/projects.json`, and `content/videos.json`. These JSON files are the source of truth: do not hand-edit the generated HTML.

## Enable Decap CMS

1. Push this folder to a Git repository (default branch `main`) and deploy to Netlify.
2. Enable Netlify Identity and Git Gateway if available for your Netlify account/site, and invite an editor. The sample `admin/config.yml` uses `git-gateway`.
3. If Git Gateway is unavailable, switch the Decap `backend` to a supported GitHub/GitLab OAuth backend and configure its authentication per Decap's current documentation. CMS login **does not work** until backend authentication is configured.
4. Open `/admin/`, edit Site Settings, Editing Portfolio, or Directing Videos, and publish. Publishing commits JSON and triggers Netlify to rebuild `index.html`.
5. Update `site_url`, canonical URL, form endpoint, and Git branch for the real deployment.

## Notes

- The design intentionally follows the original white header, Bebas Neue/Rubik typography, full-viewport hero artwork, gallery filters, white sections, and pale footer.
- Vimeo iframes are click-to-load to reduce initial page weight. Portfolio posters open in a native dialog.
- The existing images mostly reference external CodePen/CDN URLs. To make them fully self-hosted, upload replacement assets in the CMS.
- The original Instagram embed was replaced with a lightweight Instagram link to avoid third-party embed overhead; restore it if exact embed behavior is essential.
- Video labels in the source HTML were not provided, so generic editable labels were used; replace them in Decap.
- Existing Formspree endpoint is retained but must be tested and verified with the account owner before launch.
- For accessibility and SEO, check image alt text, titles, Vimeo embed permissions, and forms before publishing.
