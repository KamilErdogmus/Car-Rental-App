import Car from "../types";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key":
      "221c395b57msh5a43f7ed21d8285p1bc2acjsna153f5afe69e",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};
type Params = {
  limit: number;
  make?: string;
  model?: string;
  fuel_type?: string;
  year?: string;
};

export const fetchCars = async ({
  limit,
  make = "bmw",
  model = "m4",
  fuel_type = "",
  year = "",
}: Params): Promise<Car[]> => {
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}&fuel_type=${fuel_type}&year=${year}`;

  const res = await fetch(url, options);

  const data = await res.json();

  return data;
};
