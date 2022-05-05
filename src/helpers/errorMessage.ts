export const deepEqualCompare = <Arg>(
	a: Arg extends any[] ? `Don't pass an array!` : Arg,
	b: Arg extends any[] ? `Don't pass an array!` : Arg
): boolean => {
	return a === b;
};

deepEqualCompare("b", "hi");

interface Letters {
	a: number;
	b: string;
	c: {
		name: string;
	};
}

type LetterAsUnion = keyof Letters;
const letter: LetterAsUnion = "a";

type LetterValues = Letters[keyof Letters];
const value: LetterValues = "c";
