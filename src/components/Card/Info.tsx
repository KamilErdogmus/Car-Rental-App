import Car from "../../types";
import { motion } from "framer-motion";

type Props = {
  car: Car;
};
type FieldProps = {
  text: string;
  img: string;
};

const Info = ({ car }: Props) => {
  const trasmission =
    car.transmission === "m" ? "Manuel" : "Automatic";

  const drive =
    car.drive === "rwd"
      ? "Rear Whell"
      : car.drive === "fwd"
      ? "Front Whell"
      : "4 Whell";
  return (
    <div className="flex w-full justify-between group-hover:hidden">
      <Field text={trasmission} img="steering-wheel.svg" />
      <Field text={drive} img="tire.svg" />
      <Field text={car.fuel_type} img="gas.svg" />
    </div>
  );
};

export default Info;

const Field = ({ img, text }: FieldProps) => {
  return (
    <motion.div
      initial={{ translateY: "50px", opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="flex-center flex-col"
    >
      <img width={20} src={img} alt="" />
      <p>{text}</p>
    </motion.div>
  );
};
