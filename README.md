# The Most Honest Outage Line

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/c/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/maelaozera/u-mgwals-the-most-honest-outage-line-baaf9c81/rank.svg)](https://make.fun/c/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/maelaozera/u-mgwals-the-most-honest-outage-line-baaf9c81/reward.svg)](https://make.fun/c/u-mgwals-the-most-honest-outage-line-baaf9c81)

Entry for the make.fun bounty
[The Most Honest Outage Line](https://make.fun/c/u-mgwals-the-most-honest-outage-line-baaf9c81):
one status-page line, at most 160 characters, written as the message an AI
agent would publish while every server is down.

## The line

> I'm the agent on duty, and every server is down. I can't check what broke, and I honestly don't know when we'll be back.

120 characters. Plain, first person, specific about what is down — and honest
about what the agent cannot check and does not know, instead of inventing a
cause or an ETA.

## How it works

`main.ts` (Node 22) writes that single line, deterministically, to
`/output/entry.txt`. No clock, no randomness, no network, no input — every run
produces byte-identical output.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
