import { NavLink, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex h-screen ">
        <div className=" w-[220px] border flex flex-col">
            <NavLink to="/dashboard/" >Overview</NavLink>
            <NavLink to="/dashboard/products">Products</NavLink>
            <NavLink to="/dashboard/orders">Orders</NavLink>
            <NavLink to="/dashboard/customers">Customers</NavLink>
            <NavLink to="/dashboard/settings">Settings</NavLink>
        </div>

        <div className="flex-1 flex flex-col">
        <div className="w-full h-16 bg-gray-300 flex justify-center items-center text-center">header</div>
        <div className="flex-1 flex flex-col justify-center items-center">
            <Outlet />
        </div>
        <div className=" w-full h-16 bg-gray-500 flex justify-center items-center text-center">footer</div>
        </div>
    </div>
  )
}

export default DashboardLayout;