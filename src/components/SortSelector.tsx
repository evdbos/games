import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {}

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        order by : Relevances
      </MenuButton>
      <MenuList>
        <MenuItem> Relevance</MenuItem>
        <MenuItem> Date added</MenuItem>
        <MenuItem> name</MenuItem>
        <MenuItem> Release date</MenuItem>
        <MenuItem> Popularity</MenuItem>
        <MenuItem> Average rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
