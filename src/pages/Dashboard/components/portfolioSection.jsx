import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import {LuArrowUpFromLine} from 'react-icons/lu'
export default function PortfolioSection(){
    return(
        <HStack 
        justify={'space-between'} 
        bg={'white'} 
        p={'6'} 
        borderRadius={'xl'} 
        align={{
            base: "flex-start",
            xl: "center"
        }}
        flexDir={{
            base:"column",
            xl: "row"
        }}
        >
            <HStack gap={{
                base:"4",
                lg: "16"
            }} 
            align={{
                base: "flex-start",
                lg: "center",
            }}
            flexDir={{
                base:"column",
                lg: "row",
            }}>
                <Stack>
                    <HStack fontSize={'sm'} color={'black.80'}>
                        <Text >Total Portfolio Value</Text>
                        <Icon as={FaInfoCircle} />
                    </HStack>
                    <Text 
                        textStyle={{
                            base:'h5',
                            sm:'h4',
                            md: 'h3'
                        }} 
                        fontWeight={'medium'}>₹ 112,312.24</Text>
                </Stack>
                <Stack>
                    <Text fontSize={'sm'} color={'black.80'}>Wallet Balances</Text>
                    <HStack 
                        gap={{
                            base: "4",
                            sm: "8"
                        }} 
                        align={{
                            base: "flex-start",
                            sm: "center",
                        }}
                        flexDir={{
                            base:"column",
                            sm: "row",
                        }}
                    >
                        <HStack> 
                            <Text 
                                textStyle={{
                                    base:'h5',
                                    sm:'h4',
                                    md: 'h3'
                                }} 
                                fontWeight={'medium'}>22.39401000</Text>
                            <Tag size={'sm'} color={'black.60'}>BTC</Tag>
                            {/* <Text px={'6px'} py={'4px'} fontSize={'12px'} bg={'black.5'} color={'black.60'} borderRadius={'full'}>BTC</Text> */}
                        </HStack>
                        <HStack> 
                            <Text 
                                textStyle={{
                                    base:'h5',
                                    sm:'h4',
                                    md: 'h3'
                                }}
                                fontWeight={'medium'}>₹ 1,300.00</Text>
                            <Tag 
                                size={'sm'}
                                color={'black.60'}>INR</Tag>
                        </HStack>
                    </HStack>
                </Stack>
            </HStack>
            <HStack
                gap={{
                    base: "4",
                    sm: "auto"
                }}
                align={{
                    base: "flex-start",
                    sm: "center",
                }}
                flexDir={{
                    base:"column",
                    sm: "row",
                }} 
            >
                <Button size={{
                    base: 'sm',
                    md: 'md'
                }} leftIcon={<Icon as={MdOutlineFileDownload}/>} >Deposit</Button>
                <Button
                    size={{
                        base: 'sm',
                        md: 'md'
                    }}
                    leftIcon={<Icon as={LuArrowUpFromLine}/>}
                 >
                    Withdrawal
                </Button>
            </HStack>
        </HStack>
    )
}