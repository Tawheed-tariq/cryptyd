import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import Sidenav from "./sidenav";
import Topnav from "./topnav";
import SideDrawer from "./SideDrawer";
import PortfolioSection from "../pages/Dashboard/components/portfolioSection";

export default function DashboardLayout({title, children}){
    const {isOpen, onClose, onOpen} = useDisclosure() //this is a hook that provides 3 properties as written
    return(
        <Box>
            <Flex>
                <Box
                    display={{
                        base: "none",
                        md: "flex"
                    }}
                >
                    <Sidenav/>
                </Box>
                <SideDrawer isOpen={isOpen} onClose={onClose}/>
                <Box flexGrow={'1'}>
                    <Topnav title={title} onOpen={onOpen}/>
                    <Container mt={'6'} maxW={'70rem'} px={'4'}>
                        {children}
                    </Container>
                </Box>
            </Flex>
        </Box>
    )
}