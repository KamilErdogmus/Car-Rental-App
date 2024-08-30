import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <div className="w-full absolute z-10">
      <nav className="max-width flex justify-between items-center px-6 py-4">
        <Link to={"/"}>
          <img src="/bmw.png" alt="logo" width={50} />
        </Link>
        <Button text={"Register"} />
      </nav>
    </div>
  );
};

export default Header;
