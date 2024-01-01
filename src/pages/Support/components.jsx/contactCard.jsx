import { Box, Button, Card, Checkbox, FormControl, FormLabel, HStack,  Input, Stack, Text, Textarea } from "@chakra-ui/react";
export default function ContactCard(){
    return(
        <Card p={6} gap={4} flexGrow={1}>
        <Text fontWeight={'medium'} fontSize={'md'}>
            You will receive response within 24 hours of time of submit.
        </Text>
        <HStack 
            gap={3}
            flexDir={{
                base: 'column',
                md: 'row'
            }}>
            <FormControl>
                <FormLabel>Fist Name</FormLabel>
                <Input type='text' placeholder="Example: except" />
            </FormControl>
            <FormControl>
                <FormLabel>Sur Name</FormLabel>
                <Input type='text' placeholder="Example: me" />
            </FormControl>
        </HStack>
        <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type='email' placeholder="name@mail.com" />
        </FormControl>
        <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea type='text' placeholder="Your message" />
        </FormControl>
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