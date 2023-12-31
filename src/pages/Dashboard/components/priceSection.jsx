import { Button, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import { CustomCard } from "../../../chakra/CustomCard"
import { FaInfoCircle } from "react-icons/fa"
import { MdArrowOutward } from "react-icons/md"
import { LuArrowUpFromLine } from "react-icons/lu"
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi"
export default function PriceSection(){
    const timeStamps = ["7:15 PM", "12:55 AM", "6:35 AM", "12:15 PM", "5:55 PM"]
    return(
        <CustomCard h={'full'}>
            <Flex justify={'space-between'} align={'start'}>
                <Stack>
                    <Text fontSize={'sm'} color={'black.80'} >Current Price</Text>
                    <HStack>
                        <Text textStyle={'h2'} fontWeight={'medium'}>₹26,670.25</Text>
                        <HStack fontWeight={'medium'} fontSize={'sm'} gap={'1'} color={'#059669'}>
                            <Icon as={MdArrowOutward} />
                            <Text>0.04%</Text>
                        </HStack>
                    </HStack>
                </Stack>
                <HStack>
                    <Button leftIcon={<Icon as={BiPlusCircle}/>} >Buy</Button>
                    <Button leftIcon={<Icon as={BiMinusCircle}/>}>Sell</Button>
                </HStack>
            </Flex>
            <Tabs variant='soft-rounded'>
                <Flex justify={'end'}>
                    <TabList borderRadius={'lg'} bg={'black.10'} gap={4} p={'3px'}>
                        {
                            ['1H', '1D', '1W', '1M'].map((item) => (
                                <Tab 
                                    fontSize={'sm'} 
                                    p={1}
                                    _selected={{
                                        bg: "white"
                                    }}
                                >
                                    {item}
                                </Tab>
                            ))
                        }
                    </TabList>
                </Flex>
                <TabPanels>
                    <TabPanel>
                        <Image
                            mt={'3rem'}
                            src="images/Graph.svg"
                        />
                        <HStack justify={'space-between'}>
                            {
                                timeStamps.map((item) => (
                                    <Text key={item} fontSize={'sm'} color={'black.80'}>{item}</Text>
                                ))
                            }
                        </HStack>
                    </TabPanel>
                    <TabPanel>
                    <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </CustomCard>
    )
}