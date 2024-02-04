import { Box, Button, Card, Checkbox, FormControl, FormLabel, HStack,  Input, Stack, Text, Textarea } from "@chakra-ui/react";
export default function ContactCard(){
    return(
        <Card p={6} gap={4} flexGrow={1}>
        <Text fontWeight={'medium'} fontSize={'md'}>
            You will receive response within 24 hours of time of submit.
        </Text>
        
        <Checkbox >
            <Text fontSize={'xs'}>
                I agree with 
                <Box as="span" color={'p.purple'}> Terms & Conditions.</Box>
            </Text>
        </Checkbox>
        <Stack>
            <Button fontSize={'md'}  colorScheme="purple">
                Send a Message
            </Button>
            <Button fontSize={'md'} color={'p.black'} colorScheme="gray">
                Book a Meeting
            </Button>
        </Stack>
    </Card>

    )
}