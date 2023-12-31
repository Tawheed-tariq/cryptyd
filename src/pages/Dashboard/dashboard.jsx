import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/dashboardLayout";
import PortfolioSection from "./components/portfolioSection";
import PriceSection from "./components/priceSection";
import Transactions from "./components/transactions";

export default function Dashboard(){
    return(
        <DashboardLayout title={'Dashboard'}>
            <Grid gridTemplateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)"
            }}
            gap={6}
            >
                <GridItem colSpan={2}>
                    <PortfolioSection/>
                </GridItem>
                <GridItem colSpan={1}>
                    <PriceSection/>
                </GridItem>
                <GridItem colSpan={1}>
                    <Transactions/>
                </GridItem>
            </Grid>
            
        </DashboardLayout>
    )
}