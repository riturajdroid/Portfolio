import React from 'react'

const HeadingText = ({e}:{e:string}) => {
  return (
    <div className='text-[#e6e6e6] text-3xl sm:text-4xl md:text-[40px] lg:text-[50px]'>
      {e}
    </div>
  )
}

export default HeadingText
