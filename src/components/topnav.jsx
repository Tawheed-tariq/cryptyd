import { Box, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import {FaRegUserCircle, FaBars} from 'react-icons/fa'
export default function Topnav({title, onOpen}){
    return(
        <Box px={'4'} bg={'white'}>
            <HStack maxW={'70rem'} mx={'auto'} height={'16'} justify={'space-between'} px={'9'}>
                <Icon as={FaBars} cursor={'pointer'} fontSize={'28px'} onClick={onOpen} display={{base:'block', md:"none"}}/>
            <Heading fontSize={'28px'}>{title}</Heading>
            <Menu>
                <MenuButton >
                    <Icon fontSize={'28px'} as={FaRegUserCircle}/>
                </MenuButton>
                <MenuList>
                    <MenuItem>Logout</MenuItem>
                    <MenuItem>Support</MenuItem>
                </MenuList>
            </Menu>
        </HStack>
        </Box>
    )
}