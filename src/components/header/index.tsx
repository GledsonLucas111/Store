import logo from "../../assets/morena-flor-logo.jpeg";
import Image from "next/future/image";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { MdCall } from "react-icons/md";

const Header = () => {
  return (
    <Flex h="15vh" align="center" justify="space-around">
        <Image src={logo} alt="logo-morena-flor" width={130} />

        <Flex align="center" gap={3}>
            <MdCall size={30} color="#F90764"/>
            <Box>
                <Text as="b">telefone: (00) 90011-0011</Text>
                <br/>
                <Text as="b">email: email@chakra-ui.com</Text>
            </Box>
        </Flex>
    </Flex>
  );
};

export default Header;
