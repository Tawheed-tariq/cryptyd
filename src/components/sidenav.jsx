import {Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import {RxDashboard} from 'react-icons/rx'
import {TbArrowsDownUp} from 'react-icons/tb'
import {MdSupportAgent} from 'react-icons/md'
import {Link, useLocation} from 'react-router-dom'
export default function Sidenav(){
    const location = useLocation()
    const isActiveLink = (link) => {
        return location.pathname === link
    }
    const navLinks = [
        {
          icon: RxDashboard,
          text: "Dashboard",
          link: "/"
        },
        {
          icon: TbArrowsDownUp,
          text: "Transactions",
          link: "/transactions"
        }
      ]
    return(
        <Stack  bg={'white'} justify={'space-between'} boxShadow={{base:"none", md:"lg"}} w={{base:"full", md:"256px"}} height={{base:"100%", md:"100vh"}}>
            <Box >
                <Heading textAlign={'center'} as={'h1'} pt={'3rem'} fontSize={'20px'}>@Crypto Crap</Heading>
                <Box mt={'5'} mx={'3'}>
                    {
                        navLinks.map((nav) => (
                            <Link to={nav.link} key={nav.text}>
                                <HStack 
                                cursor={'pointer'}
                                py={'12px'} 
                                px={'16px'} 
                                borderRadius={'10px'}
                                _hover={{
                                    bg:"#F3F3F7",
                                    color: "#171717"
                                }}
                                bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                                color={ isActiveLink(nav.link) ? "#171717" :'#797E82'}
                                >
                                    <Icon as={nav.icon}/>
                                    <Text fontSize={'14px'} fontWeight={'medium'}>{nav.text}</Text>
                                </HStack>
                            </Link>
                        ))
                    }
                </Box>
            </Box>
            <Box mb={'5'} mx={'3'}>
                <Link to={'/support'}>
                    <HStack 
                        cursor={'pointer'}
                        py={'12px'} 
                        px={'16px'} 
                        borderRadius={'10px'}
                        _hover={{
                            bg:"#F3F3F7",
                            color: "#171717"
                        }}
                        bg={isActiveLink('/support') ? "#F3F3F7" : "transparent"}
                        color={ isActiveLink('/support') ? "#171717" :'#797E82'}
                        >
                            <Icon as={MdSupportAgent}/>
                            <Text fontSize={'14px'} fontWeight={'medium'}>Support</Text>
                    </HStack>
                </Link>
            </Box>
        </Stack>
    )
}