import {Flex,Icon, Stack, Text } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";

export default function SupportCard({leftComponent, icon , title, text}){
    return(
        <Flex  
            gap={6} 
            px={{
                base:1,
                sm: 6,
                md: 12,
                lg: 16
            }}
            flexDir={{
                base: 'column',
                lg: 'row'
            }} >
            <Stack spacing={2} p={3} maxW={'380px'}>
                <Icon boxSize={'6'} color={'p.purple'} as={icon}/>
                <Text fontWeight={'medium'} textStyle={'h1'}>{title}</Text>
                <Text fontSize={'sm'} color={'black.80'}>{text}</Text>
            </Stack>
            {leftComponent}
        </Flex>
    )
}