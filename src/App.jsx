import { useState } from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import Main from "./components/main/main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container h={"100vh"} minW={["100%"," 640px","768px","1024px","1280px"]} mx={'auto'} height={"100vh"} p={"0"}>
      <Flex height={"full"}>
        <Box height={"full"} flex={"5"} w={["20%", "30%", "20%", "50%", "60%"]}>
          <Main />
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
