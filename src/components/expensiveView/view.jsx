import { Box, chakra, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import Item from "./item";
import { GlobalContext } from "../../context/context";

const View = ({ colorType = "green", type = "income", val }) => {
  const { allExpenseTransactions, allIncomeTransactions } =
    useContext(GlobalContext);
  return (
    <Flex
      direction={{ base: "column", sm: "column" }}
      px={3}
      pb={3}
      flexGrow={1}
      bg={"white"}
      borderRadius={3}
    >
      <chakra.h3
        color={"red.600"}
        h={10}
        lineHeight={10}
        textAlign={"left"}
        textTransform={"capitalize"}
        fontWeight={500}
      >
        {type}
      </chakra.h3>
      {type == "expense"
        ? allExpenseTransactions.map((item, index) => (
            <Item
              key={index}
              colorType={colorType}
              type={item.description}
              val={item.amount}
            />
          ))
        : allIncomeTransactions.map((item, index) => (
            <Item
              key={index}
              colorType={colorType}
              type={item.description}
              val={item.amount}
            />
          ))}
    </Flex>
  );
};

export default View;
