import React from 'react'
import Sidebar from './components/sidebar'

const Layout = () => {
  return (
    <div className='bg-green-600'>
        <div className='w-[90%] mx-auto flex justify-between py-5 gap-x-4 min-h-screen'>
            <Sidebar />
            <div className='flex-1 min-h-full bg-amber-900'>
                <span>Layout</span>
            </div>
        </div>
    </div>
  )
}

export default Layout