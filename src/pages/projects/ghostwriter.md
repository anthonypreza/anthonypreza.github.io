---
layout: ../../layouts/ProjectLayout.astro
title: Ghostwriter
description: Language modeling and song embeddings in PyTorch.
repository: https://github.com/anthonypreza/ghostwriter
---

## Question

How do recurrent networks and causal Transformers learn next-token prediction?

I've become increasingly interested in the inner workings of modern large language models, so I decided to explore sequence modeling from first principles. Being an amateur musician and lyricist/writer, I decided to focus on text generation via next-token prediction. The goal was to explore how different sequence models fare on text generation after being trained on a corpus of creative writing samples. The project doesn't include the writings that I trained on, but contains all of the code and structure needed to train your own text generation models.

## Approach

The project compares RNNs, LSTMs, GRUs, and causal Transformers using a shared workflow that tokenizes texts, trains the models on next-token prediction, and then makes it possible to generate text via autoregressive generation (predicting the next token and then feeding this new sequence into the same model). Later on, I explored learning song representations using a contrastive training approach that embeds text sequences so that similar texts are closer together in embedding space. The goal is to learn song embeddings and then cluster them together so that similar songs end up in the same cluster.

### Phase 1: Text Generation

![Next-token prediction: tokens, embeddings, a sequence model, vocabulary logits, and a next-token prediction.](/images/ghostwriter-generation.svg)

Text generation can be treated in its most basic form as a next-token prediction problem. That is, given the first n words of an example of text, can the model predict the word at position n + 1? Sequence models such as RNNs, LSTMs, GRUs, and causal Transformers work well for these types of problems. Without going into too much detail, these models essentially maintain a hidden state at each time step (token position) that feeds into the next time step along with the input features (in this case, the embeddings representing each token). The only exception to this pattern is the Transformer, which doesn't feed the hidden state to the next token position, but rather creates a new contextual embedding for each time step. For ease, I will refer to all of these interchangeably as the models' "hidden states" at time step t. The hidden states contain information from the current token and each previous token within the available context window. This is in contrast to a standard feed-forward network, which doesn't carry a recurrent state between time steps.

At each time step, the model's hidden state can be projected using a linear layer that maps the hidden state so that each unit in the linear layer represents a logit for a choice in the vocabulary. The target at each time step t is the index of the vocabulary choice at t + 1. I say "choice" here because the vocabulary can be represented as characters, words, or even subwords using something like BPE tokenization. Cross-entropy loss measures next-token prediction error, and the optimizer updates the model weights using gradients computed through backpropagation. Once the model is trained, text generation is done by encoding the input text, and then autoregressively performing next-token prediction. I also built a UI playground (thanks, Codex, for being my frontend engineer!) that lets you inspect how prompts and different generation settings affect text generation.

![Ghostwriter playground with model selection, a prompt, sampling settings, and generated text.](/images/ghostwriter-ui.png)

### Phase 2: Text Representations

![Contrastive learning: two same-song excerpts pass through a frozen Transformer and trainable projection head.](/images/ghostwriter-contrastive.svg)

I wanted to take this project a bit further by seeing if I could train an encoder whose embeddings could be clustered to group similar examples of song lyrics or creative writing together. I used a frozen Transformer trained in Phase 1 as a starting point and trained a projection head using a contrastive learning objective. The contrastive objective treats pairs of sequences from the same piece of writing or song lyrics as positive pairs, and sequences from other pieces as negatives. The model is trained to increase the likelihood that sequences from the same song will be placed closer together in embedding space. The goal here was to cluster songs together in a self-supervised manner and see if similar songs ended up in the same cluster. See an example visualization of clustered songs below.

**Pooled embeddings**

![UMAP visualization of pooled Transformer song embeddings colored by K-means cluster.](/images/ghostwriter-pooled.png)

**Projected embeddings**

![UMAP visualization of song embeddings after contrastive projection, colored by K-means cluster.](/images/ghostwriter-projected.png)

Song embeddings are grouped using K-means and then displayed in two dimensions with UMAP. These plots are fitted separately, so the positions and colors between them don't correspond. The views shown here are purely exploratory and are not an indication of the quality of retrieval.

## Evaluation

Validation results from some next-token prediction experiments I ran in October 2026 (context lengths are in tokens).

| Model       | Context | Perplexity | Token accuracy |
| ----------- | ------: | ---------: | -------------: |
| RNN         |      32 |      82.37 |         24.14% |
| LSTM        |      32 |      79.05 |         24.37% |
| Transformer |      32 |      79.33 |         24.66% |
| LSTM        |      64 |      79.74 |         24.67% |

Lower perplexity is better and higher token accuracy is better. These are results from single-seed runs with different model sizes and not a general ranking of architectures. One thing to keep in mind is that compared to datasets used to train modern LLMs, the training set size for these experiments is tiny. Nevertheless, my goal wasn't to train a sophisticated and powerful model, but rather to compare implementations to see how they stacked up against each other.

What I found most interesting here is how close the LSTM and Transformer results were. At a context length of 32, the LSTM had slightly better perplexity, while the Transformer had slightly better token accuracy. Increasing the LSTM context length to 64 slightly improved accuracy but increased perplexity. The main takeaway I had is that a larger model or longer context doesn't automatically give better results. These runs were a useful starting point, but I need more experiments to draw stronger conclusions.
