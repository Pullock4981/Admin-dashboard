import { Route, Routes } from "react-router-dom"
import OverviewPage from "./Pages/OverviewPage"
import ProductsPage from "./Pages/ProductsPage"
import Sales from "./Pages/Sales"
import Orders from "./Pages/Orders"
import Sidebar from "./Components/Sidebar"
import UsersPage from "./Pages/UsersPage"
import AnalyticsPage from "./Pages/AnalyticsPage"


function App() {

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* BG */}
			<div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
      </div>
      
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<OverviewPage></OverviewPage>}/>
        <Route path="/products" element={<ProductsPage></ProductsPage>}/>
        <Route path="/users" element={<UsersPage></UsersPage>}/>
        <Route path="/sales" element={<Sales></Sales>}/>
        <Route path="/orders" element={<Orders></Orders>}/>
        <Route path="/analytics" element={<AnalyticsPage></AnalyticsPage>}/>
      </Routes>
    </div>
  )
}

export default App
