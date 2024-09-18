import { chakra, Box, Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import React, { useContext } from "react";
import ChartDesign from "../chart/chart";
import { GlobalContext } from "../../context/context";

const Summary = () => {
  const { totalExpense, totalIncome } = useContext(GlobalContext);
  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={0}
      templateRows={"15rem"}
    >
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="flex-start"
        p={{
          base: 4,
          md: 8,
        }}
        zIndex={3}
      >
        <Flex>
          <chakra.h1
            mb={4}
            fontSize={{
              base: "2xl",
              md: "2xl",
              lg: "3xl",
            }}
            fontWeight="bold"
            color="#1E293B"
            lineHeight="shorter"
          >
            Balance is {totalExpense + totalIncome}$
          </chakra.h1>
        </Flex>
        <Stack
          bg={"#F8FAFC"}
          borderRadius={".5rem"}
          w={"100%"}
          px={3}
          py={2}
          flex={"1"}
        >
          <Flex
            flex={"1"}
            alignItems={"center"}
            justifyContent={"left"}
            borderBottom={".5px #CBD5E1 dashed"}
          >
            <chakra.span
              color="#9CA3AF"
              fontSize="lg"
              textTransform="capitalize"
              fontWeight="400"
              flexGrow={1}
              textAlign={"left"}
            >
              Total income
            </chakra.span>
            <chakra.p
              color="#1E293B"
              fontSize="lg"
              textTransform="uppercase"
              fontWeight={"bold"}
            >
              {totalIncome}$
            </chakra.p>
          </Flex>
          <Flex flex={"1"} alignItems={"center"} justifyContent={"left"}>
            <chakra.span
              flexGrow={1}
              color="#9CA3AF"
              fontSize="lg"
              textTransform="capitalize"
              fontWeight="400"
              textAlign={"left"}
            >
              Total Expense
            </chakra.span>
            <chakra.p
              color="#1E293B"
              fontSize="lg"
              textTransform="uppercase"
              fontWeight="bold"
            >
              {totalExpense}$
            </chakra.p>
          </Flex>
        </Stack>
      </Flex>
      <Flex
        p={{
          base: 4,
          md: 8,
        }}
      >
        <Box
          borderRadius={2}
          borderWidth={1}
          borderStyle={"solid"}
          borderColor={"#E2E8F0"}
          bg="#F8FAFC"
          height={"100%"}
          w={"100%"}
        >
          <ChartDesign expense={totalExpense} income={totalIncome}/>
        </Box>
      </Flex>
    </SimpleGrid>
  );
};

export default Summary;
