# Neural Networks: Zero to Hero

Study one video at a time in [playlist order](https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ). Read the English summary first, watch the whole video in order, then return to chat for a discussion or an experiment. The [curriculum](CLAUDE.md) tracks where to resume.

## Start here - Lecture 1

1. Read [Building micrograd](readings/01-micrograd.md). It follows the lecture from the first derivative to the training loop.
2. Watch [lecture 1 in full](https://www.youtube.com/watch?v=VMj-3S1tku0), starting at the beginning.
3. After watching, tell your tutor you finished. The tutor will guide the practice and prepare the next reading when you are ready for lecture 2.

## After watching lecture 1

For a first experiment, [01-slope.py](labs/01-slope.py) measures how a small weight change affects the loss. It uses Python alone. To run it with your tutor, open Terminal on your Mac.

```sh
cd ~/Documents/learning/neural-networks-zero-to-hero
uv run --no-project --python 3.12 labs/01-slope.py
```

## Notebook setup for later experiments

When a post-video experiment calls for a notebook, open Terminal on your Mac and run these commands. JupyterLab opens in your browser. Open the `labs` directory there and create a Python notebook for your experiments.

```sh
cd ~/Documents/learning/neural-networks-zero-to-hero
uv venv --python 3.12
uv pip install jupyterlab numpy matplotlib
.venv/bin/jupyter lab
```

Use the Python 3 kernel. Run `import sys; print(sys.executable)` in a cell to check that its path ends in `.venv/bin/python`. Stop the server with Ctrl-C and relaunch it with the last command next time.

## Tools by lecture

| When | Setup in the study directory | What it enables |
| --- | --- | --- |
| 1, when drawing graphs | `brew install graphviz` and `uv pip install graphviz` | The Python package describes the computation graph. The Homebrew package supplies the renderer, which you can check with `dot -V`. |
| 2, when starting makemore | `uv pip install torch` | Use tensors and compare hand-computed gradients with automatic differentiation. Start on CPU. |
| 2, for training data | Download [names.txt](https://raw.githubusercontent.com/karpathy/makemore/master/names.txt) into the directory containing your makemore notebook. | Count adjacent characters and sample a first name from your model. |
| 9, when building the tokenizer | `uv pip install regex tiktoken` | Split text and compare your byte-pair encoder against a reference implementation. |
| 10, when scaling up | Read the [reproduction repository](https://github.com/karpathy/build-nanogpt) before sizing a run. | Use a small configuration locally to test the pipeline. The full training run in the lecture uses multiple GPUs. |

On this Apple Silicon Mac, check optional GPU acceleration after installing PyTorch with `.venv/bin/python -c "import torch; print(torch.backends.mps.is_available())"`. If it prints True, try moving both the model and its input tensors to `mps` and measuring the same training step. See [PyTorch's MPS notes](https://docs.pytorch.org/docs/stable/notes/mps.html).
