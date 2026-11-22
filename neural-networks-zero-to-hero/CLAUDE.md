# Neural Networks: Zero to Hero Study

## Learner Background

The learner is a backend and platform engineer who is comfortable with Python and is implementing neural networks for the first time. Use familiar debugging practices when they illuminate a model's behavior.

## Project Goal

Build and train a small Generative Pre-trained Transformer (GPT) from scratch. Diagnose a failed training run using measurements and explain to a colleague how text becomes a prediction and how the model learns from its error.

## Curriculum

### Phase 1 - Gradients and a first language model

| ID | Lecture | Experiment and checkpoint |
| --- | --- | --- |
| 1-1 | [1. Build micrograd](https://youtu.be/VMj-3S1tku0) | Perturb one weight and estimate the change in loss. Implement scalar backpropagation, then use the estimate to check a gradient on a graph where a value is used twice. |
| 1-2 | [2. Build makemore](https://youtu.be/PaCmpygFfXo) | Count adjacent characters in names, sample from one row of probabilities, and compare the bigram model's loss with a uniform baseline. |

### Phase 2 - Build and diagnose deeper networks

| ID | Lecture | Experiment and checkpoint |
| --- | --- | --- |
| 2-1 | [3. Multilayer perceptron](https://youtu.be/TCH_1BHY58I) | Predict a character from three preceding characters. Track training and validation loss separately to tell whether a larger embedding generalizes. |
| 2-2 | [4. Activations, gradients and batch normalization](https://youtu.be/P6sfmUTpUmc) | Deliberately enlarge the initial weights. Inspect activation histograms, predict the effect on gradients, and compare against a run with corrected initialization. |
| 2-3 | [5. Manual backpropagation](https://youtu.be/q8SA3rM6ckI) | Derive gradients for one batch, compare them with PyTorch, and locate the first operation whose gradient disagrees. |
| 2-4 | [6. WaveNet-style model](https://youtu.be/t3YJ5hKiMQ0) | Combine adjacent character representations in stages. Trace tensor shapes for eight input characters and compare validation loss with the earlier model. |

### Phase 3 - Build GPT and trace the path from text to tokens

| ID | Lecture | Experiment and checkpoint |
| --- | --- | --- |
| 3-1 | [7. Build GPT](https://youtu.be/kCc8FmEb1nY) | Implement causal self-attention. With dropout disabled, change a later token and verify that predictions at earlier positions stay the same. |
| 3-2 | [8. State of GPT](https://youtu.be/bZQun8Y4L2A) | Trace a single prompt through inference, then explain to a colleague what pretraining and supervised fine-tuning each contribute. Use the lecture's historical examples. |
| 3-3 | [9. Build the GPT tokenizer](https://youtu.be/zduSFxRajkE) | Implement byte-pair encoding, round-trip a Korean string, and explain why byte count, character count and token count differ. |

### Phase 4 - Reproduce GPT-2 at a local scale and explain it

| ID | Lecture | Experiment and checkpoint |
| --- | --- | --- |
| 4-1 | [10. Reproduce GPT-2 (124M)](https://youtu.be/l8pRSuU81PU) | Follow the architecture with fewer layers and a short context. Overfit one batch, evaluate on held-out text, and record loss and tokens per second. Walk a colleague from tokenization through one weight update, including one failure you diagnosed. |

## Note Writing Style Guide

- Write reading guides and study notes in English using plain Markdown and ASCII characters so the source is readable in an editor or a diff. Begin with the problem the lecture solves, then explain one worked example. Save prediction questions for the discussion after the full video.
- Trace one concrete input through the code before generalizing. Spell out acronyms on first use. Introduce tensor shapes at the operation where they matter.
- Connect to the preceding experiment. Use a backend analogy briefly when it helps, then return to observed values, gradients, or timings.
- Use a conversational tone. Ask the learner to explain a surprising result and one pitfall in their own words before writing notes.

## Study Method

1. Resume from the progress table. For the current lecture, prepare a reading guide under `readings/` before asking the learner to watch. Follow the lecture's order, use its examples, and link the original video and companion materials.
2. Give the learner the guide and a link to the full video from the beginning. Wait for them to say they finished watching before starting a check, exercise, or tool setup.
3. After viewing, discuss a point the learner wants to understand or guide a small experiment from the curriculum. For lecture 1, [the slope experiment](labs/01-slope.py) is available. Introduce Jupyter when an experiment uses a notebook.
4. Once the learner can explain the checkpoint, mark the topic done. Record any retrospective under `notes/` using the [note template](notes/template.md), update progress, then repeat the same sequence for the next video.

## Progress

> Total: 0/10 complete (0%) | Current: 1-1, [reading guide ready](readings/01-micrograd.md)

| ID | Topic | Status |
| --- | --- | --- |
| 1-1 | Scalar backpropagation | in progress |
| 1-2 | Bigram language model | - |
| 2-1 | Multilayer perceptron | - |
| 2-2 | Activation and gradient diagnostics | - |
| 2-3 | Manual backpropagation | - |
| 2-4 | WaveNet-style hierarchy | - |
| 3-1 | Causal GPT | - |
| 3-2 | GPT training and inference | - |
| 3-3 | Byte-pair tokenizer | - |
| 4-1 | GPT-2 reproduction and walkthrough | - |

Use `-`, `in progress`, `done`, or `done (notes/<filename>.md)`. Count both done states as complete. Update the total and current topic whenever a row changes.
