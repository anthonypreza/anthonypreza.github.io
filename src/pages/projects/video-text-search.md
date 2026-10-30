---
layout: ../../layouts/ProjectLayout.astro
title: Video-Text Search
description: Video-text retrieval with ResNet50, BERT, and contrastive learning.
status: Writeup in progress
repository: https://github.com/anthonypreza/video-text-search
---

## Question

How can video clips and text descriptions be represented in a shared embedding space?

<!-- Add your motivation and the use case you started with. -->

## Approach

ResNet50 encodes video frames and BERT encodes text. Projection layers map both
into a shared space, with a contrastive objective aligning videos and captions.
The project also includes ONNX export and a Rust API backed by Weaviate.

<!-- Explain temporal aggregation, negative sampling, and your model choices.
Add an architecture diagram here if it helps. -->

## Evaluation

The original pipeline includes a small ranking check on training examples.
It is not held-out text-to-video Recall@K evaluation.

<!-- Add measured results only when you can describe the dataset, split,
candidate set, and evaluation procedure. -->

<!--
## What I learned

Describe a concrete result, a failed approach, and what you would change next.
-->
