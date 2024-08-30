import ReactSelect from "react-select";
import { OptionType } from "../types";
import { useSearchParams } from "react-router-dom";

type Props = {
  options: OptionType[];
  name: string;
};

const Filter = ({ options, name }: Props) => {
  const [params, setParams] = useSearchParams();

  const handleChange = (e: OptionType | null) => {
    params.set(name, e?.value as string);

    setParams(params);
  };

  const selected = {
    label: params.get(name) || options[0].label,
    value: params.get(name) || options[0].value,
  };
  return (
    <div className="text-black">
      <ReactSelect
        className="min-v-[100px]"
        options={options}
        onChange={handleChange}
        defaultValue={selected}
      />
    </div>
  );
};

export default Filter;
