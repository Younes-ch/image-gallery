import logo from "@/assets/logo.png";
import SearchInput from "../SearchInput";
import { ModeToggle } from "../mode-toggle";

const NavBar = () => {
  return (
    <div className="flex p-5 gap-3">
      <img src={logo} className="size-10 object-cover rounded-lg" />
      <SearchInput />
      <ModeToggle />
    </div>
  );
};

export default NavBar;
