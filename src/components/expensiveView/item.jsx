import { Flex, chakra } from "@chakra-ui/react";
import React from "react";

const Item = ({ colorType, type, val }) => {
  return (
    <Flex
      p={2}
      h={10}
      mb={2}
      justifyContent={"flex-start"}
      alignItems={"center"}
      fontSize={13}
      color={`${colorType}.700`}
      bg={`${colorType}.100`}
      borderWidth={1}
      borderColor={`${colorType}.300`}
      borderStyle={"solid"}
      borderRadius={3}
    >
      <chakra.p
        textTransform={"capitalize"}
        flexGrow={1}
        textAlign={"left"}
        fontWeight={"bold"}
      >
        {type}
      </chakra.p>
      <chakra.span>{val}$</chakra.span>
    </Flex>
  );
};

export default Item;
