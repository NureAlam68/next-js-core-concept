import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div>
      <div className='grid grid-cols-12'>
        {/* side navbar */}
        <div className='col-span-3 bg-green-300'>
            <ul>
                <li>Dashboard</li>
            </ul>
        </div>
        {/* Dashboard content */}
        <div className='col-span-9'>
            {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
