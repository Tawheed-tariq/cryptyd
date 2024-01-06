import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Icon,
    Text,
    Stack,
    Tag,
  } from '@chakra-ui/react'
  import {RiArrowDownDoubleFill} from 'react-icons/ri'
  import {tableData, statusColor} from './data'
export default function TransactionTable(){
      
    return(
        <TableContainer >
            <Table variant='simple' colorScheme='gray'>
                {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                <Thead>
                <Tr>
                    <Th>ID</Th>
                    <Th>Date & Time <Icon as={RiArrowDownDoubleFill}/> </Th>
                    <Th>Type </Th>
                    <Th>Amount <Icon as={RiArrowDownDoubleFill}/></Th>
                    <Th>Status</Th>
                </Tr>
                </Thead>
                <Tbody 
                color={'p.black'}>
                    {
                        tableData.map((data) => (
                            <Tr>
                                <Td fontSize={'sm'} fontWeight={'medium'}>
                                    {data.id}
                                </Td>
                                <Td>
                                    <Stack spacing={0}>
                                        <Text fontSize={'sm'} fontWeight={'medium'}>{data.date}</Text>
                                        <Text fontSize={'xs'} color={'black.60'}>{data.time}</Text>
                                    </Stack>
                                </Td>
                                <Td>
                                    <Stack spacing={0}>
                                        <Text fontSize={'sm'} fontWeight={'medium'}>{data.type.name}</Text>
                                        <Text fontSize={'xs'} color={'black.60'}>{data.type.tag}</Text>
                                    </Stack>
                                </Td>
                                <Td fontSize={'sm'} fontWeight={'medium'}>{data.amount}</Td>
                                <Td fontSize={'sm'} fontWeight={'medium'}>
                                    <Tag bg={statusColor[data.status]} borderRadius={'full'} py={1} px={2} color={'white'}>
                                        {data.status}
                                    </Tag>
                                    
                                </Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </TableContainer>
    )
}