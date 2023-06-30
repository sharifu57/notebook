import {
  Card,
  Heading,
  Button,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  Stack,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  SimpleGrid,
  useToast,
  Wrap
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { loginUser } from "../providers/api/user";
import { post  } from "../providers/api/request"


const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const endpoint = "/login"

function Login() {
  const toast = useToast()
  const statuses = ['success', 'error', 'warning', 'info']
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);
  const [showPassword, setPassword] = useState(false);
  const [status, seStatus] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let form = new FormData(e.target);
    let username = form.get("username");
    let password = form.get("password");

    console.log(username, password);
    const payload = {
      username: username,
      password: password
    };

    console.log(payload)

    try {
      const res = await post(BASE_URL+endpoint, payload);
      console.log(res);
      if(res?.status == 200){
        setLoading(false);
        e.target.reset()
      }else{
        setLoading(false);
        seStatus(true)
        setResponse(res?.message)
      }
      
    } catch (error) {
      setLoading(false);
      console.log("Error:", error);
      throw error;
    }
    

  };
  return (
    <Box
      mt="20"
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{ backgroundColor: "#ffffff" }}
    >
      <Box w="full" maxW="5xl">
        <Card overflow="hidden" style={{ backgroundColor: "#646cffaa" }}>
          <SimpleGrid>
            <Box py="20" px="12">
              <Heading size="lg" mb="10">
                Notebook
              </Heading>


              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <FormControl w="full">
                    <FormLabel>Email address</FormLabel>
                    <Input size="lg" type="email" name="username" />
                  </FormControl>

                  <FormControl w="full">
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        size="lg"
                        type={showPassword ? "text" : "password"}
                        name="password"
                      />
                      <InputRightElement>
                        <IconButton
                          mt="2"
                          mr="2"
                          variant="ghost"
                          icon={!showPassword ? <ViewIcon /> : <ViewOffIcon />}
                          onClick={() => setPassword(!showPassword)}
                        />
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>

                  

                  {isLoading? <Stack direction='row' spacing={4}>
                    <Button
                      w="full"
                      isLoading
                      loadingText='please wait...'
                      colorScheme='teal'
                      variant='outline'
                    >
                      Submit
                    </Button>
                  </Stack> : <Box mt="1">
                    <Button
                      w="full"
                      type="submit"
                      size="lg"
                    >
                      Sign in 
                    </Button>
                  </Box>}
                  
                </Stack>
              </form>

              <Box mt={1}>
                {response && (
                    <Alert status="error" variant="subtle">
                    <AlertIcon />
                    <Box>
                      <AlertTitle>Failed!</AlertTitle>
                      <AlertDescription>
                        {response}
                      </AlertDescription>
                    </Box>
                    <CloseButton
                      alignSelf='flex-start'
                      position='relative'
                      right={-1}
                      top={-1}
                      onClick={()=>setResponse(false)}
                    />
                    </Alert>
                )}
              </Box>
            </Box>
          </SimpleGrid>
        </Card>
      </Box>
    </Box>
  );
}

export default Login;
