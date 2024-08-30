type Car = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: "rwd" | "fwd" | "awd" | "4fwd";
  fuel_type: "gas" | "diesel" | "electricity";
  highway_mpg: number;
  make: string;
  model: string | number;
  transmission: "a" | "m";
  year: number;
};
export default Car;

export type OptionType = { label: string; value: string };
