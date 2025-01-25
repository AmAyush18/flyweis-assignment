import React from 'react'
import { navOptions } from './contants'
import NavTab from './nav-tab'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-white min-h-[80vh] min-w-[280px] rounded-2xl gap-y-5'>
        <span className='w-full h-full text-[#199fb1] text-center text-3xl font-semibold border-b border-b-[#D8D8D8] py-6'>
            Flyweis
        </span>
        <nav className='gap-y-2 flex flex-col py-4 px-3'>
            {
            navOptions.map(({id, url, label}) => (
              <NavTab id={id} url={url} label={label} />
            ))
          }
        </nav>
    </div>
  )
}

export default Sidebar