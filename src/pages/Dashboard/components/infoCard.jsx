import { Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";

export default function InfoCard({imgUrl, text , tag , inverted }){
    return(
        <CustomCard flexGrow={1} boxShadow={'xl'} bg={inverted? 'p.purple' : 'white'} bgImage={imgUrl} bgSize={'cover'} bgRepeat={'no-repeat'}>
            <Tag bg={inverted? 'white' : 'p.purple'} color={inverted? 'p.purple' : 'white'} borderRadius={'xl'}>
                {tag}
            </Tag>
            <Text mt={'4'} fontWeight={'medium'} color={inverted? 'white' : 'p.black'} textStyle={'h5'}>{text}</Text>
        </CustomCard>
    )
}