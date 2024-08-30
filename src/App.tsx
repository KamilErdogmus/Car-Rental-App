import { useSearchParams } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import { useEffect, useState } from "react";
import { fetchCars } from "./utils/fetchCars";
import Car from "./types";
import Warning from "./components/Warning";
import Card from "./components/Card/index";
import More from "./components/More";
import { fuels, years } from "./utils/constants";

const App = () => {
  const [params] = useSearchParams();
  const [cars, setCars] = useState<Car[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(5);

  const paramsObject = Object.fromEntries(params.entries());
  useEffect(() => {
    fetchCars({ limit, ...paramsObject })
      .then((data) => setCars(data))
      .catch(() => setIsError(true));
  }, [limit, params]);

  return (
    <div className="min-h-screen text-white bg-[rgb(23,23,23)]">
      <Header />

      <Hero />

      <div className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Collection
          </h1>
          <p className="mt-2">Explore Your Ideal Car</p>
          <div className="home__filters">
            <SearchBar />
            <div className="home__filter-container">
              <Filter options={fuels} name="fuel_type" />
              <Filter options={years} name="year" />
            </div>
          </div>

          {!cars ? (
            <Warning>Loading...</Warning>
          ) : isError ? (
            <Warning> Something went wrong...</Warning>
          ) : cars.length < 1 ? (
            <Warning>
              Unfortunately, we couldn't find a car that fits
              your criteria.
            </Warning>
          ) : (
            cars.length > 1 && (
              <section>
                <div className="home__cars-wrapper">
                  {cars.map((car, i) => (
                    <Card car={car} key={i} />
                  ))}
                </div>
                <More
                  handleIncrease={() => {
                    setLimit(limit + 5);
                  }}
                  limit={limit}
                />
              </section>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
