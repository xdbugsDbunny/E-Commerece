import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { BsPlus, BsEyeFill } from 'react-icons/bs'


const Product = ({ products }) => {

  const { id, image, category, title, price } = products
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition' >
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-cent items-center'>
            <img className='max-h-[160px] group-hover:scale-150 transition duration-300' src={image} alt='' />
          </div>
        </div>
        <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
              <BsPlus className='text-3xl' />
            </div>
          </button>
          <Link className='w-[12] h-12 bg-white flex items-center justify-center text-primary drop-shadow-xl' to={`/product/:${id}`}>
            <BsEyeFill className='' />
          </Link>
        </div>
      </div>
      <div>
        <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
        <Link to={`/product/${id}`} >
          <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>
        <div className='font-semibold'>$ {price}</div>
      </div>
    </div>
  )
}

export default Product