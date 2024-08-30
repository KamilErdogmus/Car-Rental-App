import { useState } from "react";
import Car from "../../types";
import Button from "../Button";
import Info from "./Info";
import { motion } from "framer-motion";
import Modal from "../Modal";
import generateImage from "../../utils/generateImage";

type Props = {
  car: Car;
};

const Card = ({ car }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="car-card group"
    >
      {/* Car Name */}
      <h3 className="car-card__content-title">
        {car.make} {car.model}
      </h3>
      {/* Price */}
      <div className="flex mt-6 text-lg">
        <span className="text-semibold">$</span>
        <span className="text-3xl">
          {Math.floor(Math.random() * 700) + 150}
        </span>
        <span className="font-semibold self-end">/Day</span>
      </div>
      {/* Image */}
      <div className="relative w-full h-40 my-6">
        <img
          className="w-full h-full object-contain"
          src={generateImage(car)}
          alt="car"
        />
        {/* Button & Info */}
        <div className="w-full">
          <Info car={car} />

          <div className="group-hover:flex hidden">
            <Button
              text="Details"
              handleClick={() => setOpen(true)}
              icon="right-arrow.svg"
              designs="w-full py-[25px]"
            />
          </div>
        </div>

        <Modal
          car={car}
          open={open}
          close={() => setOpen(false)}
        />
      </div>
    </motion.div>
  );
};

export default Card;
