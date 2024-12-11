import Image from 'next/image'
import React from 'react'
import Loader from '../public/ethereum.png'
const Spinner = () => {
  return (
    <Image alt="svgImg" src={Loader} priority quality={100} className='animate-spin'/>
  )
}

export default Spinner