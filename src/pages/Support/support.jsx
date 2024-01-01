import DashboardLayout from "../../components/dashboardLayout";
import SupportCard from "./components.jsx/supportCard";
import ContactCard from "./components.jsx/contactCard";
import { FaEnvelope } from "react-icons/fa";
import {BsFillChatFill} from 'react-icons/bs'
import InfoCard from "../Dashboard/components/infoCard";
import { Stack } from "@chakra-ui/react";

export default function SupportPage(){
    return(
        <DashboardLayout title={'Support'}>
            <Stack gap={8}>
                <SupportCard 
                    leftComponent={<ContactCard/>}
                    icon={FaEnvelope}
                    title={'Contact Us'}
                    text={'Have a question or just want to know more? Feel free to reach out to us.'}
                />
                <SupportCard 
                    leftComponent={
                            <InfoCard 
                                imgUrl={'images/boxBg.svg'}
                                text={'Chat with us now'}
                                tag={'Chatbox'}
                                inverted
                            />}
                    icon={BsFillChatFill}
                    title={'Live Chat'}
                    text={'Don’t have time to wait for the answer? Chat with us now.'}
                />
            </Stack>
        </DashboardLayout>
    )
}