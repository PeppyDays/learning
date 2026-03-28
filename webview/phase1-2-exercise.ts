// ============================================
// Phase 1-2 Exercise: Functions & Async
// ============================================
// Implement the functions described below.
// Run with: npx tsx phase1-2-exercise.ts
// ============================================

// --- Types from Phase 1-1 (provided) ---

type Currency = "KRW" | "JPY" | "THB" | "USD";

type Hospital = {
	id: number;
	name: string;
	rating: number;
	isOpen: boolean;
	closedAt: string | null;
};

type ApiResponse<T> = {
	data: T;
	statusCode: number;
	message: string;
};

// --- Exercise 1: Arrow function ---
// Write a function `isHighRated` that takes a Hospital
// and returns true if rating >= 4.0

const isHighRated = (hospital: Hospital): boolean => {
	return hospital.rating >= 4.0;
};

// Test:
const testHospital: Hospital = {
	id: 1,
	name: "Gangnam Clinic",
	rating: 4.5,
	isOpen: true,
	closedAt: null,
};
console.log("Ex1:", isHighRated(testHospital)); // should print true
console.log("Ex1:", isHighRated({ ...testHospital, rating: 3.2 })); // should print false

// --- Exercise 2: Function with callback ---
// Write a function `filterHospitals` that takes:
//   - hospitals: Hospital[]
//   - predicate: a function that takes Hospital and returns boolean
// Returns the filtered array.

const filterHospitals = (
	hospitals: Hospital[],
	predicate: (hospital: Hospital) => boolean,
) => {
	return hospitals.filter(predicate);
};

// Test:
const hospitals: Hospital[] = [
	{ id: 1, name: "A Clinic", rating: 4.5, isOpen: true, closedAt: null },
	{
		id: 2,
		name: "B Clinic",
		rating: 3.2,
		isOpen: false,
		closedAt: "2025-01-01",
	},
	{ id: 3, name: "C Clinic", rating: 4.8, isOpen: true, closedAt: null },
];

const openHighRated = filterHospitals(
	hospitals,
	(h) => h.isOpen && h.rating >= 4.0,
);
console.log(
	"Ex2:",
	openHighRated.map((h) => h.name),
); // should print ["A Clinic", "C Clinic"]

// --- Exercise 3: Generic function ---
// Write a function `wrapResponse` that:
//   - takes data of any type T and a statusCode (number)
//   - returns an ApiResponse<T> with message "ok"

const wrapResponse = <T>(data: T, statusCode: number): ApiResponse<T> => {
	const x: ApiResponse<T> = {
		data: data,
		statusCode: statusCode,
		message: "ok",
	};
	return x;
};

// Test:
const res1 = wrapResponse(testHospital, 200);
console.log("Ex3:", res1.data.name, res1.statusCode); // should print "Gangnam Clinic" 200

const res2 = wrapResponse(hospitals, 200);
console.log("Ex3:", res2.data.length); // should print 3

// --- Exercise 4: Async function ---
// Write an async function `fetchHospitalById` that:
//   - takes an id (number)
//   - simulates a network delay of 100ms (use the sleep helper below)
//   - returns the hospital from the `hospitals` array with matching id
//   - throws an Error("Hospital not found") if no match
//
// Helper:
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const fetchHospitalById = async (id: number): Promise<Hospital> => {
	await sleep(100);
	const hospital = hospitals.find((h: Hospital): boolean => h.id === id);
	if (!hospital) {
		throw Error("Hospital not found");
	}
	return hospital;
};

// Test:
const runTests = async () => {
	try {
		const found = await fetchHospitalById(1);
		console.log("Ex4:", found.name); // should print "A Clinic"
	} catch (e) {
		console.log("Ex4: unexpected error");
	}

	try {
		await fetchHospitalById(999);
		console.log("Ex4: should not reach here");
	} catch (e) {
		console.log("Ex4:", (e as Error).message); // should print "Hospital not found"
	}
};

// --- Exercise 5: Promise.all ---
// Write an async function `fetchMultiple` that:
//   - takes an array of ids (number[])
//   - fetches all hospitals in parallel using fetchHospitalById
//   - returns the array of results

const fetchMultiple = async (ids: number[]): Promise<Hospital[]> => {
	const promises = ids.map((id: number) => fetchHospitalById(id));
	return await Promise.all(promises);
};

// Test:
const runAllTests = async () => {
	await runTests();

	const results = await fetchMultiple([1, 3]);
	console.log(
		"Ex5:",
		results.map((h) => h.name),
	); // should print ["A Clinic", "C Clinic"]

	console.log("\nAll exercises done!");
};

runAllTests();
