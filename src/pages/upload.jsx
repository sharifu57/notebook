import React, { Component, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Image,
  Card,
  CardBody
} from "@chakra-ui/react";

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(false);

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    localStorage.setItem("uploadedImage", URL.createObjectURL(file));
  };

  const handleClearImage = () => {
    setSelectedImage(null);
    localStorage.removeItem("uploadedImage");
  };

//   const uploadedImage = localStorage.getItem("uploadedImage");

  return (
    <Box mt="100" w="full" style={{ backgroundColor: "#646cffaa" }}>
        <Card style={{ backgroundColor: "#646cffaa" }}>
            <CardBody>
                {!selectedImage && <input type="file" accept="image/*" onChange={handleFileChange} />}
                {selectedImage && (
                    <>
                    <Image
                        src={selectedImage}
                        alt="Uploaded"
                        boxSize="300px"
                        objectFit="contain"
                    />
                    <Button onClick={handleClearImage}>Clear Image</Button>
                    </>
                )}
            </CardBody>
        </Card>
      
    </Box>
  );
};

export default Upload;
