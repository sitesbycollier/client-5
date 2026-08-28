#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

npm run build

deploy_dir="$(mktemp -d)"
trap 'rm -rf "$deploy_dir"' EXIT

cp -R dist/. "$deploy_dir"/
touch "$deploy_dir/.nojekyll"

git init "$deploy_dir" >/dev/null
git -C "$deploy_dir" checkout -b gh-pages >/dev/null
git -C "$deploy_dir" add -A
git -C "$deploy_dir" \
  -c user.name="${GIT_AUTHOR_NAME:-github-pages-deploy}" \
  -c user.email="${GIT_AUTHOR_EMAIL:-github-pages-deploy@users.noreply.github.com}" \
  commit -m "Deploy site" >/dev/null

remote_url="$(git config --get remote.origin.url)"
git -C "$deploy_dir" push --force "$remote_url" gh-pages:gh-pages
