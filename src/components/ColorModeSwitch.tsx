import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      ></Switch>
      <Text whiteSpace={"nowrap"}>Dark mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
