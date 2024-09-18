import { Button, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Summary from "../summary/summary";
import View from "../expensiveView/view";
import AddTransaction from "../add-transaction/add-transaction";

const Main = () => {
  return (
    <Flex textAlign={"center"} flexDirection={"column"} px={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"blue.500"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <AddTransaction />
        </Flex>
      </Flex>
      <Summary />
      <SimpleGrid
      columns={{
        base:1,
        md:2
      }}
        mt={"4"}
        p={3}
        gap={2}
        bg={"#F8FAFC"}
        borderRadius={".5rem"}
      >
        <View colorType="red" type="expense"  />
        <View />
      </SimpleGrid>
    </Flex>
  );
};

export default Main;
