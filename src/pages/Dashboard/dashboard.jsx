import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/dashboardLayout";
import PortfolioSection from "./components/portfolioSection";
import PriceSection from "./components/priceSection";
import Transactions from "./components/transactions";
import InfoCard from "./components/infoCard";

export default function Dashboard(){
    return(
        <DashboardLayout title={'Dashboard'}>
            <Grid 
            mb={'10'}
            
            gridTemplateColumns={{
                base: `repeat(1, 1fr)`,
                xl: `repeat(2, 1fr)`
            }}
            gap={6}
            >
                <GridItem colSpan={'2'}>
                    <PortfolioSection/>
                </GridItem>
                <GridItem 
                colSpan={{
                    base: 2,
                    xl: 1
                }}>
                    <PriceSection/>
                </GridItem>
                <GridItem 
                colSpan={{
                    base: 2,
                    xl: 1
                }}>
                    <Transactions/>
                </GridItem>
                <GridItem 
                colSpan={{
                    base: 2,
                    xl: 1
                }}>
                    <InfoCard  
                        imgUrl={'images/dotBg.svg'} 
                        text={'Learn more about Loans – Keep your Bitcoin, access it’s value without selling it'} 
                        background={'white'}
                        tag={'Loans'}
                        tagColor={'p.pruple'}
                    />
                </GridItem>
                <GridItem 
                colSpan={{
                    base: 2,
                    xl: 1
                }}>
                    <InfoCard 
                    imgUrl={'images/boxBg.svg'}
                    text={'Learn more about our real estate, mortgage, and corporate account services'}
                    tag={'Contact'}
                    inverted
                    />
                </GridItem>
            </Grid>
            
        </DashboardLayout>
    )
}