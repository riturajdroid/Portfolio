import React from 'react'

const DescriptionText = ({e}:{e:string}) => {
  return (
    <div className='p-[10px] text-[#a1a1aa] text-base sm:text-lg lg:text-[20px]'>
      {e}
    </div>
  )
}

export default DescriptionText
