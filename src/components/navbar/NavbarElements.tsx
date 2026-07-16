const NavbarElements = ({ e, isActive, onClick }: { e: string, isActive: boolean, onClick: () => void }) => {
    return (
        <div onClick={onClick} className='flex flex-col items-center gap-[5px] group'>
            <div className={`transition-colors duration-150 cursor-pointer ${isActive ? 'text-[#ffffff]' : 'text-[#c1aeae] group-hover:text-[#ffffff]'}`}>
                {e}
            </div>
            <div className={`bg-[#6D28D9] h-[7px] transition-all duration-150 ease-in-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}>
            </div>
        </div>
    )
}

export default NavbarElements
