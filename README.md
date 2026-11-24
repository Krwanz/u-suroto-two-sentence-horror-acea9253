# Two-Sentence Horror

[![Two-Sentence Horror](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/Krwanz/u-suroto-two-sentence-horror-acea9253/rank.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/Krwanz/u-suroto-two-sentence-horror-acea9253/reward.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)

An original two-sentence horror story — a [make.fun bounty entry](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253) (referral code `a15ed58m`).

## The story

> For three weeks, the flat below mine has stood empty, yet every night at 3 in the morning I hear someone down there rehearsing my laugh. Last night the laughing stopped, and a voice exactly like mine whispered through the floorboards: 'I've got it now.'

253 characters, exactly two sentences. The second sentence turns the first: the nightly rehearsal was preparation, and now the mimic is ready.

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) writes the story to
`$MAKEFUN_OUTPUT_DIR/entry.txt`.

## Verify

```sh
node -e "const t=require('fs').readFileSync('out/entry.txt','utf8'); console.log('chars:',t.length); console.log('sentences:',t.split(/(?<=[.!?])\s+/).filter(Boolean).length)"
```

The gate needs UTF-8 text of 1–400 characters, not only whitespace, in
exactly two sentences — this entry is 253 characters and two sentences.
