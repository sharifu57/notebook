import { useState, useEffect } from "react";
import { fetchNotes } from "../providers/api/notes";
import { Card, Box, CardBody } from "@chakra-ui/react";

function Notes() {
  const [notes, setNotes] = useState([]);

  const fetchNotesData = async () => {
    try {
      const response = await fetchNotes();
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    fetchNotesData();
  }, []);

  console.log("---notes");
  console.log(notes);

  return (
    <div>
      {notes.map((note, index) => (
        <div key={index}>
          <Box
            mt="5"
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{ backgroundColor: "#ffffff" }}
          >
            <Card overflow="hidden" style={{ backgroundColor: "#646cffaa" }}>
              <CardBody>
                <p>{note.title}</p>
              </CardBody>
            </Card>
          </Box>
        </div>
      ))}
    </div>
  );
}

export default Notes;
