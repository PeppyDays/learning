// Named exports -- like exported functions in a Go package
export function add(a: number, b: number): number {
	return a + b;
}

export function sub(a: number, b: number): number {
	return a - b;
}

export const PI = 3.14159;

// Default export -- one per file
export default function multiply(a: number, b: number): number {
	return a * b;
}
