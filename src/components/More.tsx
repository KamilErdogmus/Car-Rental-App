import Button from "./Button";

interface IProps {
  handleIncrease: () => void;
  limit: number;
}

const More = ({ handleIncrease, limit }: IProps) => {
  return (
    <div className="w-full flex-center my-10">
      {limit < 30 && (
        <Button handleClick={handleIncrease} text="More" />
      )}
    </div>
  );
};

export default More;
