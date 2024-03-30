import React, { useContext } from 'react'

import {IoMdArrowForward} from 'react-icons/io'
import { FiTrash2} from 'react-icons/fi'
import CartItem from "./CartItem"
import { SidebarContext } from '../contexts/SidebarContext'

const Sidebar = () => {

  const {isOpen, handleClose} = useContext(SidebarContext)
  return (
    <div className='w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20'>Sidebar</div>
  )
}

export default Sidebar