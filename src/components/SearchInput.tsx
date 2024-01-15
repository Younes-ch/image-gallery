import { useRef } from "react";
import { Input } from "./ui/input";
import imageQueryStore from "@/stores/imageQueryStore";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setQuery = imageQueryStore((store) => store.setQuery);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setQuery(ref.current.value);
        }
      }}
    >
      <Input ref={ref} placeholder="Search images..." />
    </form>
  );
};

export default SearchInput;
