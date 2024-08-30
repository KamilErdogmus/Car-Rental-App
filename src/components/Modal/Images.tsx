import Car from "../../types";
import generateImage from "../../utils/generateImage";

const Images = ({ car }: { car: Car }) => {
  return (
    <div className="flex flex-col gap-3">
      {/* Hero */}
      <div className="w-full h-40 bg-pattern bg-center rounded-lg">
        <img
          className="object-contain mx-auto h-full"
          src={generateImage(car)}
          alt=""
        />
      </div>
      {/* Small */}
      <div className="flex gap-3 my-3">
        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            className="h-full mx-auto object-contain min-w-[145px]"
            src={generateImage(car, "29")}
            alt="Info-img"
          />
        </div>
        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            className="h-full mx-auto object-contain min-w-[145px]"
            src={generateImage(car, "13")}
            alt="Info-img"
          />
        </div>
        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            className="h-full mx-auto object-contain min-w-[145px]"
            src={generateImage(car, "33")}
            alt="Info-img"
          />
        </div>
      </div>

      {/* Infos */}

      {Object.entries(car).map(([key, value], i) => (
        <div className="flex justify-between" key={i}>
          <h4 className="capitalize">
            {key.replace(/_/g, " ")}
          </h4>
          <p className="capitalize">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default Images;
