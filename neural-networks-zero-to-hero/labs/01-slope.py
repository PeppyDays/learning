"""Estimate how a single weight affects a prediction error."""


def loss(weight: float) -> float:
    prediction = weight * 2.0
    target = 4.0
    return (prediction - target) ** 2


weight = 1.0
step = 0.0001
slope = (loss(weight + step) - loss(weight - step)) / (2 * step)
print(f"weight={weight:g}, loss={loss(weight):g}, estimated slope={slope:.4f}")
