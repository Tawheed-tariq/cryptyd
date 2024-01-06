import { Card, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react"
import { tableData , statusColor } from "./data"
import { RiArrowDownDoubleFill } from "react-icons/ri"
export default function TransactionCard() {
    return(
        <Card
            w={'calc(100%)'}
            border={'none'}
            p={2}
        >
            {
                tableData.map((data) => (
                    <Stack 
                        p={'2'}
                        border={'solid'}
                        borderColor={'black.60'}
                        borderWidth={'2px'}
                        mb={2}
                        >
                        <HStack display={'flex'} justify={'space-between'}>
                            <Text fontSize={'sm'} color={'black.60'}>ID</Text>
                            <Text fontSize={'sm'} fontWeight={'medium'}>
                                {data.id}
                            </Text>
                        </HStack>

                        <HStack display={'flex'} justify={'space-between'}>
                            <Text fontSize={'sm'} color={'black.60'}>Date & Time</Text>
                            <Stack spacing={0}>
                                <Text fontSize={'sm'} fontWeight={'medium'}>{data.date}</Text>
                                <Text fontSize={'xs'} color={'black.60'}>{data.time}</Text>
                            </Stack>
                        </HStack>

                        <HStack display={'flex'} justify={'space-between'}>
                            <Text fontSize={'sm'} color={'black.60'}>Type</Text>
                            <Stack spacing={0}>
                                <Text fontSize={'sm'} fontWeight={'medium'}>{data.type.name}</Text>
                                <Text fontSize={'xs'} color={'black.60'}>{data.type.tag}</Text>
                            </Stack>
                        </HStack>

                        <HStack display={'flex'} justify={'space-between'}>
                            <Text fontSize={'sm'} color={'black.60'}>Amount</Text>
                            <Text fontSize={'sm'} fontWeight={'medium'}>{data.amount}</Text>
                        </HStack>

                        <HStack display={'flex'} justify={'space-between'}>
                            <Text fontSize={'sm'} color={'black.60'}>Status</Text>
                            <Text fontSize={'sm'} fontWeight={'medium'}>
                                <Tag bg={statusColor[data.status]} borderRadius={'full'} py={1} px={2} color={'white'}>
                                    {data.status}
                                </Tag>
                            </Text>
                    </HStack> 
                </Stack>
                ))
            }
        </Card>
    )
}
 