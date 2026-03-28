// ============================================
// Phase 1-1 Exercise: Type System Basics
// ============================================
// Fix all the type errors in this file.
// Run with: tsc --strict --noEmit phase1-1-exercise.ts
//
// The scenario: you're building types for a webview
// that displays a list of hospitals and wish items.
// ============================================

// --- Exercise 1: Define the Hospital interface ---
// A hospital has:
//   id (number), name (string), rating (number),
//   isOpen (boolean), closedAt (string or null)
//
// Write the interface below:

// interface Hospital {
// 	id: number;
// 	name: string;
// 	rating: number;
// 	isOpen: boolean;
// 	closedAt: string | null;
// }

type Hospital = {
	id: number;
	name: string;
	rating: number;
	isOpen: boolean;
	closedAt: string | null;
};

// This should work without errors:
const gangnam: Hospital = {
	id: 1,
	name: "Gangnam Clinic",
	rating: 4.5,
	isOpen: true,
	closedAt: null,
};

const closedHospital: Hospital = {
	id: 2,
	name: "Seoul Clinic",
	rating: 3.8,
	isOpen: false,
	closedAt: "2025-12-31",
};

// --- Exercise 2: Define a union type ---
// WishCategory can only be "hospital" or "event"
// Currency can only be "KRW", "JPY", "THB", or "USD"
//
// Write the types below:

type WishCategory = "hospital" | "event";
type Currency = "KRW" | "JPY" | "THB" | "USD";

const _cat: WishCategory = "hospital"; // should work
const _cur: Currency = "KRW"; // should work
// const bad: WishCategory = "food"; // uncomment this -- it should error

// --- Exercise 3: Define a generic type ---
// ApiResponse<T> has:
//   data (of type T), statusCode (number), message (string)
//
// Write the type below:

type ApiResponse<T> = {
	data: T;
	statusCode: number;
	message: string;
};

const _hospitalResponse: ApiResponse<Hospital> = {
	data: gangnam,
	statusCode: 200,
	message: "ok",
};

const _listResponse: ApiResponse<Hospital[]> = {
	data: [gangnam, closedHospital],
	statusCode: 200,
	message: "ok",
};

// --- Exercise 4: Optional fields ---
// WishItem has:
//   id (number), hospitalId (number), category (WishCategory),
//   memo (optional string), createdAt (string)
//
// Write the interface below:

type WishItem = {
	id: number;
	hospitalId: number;
	category: WishCategory;
	memo?: string;
	createdAt: string;
};

const wish1: WishItem = {
	id: 100,
	hospitalId: 1,
	category: "hospital",
	createdAt: "2025-01-01",
};

const wish2: WishItem = {
	id: 101,
	hospitalId: 2,
	category: "event",
	memo: "Check prices later",
	createdAt: "2025-01-02",
};

// --- Exercise 5: Putting it all together ---
// Define a WishListPage interface with:
//   wishes (array of WishItem)
//   totalCount (number)
//   currency (Currency)
//   nextPage (number or null)

type WishListPage = {
	wishes: WishItem[];
	totalCount: number;
	currency: Currency;
	nextPage: number | null;
};

const _page: WishListPage = {
	wishes: [wish1, wish2],
	totalCount: 42,
	currency: "KRW",
	nextPage: 2,
};

const _lastPage: WishListPage = {
	wishes: [],
	totalCount: 42,
	currency: "KRW",
	nextPage: null,
};

// If you got all errors fixed, run:
//   tsc --strict --noEmit phase1-1-exercise.ts
// and you should see zero errors.
console.log("All types correct!");
