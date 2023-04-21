import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import react from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant={"filled"}
      />
    </InputGroup>
  );
};

export default SearchInput;
