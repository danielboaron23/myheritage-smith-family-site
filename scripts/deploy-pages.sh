#!/usr/bin/env bash
# Build the static export and publish it to the gh-pages branch.
# Usage: npm run deploy
set -euo pipefail

REPO_URL="https://github.com/danielboaron23/myheritage-smith-family-site.git"
export NEXT_PUBLIC_BASE_PATH="/myheritage-smith-family-site"

echo "▶ Building static export (basePath=$NEXT_PUBLIC_BASE_PATH)…"
npm run build
touch out/.nojekyll

echo "▶ Publishing out/ to gh-pages…"
cd out
rm -rf .git
git init -q
git checkout -q -b gh-pages
git add -A
git -c user.email="deploy@local" -c user.name="deploy" commit -qm "Deploy $(date -u +%FT%TZ)"
git push -f "$REPO_URL" gh-pages
rm -rf .git
cd ..

echo "✅ Deployed. Live at: https://danielboaron23.github.io/myheritage-smith-family-site/"
