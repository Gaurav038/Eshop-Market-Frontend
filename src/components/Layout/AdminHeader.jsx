import React from 'react'
import { FiPackage, FiShoppingBag } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { backend_url } from '../../server'

const AdminHeader = () => {
    const {user} = useSelector((state) => state.user);

  return (
         <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/">
          <img
            style={{"width": '140px', 'borderRadius': '10%'}}
            src="/logo.png"
            alt=""
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link to="/admin-products" className="800px:block hidden">
            <FiShoppingBag
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/admin-orders" className="800px:block hidden">
            <FiPackage color="#555" size={30} className="mx-5 cursor-pointer" />
          </Link>
            <img
              src={`${backend_url}${user?.avatar}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
        </div>
      </div>
    </div>
  )
}

export default AdminHeader