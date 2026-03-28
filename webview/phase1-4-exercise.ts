const person = { name: "Arine", age: 30, city: "Seoul" };
const { name, age, city: location } = person;
console.log(name, age, location);

const scores = [100, 85, 72];
const [first, , last] = scores;
console.log(first, last);

const base = { id: 1, name: "Arine", role: "member" };
const next = { ...base, role: "admin" };
console.log(next);

const printUser = ({
	name,
	role = "guest",
}: {
	name: string;
	role?: string;
}) => {
	console.log(name, role);
};
printUser({ name: "Arine" });
