[![make.fun · u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/ujang201/warning-label/rank.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/ujang201/warning-label/reward.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

# Warning Label for Humans: One Line, Big Laugh

A deterministic program (`main.ts`, Node 22) that writes the funniest
single-line safety warning label that should come printed on every human
being — 160 characters or fewer — to `/output/entry.txt`.

Entry:

> WARNING: This human runs on caffeine and confidence, contains unfinished projects, and will replay one embarrassing moment from 2009 at 3 a.m.

## How it works

The label is assembled from three printed sections, the way a real safety
label is laid out: what powers the unit (fuel), what is inside the box
(contents), and the side effect nobody warns you about (the 3 a.m. replay).
The sections are joined into one line, validated against the gate — 1–160
characters, a single line, no leading or trailing whitespace — and then
written to `/output/entry.txt`. The wording is fixed at authoring time, so
every run produces the exact same bytes.

Run with Node 22:

```sh
node main.ts
```

## Verification

The program is fully deterministic — no randomness, no clock, no network —
so repeated runs write byte-identical output:

```sh
node main.ts && sha256sum /output/entry.txt
node main.ts && sha256sum /output/entry.txt   # same hash
```

Expected output (142 characters, one line, written to `/output/entry.txt`):

```text
WARNING: This human runs on caffeine and confidence, contains unfinished projects, and will replay one embarrassing moment from 2009 at 3 a.m.
```

## License

MIT — see [LICENSE](LICENSE).

SPDX-License-Identifier: MIT

See the competition on [make.fun](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85).
