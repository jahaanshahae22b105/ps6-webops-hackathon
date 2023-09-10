import { Box, Button, Center, Flex, Heading, IconButton, Image, InputGroup, InputLeftElement } from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Link,
    Text
  } from '@chakra-ui/react';
import { DASHBOARD, LOGIN } from "../../data/routes";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {useAuth, useRegister} from "../../hooks/auth";
import { useForm } from "react-hook-form";
import { emailValidate, passwordValidate, usernameValidate, nameValidate, rollNoValidate, phoneNoValidate, kaggleIDValidate } from "../../utils/form-validate";

import { useEffect } from "react";


export default function Register(){


    //to check if user is already logged in. navigate to dashboard.
    const navigate = useNavigate();
    const {user, isLoading: authIsLoading} = useAuth();
    useEffect(() => {

        if (user)
        {
            navigate(DASHBOARD);
        }
        
    }, [user, authIsLoading])





    const {register : signup, isLoading} = useRegister();

    const {
        register, 
        handleSubmit, 
        reset,
        formState: {errors},
    } = useForm();

    

    async function handleRegister (data) {
       
        const succeeded = await signup({
            username: data.username,
            email: data.email,
            password: data.password,
            
            firstname: data.firstname,
            lastname: data.lastname,
            redirectTo: DASHBOARD,
        });

        if (succeeded) reset();
    }



    






    return (
        <Center w="100%" h="100vh" 
                backgroundImage={"url('https://firebasestorage.googleapis.com/v0/b/hackathonportalmvp.appspot.com/o/body-background.png?alt=media&token=5629b9af-87cb-40ab-b678-79dead48845d')"} 
                backgroundPosition="center" 
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                >
            <Box w="-moz-max-content" h="-moz-max-content"  p="9"  >
                <Heading mb="4" size="md" color="whitesmoke" textAlign="left">
                    Sign Up
                </Heading>
            
                <form onSubmit={handleSubmit(handleRegister)}>
            <Flex gap={9} flexDirection={"column"}>

                
                        <FormControl isInvalid={errors.firstname} py="2">
                            <FormLabel fontSize="12" color="whitesmoke">First Name</FormLabel>
                            <Input 
                                placeholder="" 
                                size="lg"
                                fontSize="13"
                                color="white"
                                backgroundColor="rgba(255, 255, 255, 0.2)"
                                {...register('firstname', nameValidate)} 
                            />
                            <FormErrorMessage>{errors.firstname && errors.firstname.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.lastname} py="2">
                            <FormLabel fontSize="12" color="whitesmoke">Last Name</FormLabel>
                            <Input 
                                placeholder="" 
                                size="lg"
                                fontSize="13"
                                color="white"
                                backgroundColor="rgba(255, 255, 255, 0.2)"
                                {...register('lastname', nameValidate)} 
                            />
                            <FormErrorMessage>{errors.lastname && errors.lastname.message}</FormErrorMessage>
                        </FormControl>

                    
                    
                        

                    
                    
                
                    <FormControl isInvalid={errors.username} py="2">
                        <FormLabel fontSize="12" color="whitesmoke">Username</FormLabel>
                        <Input 
                            placeholder="" 
                            size="lg"
                            fontSize="13"
                            color="white"
                            backgroundColor="rgba(255, 255, 255, 0.2)"
                            {...register('username', usernameValidate)} 
                        />
                        <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
                    </FormControl>


                    <FormControl isInvalid={errors.email} py="2">
                        <FormLabel fontSize="12" color="whitesmoke">Email</FormLabel>
                        <Input 
                            type='email' 
                            placeholder=""
                            size="lg"
                            fontSize="13" 
                            color="white"
                            backgroundColor="rgba(255, 255, 255, 0.2)"
                            {...register('email', emailValidate)} 
                        />
                        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.password} py="2">
                        <FormLabel fontSize="12" color="whitesmoke">Password</FormLabel>
                        <Input 
                            type='password' 
                            placeholder="" 
                            size="lg"
                            fontSize="13"
                            color="white"
                            backgroundColor="rgba(255, 255, 255, 0.2)"
                            {...register('password', passwordValidate)} 
                        />
                        <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                    </FormControl>

                    <Center >
                                    <Button mr="1" size="lg"  fontSize="13" width="full" color="white" _hover={{color: "black", backgroundColor: "whitesmoke", transition: "0.4s"}} backgroundColor="#668cff" type="submit"  isLoading={isLoading}>
                                        Create Account
                                    </Button>
                    </Center>
                    
                    

            </Flex>
                </form>

                <Center>
                    <Text mt={5} fontSize="13" color={"whitesmoke"}>
                        Already have an account?{" "}
                        <Link as={RouterLink} to={LOGIN} color="whitesmoke" fontWeight="md" fontSize="13" _hover={{background: 'blue:100'}} textDecor="underline">
                            Log In
                        </Link>
                    </Text>
                </Center>
                {/*<Center>
                    <Text mt="10" fontSize="13">
                        or sign in with
                    </Text>
                </Center>
                <Center>
                    <IconButton mt="2" icon={<FaGoogle/>} onClick={handleSignInWithGoogle} borderRadius="50vh" size="md" fontSize="12" width="vh" colorScheme="gray"  isLoading={false}>

                    </IconButton>
    </Center>*/}
                


            </Box>
        </Center>
    )
}