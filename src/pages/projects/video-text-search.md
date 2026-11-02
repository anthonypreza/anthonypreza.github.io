---
layout: ../../layouts/ProjectLayout.astro
title: Video-Text Search
description: Video-text retrieval with ResNet50, BERT, and contrastive learning.
repository: https://github.com/anthonypreza/video-text-search
---

## Question

How can video clips and text descriptions be represented in a shared embedding space?

My motivation here was simple: I wanted to learn the intricacies of how two-tower models work and figured what better way than building a natural language video search model?

## Approach

I use a straightforward two-tower approach. The video tower uses ResNet50 to encode video frames and the text tower uses BERT to encode captions. Both encoded representations are then projected into a shared embedding dimension. A contrastive objective aligns videos and captions.

![Two-tower architecture: ResNet50 video features and BERT caption features are projected into normalized 512-dimensional embeddings and aligned with contrastive loss.](/images/video-text-search-architecture.svg)

Some important concepts explained:

- Temporal aggregation: Videos need to be represented by a single vector, but videos contain multiple video frames. Therefore, the encoded video frames need to be aggregated to generate a single representation. In this project, I chose mean aggregation (average pooling) so all valid frame embeddings are averaged together. The result is that you end up with a single embedding-dim vector instead of a sequence of embedding-dim vectors.
- L2 normalization: This transforms the video and text embeddings so that they have length 1. The reason for this is that the dot product of these embeddings is now the cosine similarity. Embeddings can be directly compared this way (similarity of 1 means that they point in exactly the same direction, similarity of 0 means they are orthogonal, and similarity of -1 means they point in opposite directions).
- Contrastive loss: This is where the magic happens. Each training example pairs a video with a single correct caption (positive) and multiple incorrect captions (negatives). A vector of logits is formed by taking the dot products of the encoded video with each of the captions (divided by a temperature parameter). These can be passed to the cross-entropy loss function with the target being the index of the positive caption. Contrastive loss measures prediction error so that the model can learn how to distinguish the correct caption for a video.

## Evaluation

The original pipeline includes a small ranking check on training examples.
It is not held-out text-to-video Recall@K evaluation. A future direction is to add proper model evaluation on a held-out test set. I haven't added this yet since downloading the YouTube videos and training take a lot of time, and I wanted to prove out the concept before going deeper into model evaluation.

## Deployment

The project includes ONNX export for the video and text encoders. There is also a Rust API that is backed by a Weaviate vector database. I wanted to explore how to deploy the models with relatively good performance. I chose Rust and Weaviate to explore efficient model serving and vector search. The interoperability provided by ONNX is also amazing, letting you serve a model built in PyTorch in a Rust API.

## Log

Since this is an ongoing exploration, I'm going to log new findings, learnings, or hiccups below.

### Nov. 1, 2026

I decided to pick this project back up over the weekend. I remember that I never built in proper model evaluation so I wanted to explore adding that (on top of moving the project to its own repository). However, before moving forward, I wanted to see if I could even train on a larger set of videos. When I first started the project, I only ever trained on small training datasets (~100 videos) due to the time it took to download and train the contrastive model. I decided to build some infrastructure to make it faster to download videos and easier to train on my GPU. I quickly learned that training on a larger dataset (1000 videos) on my GPU in WSL2 was unstable and caused my PC to crash consistently. I decided to bring the environment out of WSL2 and directly into Windows (I know, shocker!) to see if this would improve stability (spoiler alert, it didn't). Training on Windows did finish five epochs on 100 videos, but my PC crashed again once I tried to train on 1000. I think I'm going to see realistically how many videos I can train on, and then consider moving to a cloud GPU environment if my PC keeps crashing.
