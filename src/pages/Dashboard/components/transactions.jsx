import { Box, Button, Divider, Flex, Grid, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { FaBitcoin } from "react-icons/fa";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { BiSolidDollarCircle } from "react-icons/bi";
import { Fragment } from "react";

export default function Transactions(){
    const transactions = [
        {
            id: "1",
            icon: TbCoinRupeeFilled,
            text: "INR Deposit",
            dateTime : "2022-06-09 7:06 PM",
            amount: "+ ₹81,123.10"
        },
        {
            id: "2",
            icon: FaBitcoin,
            text: "BTC Sell",
            dateTime : "2022-05-27 12:32 PM",
            amount: "- 12.48513391 BTC"
        },
        {
            id: "3",
            icon: BiSolidDollarCircle,
            text: "INR Deposit",
            dateTime : "2022-06-09 7:06 PM",
            amount: "+ ₹81,123.10"
        }
    ]
    return(
        <CustomCard>
            <Text fontSize={'sm'} color={'black.80'}>Recent Transactions</Text>
            <Stack spacing={4} py={5}>
                {
                    transactions.map((transaction, index) => (
                        <Fragment   key={transaction.id}>
                            {index != 0 && <Divider/>}
                            <Flex gap={4} w={'full'}>
                            <Grid placeItems={'center'} bg={'black.5'}  boxSize={10} borderRadius={'full'}>
                                <Icon  as={transaction.icon} />
                            </Grid>
                            <Flex justify={'space-between'} w={'full'}>
                                <Stack spacing={1}>
                                    <Text textStyle={'h6'} >{transaction.text}</Text>
                                    <Text fontSize={'sm'} color={'black.80'}>{transaction.dateTime}</Text>
                                </Stack>
                                <Text textStyle={'h6'}>{transaction.amount}</Text>
                            </Flex>
                        </Flex>
                        </Fragment>
                    ))
                }
            </Stack>
            <Button w={'full'} borderRadius={'xl'} colorScheme="gray">View All</Button>
        </CustomCard>
    )
}