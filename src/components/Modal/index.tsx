import Car from "../../types";
import Images from "./Images";
import { AnimatePresence, motion } from "framer-motion";

interface IProps {
  car: Car;
  open: boolean;
  close: () => void;
}

const Modal = ({ car, open, close }: IProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          exit={{ opacity: 0 }}
          className="inset-0 fixed bg-black z-20 grid place-items-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            exit={{ scale: 0, opacity: 0 }}
            className="bg-white p-6 relative max-h-[90vh] rounded-xl flex flex-col gap-5 shadow-xl overflow-auto"
          >
            <button
              onClick={close}
              className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
            >
              <img src="close.svg" alt="close" />
            </button>

            {/* Photos */}
            <Images car={car} />
            {/* Infos */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
