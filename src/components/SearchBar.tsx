import { FormEvent, useMemo, useState } from "react";
import ReactSelect from "react-select";
import { makes } from "../utils/constants";
import { useSearchParams } from "react-router-dom";

const Icon = ({ designs }: { designs?: string }) => {
  return (
    <button className={`ml-3 ${designs}`}>
      <img src="search.svg" width={40} height={40} alt="" />
    </button>
  );
};

const SearchBar = () => {
  const [params, setParams] = useSearchParams();
  const [make, setMake] = useState<string>(
    params.get("make") as string
  );
  const [model, setModel] = useState<string>(
    params.get("model") as string
  );

  const option = useMemo(
    () =>
      makes.map((make) => ({
        label: make,
        value: make,
      })),
    []
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setParams({
      make: make.toLowerCase(),
      model: model.toLowerCase(),
    });
  };
  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item">
        <ReactSelect
          placeholder="Choose Brand"
          options={option}
          defaultValue={{
            label: params.get("make") as string,
            value: params.get("make") as string,
          }}
          onChange={(selected) =>
            selected && setMake(selected.value)
          }
          className="w-full text-black"
        />
        <Icon designs="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <img
          width={25}
          className="absolute ml-4"
          src="model-icon.png"
          alt="model-icon"
        />
        <input
          className="searchbar__input rounded text-black"
          type="text"
          onChange={(e) => setModel(e.target.value)}
          placeholder="Ex:Civic"
          value={model}
        />
        <Icon designs="sm:ml-6" />
      </div>
    </form>
  );
};

export default SearchBar;
