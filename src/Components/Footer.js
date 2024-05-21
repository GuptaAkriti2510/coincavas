import React from 'react'
import { Box, Stack, VStack,Text, Image,HStack, Divider } from '@chakra-ui/react'
import img2 from '../assets/SGS27701.webp'
import img3 from '../assets/SGS27001.webp'
import img4 from '../assets/AICPA.webp'
import img5 from '../assets/PCI.webp'
const Footer = () => {
  return (
    <Box bgColor={'rgb(2,4,31)'} color={"whiteAlpha.700"} minH={"30"} px={"16"} py={["16","8"]}>
        <Stack direction={["column","row"]} h={"full"} alignItems={"center"}>
            <VStack  w="full" alignItems={["center","flex-start"]}>
                <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]} >Crafted by a cryptocurrency enthusiast, dedicated to revolutionizing how you interact with digital assets!
                Commitment to transparency, innovation, and user experience, 
                Striving to be your trusted companion in the ever-evolving landscape of blockchain technology.
                <br></br>
                Welcome to the future of finance!</Text>
                <Divider borderWidth="1px" marginBottom={1}></Divider>
                <Text >Copyright © 2018 - 2024 Crypto.com. All rights reserved.</Text>   
            </VStack>
           
            <VStack >
              <HStack>                 
                  <Image src={img2} borderRadius={10} w={12}></Image>
                  <Image src={img3} borderRadius={10} w={12}></Image>      
              </HStack>
              <HStack>
                  <Image src={img4} borderRadius={10} w={12}></Image>
                  <Image src={img5} borderRadius={10} w={12}></Image>  
              </HStack>
            </VStack>
            
        </Stack>
    </Box>
  )
}

export default Footer
