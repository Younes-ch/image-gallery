import { useRef } from "react";
import { Input } from "./ui/input";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Input ref={ref} placeholder="Search images..." />
    </form>
  );
};

export default SearchInput;
