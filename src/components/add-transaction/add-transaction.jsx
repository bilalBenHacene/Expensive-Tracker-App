import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useRef } from "react";
import  { GlobalContext } from "../../context/context";

const AddTransaction = () => {
  const { value, setValue, formData, setFormData, handleFormSubmit } =
    useContext(GlobalContext);
  const handleFormChanging = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(formData);
    
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Button onClick={onOpen} bg={"blue.500"} ml={"4"}>
        Add New Transaction
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <form onSubmit={handleSubmit}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add new Transaction</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <RadioGroup
                display={"flex"}
                w={"full"}
                mt={2}
                mb={4}
                pb={2}
                borderBottom={"1px #eeeeee solid"}
                value={value}
                onChange={setValue}
              >
                <Radio
                  flexGrow={1}
                  value="income"
                  checked={formData.type === "income"}
                  name="type"
                  onChange={handleFormChanging}
                >
                  Income
                </Radio>
                <Radio
                  flexGrow={1}
                  value="expense"
                  checked={formData.type === "expense"}
                  name="type"
                  onChange={handleFormChanging}
                >
                  Expense
                </Radio>
              </RadioGroup>
              <FormControl>
                <FormLabel>Transactions amount</FormLabel>
                <Input
                  ref={initialRef}
                  type="number"
                  placeholder="Transactions amount ..."
                  onChange={handleFormChanging}
                  name="amount"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Input
                  placeholder="Description ..."
                  onChange={handleFormChanging}
                  name="description"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" onClick={onClose} colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};
export default AddTransaction;
