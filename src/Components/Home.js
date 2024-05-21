import { Box, Center,  HStack, Image, Text, VStack } from '@chakra-ui/react'
import {motion} from "framer-motion";
import React from 'react'
import {CheckCircleIcon} from '@chakra-ui/icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ca5 from "../assets/carousel1.avif";
import ca2 from "../assets/carousel2.jpg";
import ca3 from "../assets/carousel3.webp";
import ca4 from "../assets/carousel4.jpeg";
import ca1 from "../assets/carousel5.jpg";

const Home = () => {
  return (
    <>
    <Center w={"full"} h={"100vh"}  >
      <Box>
          <Text fontSize={50} fontFamily={"Times New Roman"} ><b>Discover, track, and trade cryptocurrencies effortlessly !!</b></Text>
          <motion.div
          animate={{translateY:"-10px"}}
          transition={{duration: 2,repeat:Infinity,repeatType:"reverse"}} >
            <Text filter="brightness(0.6)" marginTop={1}  align={'center'} fontSize={20}>Explore Exchanges, Monitor Live Prices, Analyze Trends and Access Extensive Coin Information </Text>
          </motion.div>
          
          
          <VStack  marginTop={14} fontSize={30}>
            <HStack  >
              <CheckCircleIcon color={'wheat'}></CheckCircleIcon>
              <Text>Compare 200+ coins and exchanges</Text>
            </HStack>
            <HStack >
              <CheckCircleIcon color={'wheat'}></CheckCircleIcon>
              <Text>Trade with different fiat currencies and Apple/Google Pay</Text>
            </HStack>
            <HStack>
              <CheckCircleIcon color={'wheat'}></CheckCircleIcon>
              <Text>Trusted by over 80 million users worldwide</Text>
            </HStack>
          </VStack>
              
      </Box>
    </Center>
    
    <Carousel autoPlay infiniteLoop  interval={1000} showArrows={false} showStatus={false} showThumbs={false}>
      <Box padding={40} alignItems="center" justifyContent="center" >
        <Image src={ca1} alt='NO' width={'400px'} height={'700px'} borderRadius={50} boxShadow="5px 5px 5px 5px rgb(204, 153, 0)"></Image>
      </Box>
      <Box padding={40} display="flex" alignItems="center" justifyContent="center">
        <Image src={ca2} alt='NO' width={'400px'} height={'700px'} borderRadius={50} boxShadow="5px 5px 5px 5px rgb(204, 153, 0)"></Image>
      </Box>
      <Box padding={40} display="flex" alignItems="center" justifyContent="center">
        <Image src={ca3} alt='NO' width={'400px'} height={'700px'} borderRadius={50} boxShadow="5px 5px 5px 5px rgb(179, 134, 0)"></Image>
      </Box>
      <Box padding={40} display="flex" alignItems="center" justifyContent="center">
        <Image src={ca4} alt='NO' width={'400px'} height={'700px'} borderRadius={50} boxShadow="5px 5px 5px 5px rgb(204, 153, 0)"></Image>
      </Box>
      <Box padding={40} display="flex" alignItems="center" justifyContent="center">
        <Image src={ca5} alt='NO' width={'400px'} height={'700px'} borderRadius={50} boxShadow="5px 5px 5px 5px rgb(204, 153, 0)"></Image>
      </Box>      
    </Carousel>
   
         
  
      
     
    </>
    // <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
    //     <motion.div 
    //       style={{height:"80vh"}} 
    //       animate={{translateY:"20px"}} 
    //       transition={{duration: 2,repeat:Infinity,repeatType:"reverse"}} >
    //       <Image w={"full"} h={"full"} objectFit={"contain"} src={img1} filter={"grayscale(1)"}></Image>
    //     </motion.div>
    //     <Text fontSize={"6xl"} textAlign={"center"} fontWeight={"thin"} color={"whiteAlpha.700"} mt={"-20"}>CRYPTOLOGY</Text>
    // </Box>
  );
};

export default Home;


// import { Carousel} from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';


// const headingOptions={
//   position:"absolute",
//   left:"50%",
//   top:"50%",
//   transform:"translate(-50%,-50%)",
//   textTransform:"uppercase",
//   padding:'4',
//   size:"4xl"
// }

// const Home = () => {
//     return (
//       <Box>
//         <Carousel autoPlay infiniteLoop interval={1000} showArrows={false} showStatus={false} showThumbs={false}>
//           <Box width={'full'} height={'100vh'}>
//               <Image src={img1} alt='No'></Image>
//               <Heading backgroundColor={'black'} color={'white'} {...headingOptions}>Watch The Future</Heading>
//           </Box>
//           <Box width={'full'} height={'100vh'}>
//               <Image src={img2} alt='No'></Image>
//               <Heading backgroundColor={'black'} color={'white'} {...headingOptions}>Future is gaming</Heading>
//           </Box>
//           <Box width={'full'} height={'100vh'}>
//               <Image src={img3} alt='No'></Image>
//               <Heading backgroundColor={'black'} color={'white'} {...headingOptions}>Watch The Future</Heading>
//           </Box>
//           <Box width={'full'} height={'100vh'}>
//               <Image src={img4} alt='No'></Image>
//               <Heading backgroundColor={'black'} color={'white'}  {...headingOptions}>Watch The Future</Heading>
//           </Box>
//         </Carousel>
