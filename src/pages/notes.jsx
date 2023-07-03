import { useState, useEffect } from "react";
import { fetchNotes } from "../providers/api/notes";
import {
  Card,
  Box,
  CardBody,
  Spinner,
  CardHeader,
  Heading,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Container,
} from "@chakra-ui/react";

// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
// } from '@chakra-ui/react'

function Notes() {
  // const [isOpen, onOpen, onClose] = useDisclosure();
  // const initialRef = React.useRef(null);
  // const finalRef = React.useRef(null);
  const [notes, setNotes] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchNotesData = async () => {
    try {
      const response = await fetchNotes();
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    const fetchDataWithDelay = async () => {
      const promise = new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
      await promise;
      await fetchNotesData();
    };
    fetchDataWithDelay();
  }, []);

  console.log("---notes");
  console.log(notes);

  return (
    <div>
      {loader ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <div>
          <Container maxW="container.xl">
            <Card mt={3}>
              <CardHeader
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Heading size="md">Client Report</Heading>
                </div>
                <div>
                  <Button >Add New</Button>

                  {/* <Model>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Create your account</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody pb={6}>
                        <FormControl>
                          <FormLabel>First name</FormLabel>
                          <Input  placeholder="First name" />
                        </FormControl>

                        <FormControl mt={4}>
                          <FormLabel>Last name</FormLabel>
                          <Input placeholder="Last name" />
                        </FormControl>
                      </ModalBody>

                      <ModalFooter>
                        <Button colorScheme="blue" mr={3}>
                          Save
                        </Button>
                        <Button >Cancel</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Model> */}
                </div>
              </CardHeader>
              <CardBody>
                <TableContainer>
                  <Table size="sm">
                    <Thead>
                      <Tr>
                        <Th>ID</Th>
                        <Th>title</Th>
                        <Th>content</Th>
                        <Th>Created</Th>
                        <Th>Action</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {notes.map((note) => (
                        <Tr>
                          <Td>{note.id}</Td>
                          <Td>{note.title}</Td>
                          <Td>{note.content}</Td>
                          <Td>{note.created}</Td>
                          <Td>Action</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </CardBody>
            </Card>
          </Container>
        </div>
      )}
    </div>
  );
}

export default Notes;
