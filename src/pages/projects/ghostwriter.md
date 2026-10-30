---
layout: ../../layouts/ProjectLayout.astro
title: Ghostwriter
description: Language modeling and song embeddings in PyTorch.
status: Writeup in progress
repository: https://github.com/anthonypreza/ghostwriter
---

## Question

How do recurrent networks and causal Transformers learn next-token prediction?

<!-- Add your motivation and the questions you wanted to investigate. -->

## Approach

The project compares RNNs, LSTMs, GRUs, and Transformers using a shared
tokenization, training, and generation workflow. A separate contrastive
experiment explores song embeddings. A local playground exposes generation
and sampling controls.

<!-- Explain the sequence windows, model differences, and training choices.
Add the generation UI or an embedding plot with an accurate caption. -->

## Evaluation

Language-model evaluation reports cross-entropy, perplexity, and token accuracy.
The embedding experiment compares pooled and projected representations.

<!-- Describe the particular experiment shown, including its data and split.
Keep synthetic demonstration outputs separate from earlier measurements.
Discuss sampling variability and model-size differences where relevant. -->

<!--
## What I learned

Describe what changed your understanding of context, sampling, or representations.
-->
