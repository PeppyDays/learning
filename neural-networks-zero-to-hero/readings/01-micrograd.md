# Lecture 1 - Building micrograd

Suppose a network predicts -0.5 and the target is 1. Its squared error is 2.25. That number tells you how far off the prediction was. To improve the next prediction, you also need to know what happens to the error when you change each weight. Andrej Karpathy builds a small Python library, micrograd, to answer that question.

## Measuring the effect of one input

Karpathy starts with `f(x) = 3*x**2 - 4*x + 5`. At `x = 3`, the output is 20. Increase the input to 3.001 and the output rises to about 20.014. Dividing the change in output by the change in input gives roughly 14. As the input change approaches zero, that ratio approaches the **derivative**, the slope at that point.

With several inputs, you can vary one and hold the others fixed. Each slope is a partial derivative. Collect them and you have the **gradient**. Repeating the whole computation for every weight would be expensive. The next example shows how to reuse the work from a single forward pass. [08:08 - Measuring a derivative](https://youtu.be/VMj-3S1tku0?t=488)

## Tracing a calculation backward

A Python float holds the result of a multiplication. Karpathy's `Value` object also remembers the operation and the two objects that produced it. Together, those records form a **computation graph**. Here is the expression he traces.

```python
a, b, c, f = 2, -3, 10, -2
e = a * b  # -6
d = e + c  #  4
L = d * f  # -8
```

Read the last line first. Since `f = -2`, a small change in `d` changes `L` by -2 times as much. The addition passes a change in `e` through to `d` with a factor of 1. The first multiplication contributes a factor of -3 for `a`. Multiply the factors along that path and you get `(-3) * 1 * (-2) = 6`. Sure enough, raising `a` from 2 to 2.01 raises `L` from -8 to -7.94.

Multiplying these local slopes is the **chain rule**. Working backward from the output to apply that rule throughout the graph is **backpropagation**. Later in the lecture, the final output will be a loss, so each weight's gradient will say how that weight affects prediction error. [32:10 - Backpropagation by hand](https://youtu.be/VMj-3S1tku0?t=1930)

## Tracing a neuron the same way

The neuron computes a weighted sum, `n = x1*w1 + x2*w2 + b`. The bias `b` shifts the sum, and the activation function `tanh(n)` bends it into a curve with outputs between -1 and 1. That curvature matters. If every layer only scaled and added its inputs, stacking layers would still give a single linear transformation plus a bias.

In the lecture's example, `x2 = 0`. Changing `w2` leaves the product `x2*w2` at zero, so this neuron's output stays the same. When micrograd reports `w2.grad = 0`, you can explain the result from the input alone. [52:52 - A neuron as a computation graph](https://youtu.be/VMj-3S1tku0?t=3172)

## Automating the backward pass

Each operation gets a small `_backward` function. Addition passes the incoming gradient to both inputs. Multiplication scales each input's share by the value of the other input. Calling `backward()` seeds the final output's gradient with 1, since its derivative with respect to itself is 1. It then visits nodes in reverse topological order. By the time a node passes its gradient upstream, every operation that used the node has contributed to it.

The expression `u = a + a` exposes a bug. Increasing `a` by 0.01 increases `u` by 0.02, so the derivative must be 2. Both inputs point to the same Python object. If addition assigns a gradient of 1 to each input, the second write overwrites the first. Using `+=` accumulates both contributions. Karpathy then breaks `tanh` into simpler operations and checks the neuron's gradients against PyTorch. [1:22:28 - A value used twice](https://youtu.be/VMj-3S1tku0?t=4948)

## Training on four examples

Several neurons form a layer. Feeding one layer's outputs into the next gives a **multilayer perceptron (MLP)**. The network in the lecture takes three numbers as input and passes them through layers of four, four, and one neuron. The same `Value` operations now connect every weight and bias to a single prediction.

The training set has four examples with targets `1, -1, -1, 1`. A **forward pass** produces four predictions and sums their squared errors into one loss. Before calling `loss.backward()`, the code clears each parameter's gradient. Contributions from all four examples belong in this step's gradient. Contributions left over from an earlier step would mix measurements taken at different parameter values.

After the backward pass, the training loop updates each parameter with `p.data -= learning_rate * p.grad`. A positive gradient moves the parameter down, and a negative gradient moves it up. The learning rate sets the step size. This is **gradient descent**. Running the forward pass again measures what the update actually did to the loss. [2:01:12 - Updating the parameters](https://youtu.be/VMj-3S1tku0?t=7272)

## Finding the same rule in PyTorch

At the end, Karpathy opens PyTorch's implementation of the backward pass for `tanh`. If the forward output was `t`, the local derivative is `1 - t**2`. PyTorch multiplies the incoming gradient by that factor for each element of a tensor. You can recognize the rule because you saw it in a single neuron. [2:21:10 - The PyTorch implementation](https://youtu.be/VMj-3S1tku0?t=8470)

Watch the [full lecture from the beginning](https://www.youtube.com/watch?v=VMj-3S1tku0). The [companion notebooks](https://github.com/karpathy/nn-zero-to-hero/tree/master/lectures/micrograd) and [micrograd source](https://github.com/karpathy/micrograd) are available for the discussion after the video.
