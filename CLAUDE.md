@AGENTS.md

## Git & deployment identity (IMPORTANT)

Vercel deploys the **HEAD commit** of `main` and requires that commit's author email to
match a GitHub account. The only email that works here is **`hello@jens.marketing`**.

Rules to keep deploys from being blocked:

- Always commit with `user.email = hello@jens.marketing` (set both `--local` and `--global`).
  Never use the GitHub noreply address `120194567+jenstools@users.noreply.github.com` — Vercel
  cannot match it and the deploy fails with "commit email could not be matched to a GitHub account".
- **Do not merge PRs through the GitHub web UI** for this repo. The web-UI merge stamps the merge
  commit with the noreply email, which puts a bad-email commit at the HEAD of `main` and breaks the
  next deploy. Merge locally instead (e.g. `git checkout main && git merge --no-ff <branch>`) so the
  merge commit is authored with `hello@jens.marketing`, then push.
- Production is **not** auto-deployed from GitHub. Every production release is a manual
  `vercel --prod` from an up-to-date `main`. Merging to `main` alone does not publish anything.
