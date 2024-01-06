import {Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, Text, useMediaQuery} from '@chakra-ui/react'
import DashboardLayout from "../../components/dashboardLayout";
import { MdDownload } from 'react-icons/md';
import TransactionTable from './components/transactionTable';
import { RiSearchLine } from 'react-icons/ri';
import TransactionCard from './components/transactionCard';
export default function TransactionPage(){
    const [largerThan1000] = useMediaQuery('(min-width: 1000px)')
    const tabs = [
        {
            name: "All",
            count: 349
        },
        {
            name: "Deposit",
            count: 114
        },
        {
            name: "Withdraw",
            count: 213
        },
        {
            name: "Trade",
            count: 22
        }
    ]

// From base to 1220px use card and after that use table to show data
    return(
        <DashboardLayout title={'Transactions'} >
            <Flex justify={'end'} mb={3}>
                <Button leftIcon={<Icon as={MdDownload}/>}>
                    Export CSV
                </Button>
            </Flex>
           { largerThan1000 ?
            <Card 
            borderRadius={4}
            >
                <Tabs>
                    <Stack 
                    mt={3} ml={4}
                    spacing={4}
                    display={{
                        base: 'block',
                        lg: 'none'
                    }}
                    >
                        <InputGroup w={'280px'} pr={6}>
                            <InputLeftElement pointerEvents='none'>
                                <Icon as={RiSearchLine} />
                            </InputLeftElement>
                            <Input fontSize={'sm'} type='text' placeholder='Search By ID or Destination' />
                        </InputGroup>
                    </Stack>
                    <TabList pt={4} px={3} display={'flex'} w={'full'} justifyContent={'space-between'}>
                        <HStack>
                            {
                                tabs.map((tab) => (
                                    <Tab gap={2} pb={4}>
                                        <Text>{tab.name}</Text>
                                        <Tag borderRadius={'full'} colorScheme='gray' size={'sm'}>{tab.count}</Tag>
                                    </Tab>
                                ))
                            }
                        </HStack>
                        <Stack 
                        spacing={4}
                        display={{
                            base: 'none',
                            lg: 'block'
                        }}
                        >
                            <InputGroup w={'280px'} pr={6}>
                                <InputLeftElement pointerEvents='none'>
                                    <Icon as={RiSearchLine} />
                                </InputLeftElement>
                                <Input fontSize={'sm'} type='text' placeholder='Search By ID or Destination' />
                            </InputGroup>
                        </Stack>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <TransactionTable/>
                        </TabPanel>
                        <TabPanel>
                            <TransactionTable/>
                        </TabPanel>
                        <TabPanel>
                            <TransactionTable/>
                        </TabPanel>
                        <TabPanel>
                            <TransactionTable/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Card>
            :
            <Card 
            mx={2}
            borderRadius={4}
            >
                <Tabs>
                    <Stack mt={3} ml={4} spacing={4}>
                        <InputGroup w={'280px'} pr={6}>
                            <InputLeftElement pointerEvents='none'>
                                <Icon as={RiSearchLine} />
                            </InputLeftElement>
                            <Input fontSize={'sm'} type='text' placeholder='Search By ID or Destination' />
                        </InputGroup>
                    </Stack>
                    <TabList pt={3} px={3} display={'flex'} w={'full'} justifyContent={'space-between'}>
                        <HStack>
                            {
                                tabs.map((tab) => (
                                    <Tab  
                                        gap={2}
                                        px={{
                                            base: 1,
                                            sm: 3,
                                            md: 2
                                        }}
                                        pb={4}>
                                        <Text
                                            fontSize={{
                                                base: 'sm',
                                                sm: '18px'
                                            }}
                                        >{tab.name}</Text>
                                        <Tag 
                                            borderRadius={'full'} 
                                            colorScheme='gray' 
                                            size={'sm'}
                                            display={{
                                                base: 'none',
                                                md: 'block'
                                            }}
                                            >
                                                {tab.count}
                                            </Tag>
                                    </Tab>
                                ))
                            }
                        </HStack>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <TransactionCard/>
                        </TabPanel>
                        <TabPanel>
                            <TransactionCard/>
                        </TabPanel>
                        <TabPanel>
                            <TransactionCard/>
                        </TabPanel>
                        <TabPanel>
                            <TransactionCard/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Card>
            }
        </DashboardLayout>
    )
}