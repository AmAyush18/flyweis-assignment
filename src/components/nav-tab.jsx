import React from 'react'
import { NavLink } from 'react-router-dom'

const NavTab = (props) => {
    const {url, id, label} = props
  return (
    <NavLink 
      key={id} 
      to={url} 
      className={
        ({isActive}) => 
          `px-3 py-2 hover:text-[#fff] hover:bg-[#199fb1] text-[#199fb1] rounded-xl ${isActive ? "bg-[#199fb1] text-[#fff]" : ""} text-lg font-semibold border-b border-b-[#D8D8D8]`
      }>
      {label}
    </NavLink>
  )
}

export default NavTab