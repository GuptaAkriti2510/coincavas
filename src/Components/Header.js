import { Button, HStack,Image,Spacer,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../assets/btc.png";


const Header = () => {
  return (
    <>
      <HStack p={4} shadow={'base'} paddingLeft={20} paddingRight={20} bgColor={'rgb(2,4,31)'}>
        <Button color={'white'} _hover={{color:"wheat"}} variant={"no-highlight"} fontSize={27}><Link to={'/'}>Home</Link></Button>
        <Button color={'white'} _hover={{color:"wheat"}} variant={"no-highlight"} fontSize={27}><Link to={'/exchanges'}>Exchanges</Link></Button>
        <Button color={'white'} _hover={{color:"wheat"}} variant={"no-highlight"} fontSize={27}><Link to={'/coins'}>Coins</Link></Button>
        <Spacer></Spacer>
        <Image src={img1} w={12} h={12} filter="greyscale(10)"></Image>
        <Text fontSize={30} filter={"brightness(0.6)"}>CoinCanvas</Text>
        
      </HStack>
    </>
  )
}

export default Header;
