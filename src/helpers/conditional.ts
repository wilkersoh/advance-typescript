type Animal = {
	name: string;
};

type Human = {
	firstName: string;
	lastName: string;
};

type Alien = {
	planet: string;
};

type GetRequiredInformation<TType> = TType extends Animal
	? {
			age: number;
	  }
	: TType extends Human
	? {
			socialSecurityNumber: number;
	  }
	: never;

export type RequiredInformationForAniamal = GetRequiredInformation<Animal>;

export type RequiredInformationForHuman = GetRequiredInformation<Human>;

export type RequiredInformationForAlien = GetRequiredInformation<Alien>;
