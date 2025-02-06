

import AIPoweredInsights from "../Components/Analytics/AIPoweredInsights";
import ChannelPerformance from "../Components/Analytics/ChannelPerformance";
import CustomerSegmentation from "../Components/Analytics/CustomerSegmentation";
import OverviewCards from "../Components/Analytics/OverviewCards";
import ProductPerformance from "../Components/Analytics/ProductPerformance";
import RevenueChart from "../Components/Analytics/RevenueChart";
import UserRetention from "../Components/Analytics/UserRetention";
import Header from "../Components/Common/Header";

const AnalyticsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title={"Analytics Dashboard"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<OverviewCards />
				<RevenueChart />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<ChannelPerformance />
					<ProductPerformance />
					<UserRetention />
					<CustomerSegmentation />
				</div>

				<AIPoweredInsights />
			</main>
		</div>
	);
};
export default AnalyticsPage;
