import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { key: 1, value: "", label: "Relevance" },
    { key: 2, value: "-added", label: "Date added" },
    { key: 3, value: "name", label: "Name" },
    { key: 4, value: "-released", label: "Release date" },
    { key: 5, value: "-metacritic", label: "Popularity" },
    { key: 6, value: "-rating", label: "Average rating" },
  ];

  const sortOrder = useGameQueryStore((s) => s.GameQuery.sortOrder);
  const setSelectSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSelectSortOrder(order.value)}
            value={order.label}
            key={order.key}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
