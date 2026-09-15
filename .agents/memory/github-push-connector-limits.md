---
name: GitHub push connector limits
description: GitHub authentication limitations observed when pushing repository history from this workspace.
---

Do not assume an attached GitHub integration authenticates command-line `git` or `gh` in this workspace. The OAuth API proxy can update ordinary repository files, but requests involving `.github/workflows` may be blocked by the connector's Cloudflare layer.

**Why:** Both GitHub App and OAuth connections were authorized, yet shell Git remained unauthenticated. Low-level Git tree writes were rejected, and Contents API access to `.github/workflows` was blocked while an ordinary data-file update succeeded.

**How to apply:** For pushes containing workflow files, prefer the Replit Git interface or a user-authenticated Git client. Verify the remote head after any API fallback because multi-step writes can partially succeed.