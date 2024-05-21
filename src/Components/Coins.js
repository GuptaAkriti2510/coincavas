import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {Center,RadioGroup,Radio,Button,VStack, Text,Container,HStack, Drawer, useDisclosure, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Image} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";
import {ArrowLeftIcon, ArrowRightIcon,HamburgerIcon} from '@chakra-ui/icons'


const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page,setPage]=useState(1);
  const [currency,setCurrency]=useState("inr");
  const currencySymbol= 
    currency==="inr" ? "₹" : currency=== "eur" ? "€" : "$";

  const {isOpen,onOpen,onClose}=useDisclosure()
  const changePage=(newpage)=>{
    setPage(newpage);
    setLoading(true);
  };


  const getPrevPage=()=>{
    let newpage=page-1;
    if(newpage<1)
      newpage=132;
    changePage(newpage);
    console.log(`Previous ${newpage}`);
    return {newpage};
  } 
  const getNextPage=()=>{
    let newpage=page+1;
    if(newpage>132)
      newpage=1;
    changePage(newpage);
    console.log(`Next ${newpage}`);
    return {newpage};
  }


  const btns=new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency,page]);

  if (error)
    return <ErrorComponent message={"Error While Fetching Coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (<Loader />) : (
        <>
        <Center>
          <Button marginTop={6} onClick={onOpen} color={"black"} bgColor={"White"} alignItems={"center"}><HamburgerIcon/><Text marginLeft={4}> Choose Currency </Text> </Button>
          </Center>
          <Drawer placement="top" isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay></DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton></DrawerCloseButton>
              <DrawerHeader alignSelf={"center"}  color={'wheat'} fontSize={20} border={"0.2px solid grey"}>Available Currencies</DrawerHeader>
              <DrawerBody>
                <RadioGroup value={currency} onChange={setCurrency} p={"8"}  >
                  <HStack spacing={"30"} justifyContent={"center"}>
                    <Radio value="inr" fontSize={24}>INR (₹)</Radio>
                    <Radio value="usd">DOLLAR ($)</Radio>
                    <Radio value="eur">EURO (€)</Radio>
                  </HStack>  
                </RadioGroup>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          

          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard key={i.id} id={i.id} price={i.current_price}  name={i.name} img={i.image} symbol={i.symbol} currencySymbol={currencySymbol} />
            ))}
          </HStack>

          {/*               
          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {
              btns.map((item,index)=>(
                <Button key={index} bgColor={"blackAlpha.900"} color={"white"} onClick={()=>changePage(index+1)}>{index+1}</Button> 
              ))
            }
          </HStack>  */}

          {/* --------------------- Pagination Part ----------------- */}

          <HStack justifyContent={"center"} marginBottom={8}> 
            <Button onClick={()=>getPrevPage()}><ArrowLeftIcon></ArrowLeftIcon></Button>
            <p>{page} of {132}</p>
            <Button onClick={()=>getNextPage()}><ArrowRightIcon></ArrowRightIcon></Button>
          </HStack>

        </>
      )}
    </Container>
  );
};


export default Coins;




