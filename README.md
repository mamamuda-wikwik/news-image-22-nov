# THE WORLD — 22 November 2026 in One Image

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/mamamuda-wikwik/news-image-22-nov/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/mamamuda-wikwik/news-image-22-nov/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

## What this is

A broadsheet newspaper front page called **THE WORLD**, drawn as one
1024×1024 image. A whole day of world news — Sunday, 22 November 2026 —
on a single page, the way a paper front page used to work: one big lead
story, four more stories in a grid, and a ticker of the day's other news
along the bottom. Black ink on newsprint white.

## The day in the headlines

The day belonged to the Baltic. Two drones struck the Russian cargo
ship Sparta II in the Gulf of Finland on Saturday, setting it ablaze.
The 16-member crew evacuated onto lifeboats and was taken to a nearby
Russian ship, while the burning vessel drifted into Finnish waters,
where Finland is leading the rescue. Finland said Ukraine was likely
behind the attack and imposed temporary air and maritime restrictions
in the eastern gulf. "The war is spilling over into our neighbouring
areas," Prime Minister Petteri Orpo said. Estonia said it would close
its border with Russia.

The rest of the page follows the day. In the Gulf, Iran-US naval
tensions escalated as tankers were hit off the Oman coast and an ADNOC
vessel was attacked in the Strait of Hormuz, leaving one crew member
missing. President Trump reached Shenzhen for the APEC summit, with a
trilateral meeting planned with China's Xi and Russia's Putin. In
Antalya, the COP31 climate summit remained in overtime on Sunday, still
short of a final agreement on fossil-fuel use. And in the Andes, a
magnitude 6.9 earthquake shook central Peru on Friday, with no damage
or casualties immediately reported.

The ticker carries the rest: US airlines warned of possible terror
attacks ahead of Thanksgiving; the Pentagon curbing informal gatherings
between US and Canadian service members; Denmark saying Russia plotted
to kill a US-Ukrainian citizen; Brazil's former president Bolsonaro in
intensive care; cartel violence killing eleven people in Sinaloa after
the arrest of a cartel leader; artificial intelligence helping solve a
famous maths problem.

Every headline was checked against several news sources reporting the
same day, so the page reflects what the day actually contained — not one
outlet's version of it. The image was drawn programmatically, letter by
letter, in a black-and-white newsprint style.

## Sources

The headlines were cross-checked across multiple outlets and wires
reporting the same day: Reuters, CNN, AP, AFP, BBC, and ISW. Where
the sources disagreed on a number, the page uses the figure the
authorities on the ground gave — the Finnish Border Guard for the
Sparta II, the market reporting for the tanker attacks.

## How to run it

Requires Node.js (no packages, no network — standard library only).

```sh
node main.ts ./out
```

The program checks `entry.png` first: it must be a genuine PNG with a
13-byte IHDR chunk, an IDAT chunk, an IEND trailer, exactly 1024×1024
pixels, and no more than 1 MiB. If anything fails, it prints an error,
exits with a non-zero code, and copies nothing. On success it copies the
image to `./out/entry.png` and prints a one-line summary with the
dimensions and byte size.

## Files

- `entry.png` — the front page itself, 1024×1024.
- `main.ts` — the validator and copier (Node.js, standard library only).
- `README.md` — this file.
- `LICENSE` — MIT license.

## Referral

Referral code `tdgxqn9n` is tied to this entry.
