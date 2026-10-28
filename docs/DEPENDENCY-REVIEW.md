# Dependency review, 28 October 2026

Baseline `npm audit --omit=dev`: 6 vulnerable packages, 1 critical / 4 high / 1 moderate. The initial baseline included Next 15.5.9, nested PostCSS 8.4.31, sharp 0.34.5, nanoid 3.3.12, source-map-js 1.2.1 and fflate 0.6.10.

Changes retain Next 15 / React 19 / Tailwind 3 and static export:
- Next and eslint-config-next 15.5.28 patch update.
- PostCSS 8.5.32, including scoped resolution of Next's nested copy. Relevant source-map parsing issues matter to build processes consuming untrusted CSS, not proof of a live-site compromise.
- sharp 0.35.5 resolution fixes upstream libvips/libheif/librsvg advisories. Requires Node >=20.9; repo pins Node 20.18.0. Next image optimization remains disabled. Static export does not expose a Next image-processing server.
- nanoid 3.3.20 / source-map-js 1.2.2 patch resolutions.
- three-stdlib's fflate specifically pinned 0.6.11 within the existing minor series; other fflate consumers retain their own compatible versions.
- ESLint 9.39.5 and compatible lockfile-only dev/transitive updates from non-force npm audit fix. No forced major upgrades.

Final full and production audits both report zero known vulnerabilities at this check. This is time-sensitive registry evidence, not a security guarantee. No framework major migration was required. The static deployment limits exposure to server-only Next advisories; build tooling and future server deployments still need patch maintenance.

Sources inspected:
- https://github.com/advisories/GHSA-px8p-9vwx-vf98
- https://github.com/advisories/GHSA-28wg-ghj8-5hjv
- https://github.com/advisories/GHSA-wq5f-xc86-pv6w
- https://github.com/advisories/GHSA-r28c-9q8g-f849

Production build, TypeScript, ESLint and browser regression checks must be rerun after any future override/dependency changes. Do not remove overrides just to reduce the lockfile diff without rechecking advisories and compatibility.
