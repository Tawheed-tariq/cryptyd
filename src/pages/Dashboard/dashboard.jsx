import DashboardLayout from "../../components/dashboardLayout";
import PortfolioSection from "./components/portfolioSection";

export default function Dashboard(){
    return(
        <DashboardLayout title={'Dashboard'}>
            <PortfolioSection/>
        </DashboardLayout>
    )
}